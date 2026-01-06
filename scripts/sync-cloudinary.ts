import { v2 as cloudinary } from "cloudinary";
import { PrismaClient } from "../src/generated/prisma/client";

// Cloudinary configures automatically from CLOUDINARY_URL env variable
cloudinary.config({ secure: true });

// Parse command line arguments
const args = process.argv.slice(2);
const isDryRun = args.includes("--dry-run");
const onlyWithContext = args.includes("--only-with-context");
const cleanFirst = args.includes("--clean");
const folderArg = args.find((arg) => arg.startsWith("--folder="));
const folder = folderArg?.split("=")[1];

const accelerateUrl = process.env.PRISMA_ACCELERATE_URL;
if (!accelerateUrl) {
  console.error("Missing PRISMA_ACCELERATE_URL environment variable");
  process.exit(1);
}

const prisma = new PrismaClient({ accelerateUrl });

interface CloudinaryResource {
  public_id: string;
  metadata?: Record<string, string | number | boolean>;
  context?: Record<string, string>;
  tags?: string[];
  folder?: string;
}

interface CloudinarySearchResult {
  resources: CloudinaryResource[];
  next_cursor?: string;
}

async function fetchAllResources(): Promise<CloudinaryResource[]> {
  const allResources: CloudinaryResource[] = [];
  let nextCursor: string | undefined;

  // Build search expression - filter by folder if specified
  const expression = folder
    ? `resource_type:image AND folder:${folder}`
    : "resource_type:image";

  do {
    const result: CloudinarySearchResult = await cloudinary.search
      .expression(expression)
      .with_field("metadata")
      .with_field("context")
      .with_field("tags")
      .max_results(100)
      .next_cursor(nextCursor ?? "")
      .execute();

    allResources.push(...result.resources);
    nextCursor = result.next_cursor;
  } while (nextCursor);

  return allResources;
}

async function syncToDatabase(resources: CloudinaryResource[]) {
  // Filter to only images with context if flag is set
  const filtered = onlyWithContext
    ? resources.filter(
        (r) => r.context && Object.keys(r.context).length > 0
      )
    : resources;

  console.log(`Found ${resources.length} images in Cloudinary`);
  if (onlyWithContext) {
    console.log(`Filtered to ${filtered.length} images with context metadata`);
  }
  console.log("");

  for (const resource of filtered) {
    const metadata = resource.metadata || {};

    if (isDryRun) {
      console.log(`📷 ${resource.public_id}`);
      console.log(`   Folder: ${resource.folder || "(root)"}`);
      console.log(`   Context: ${JSON.stringify(resource.context || {})}`);
      console.log("");
      continue;
    }

    // Map Cloudinary context metadata to Prisma fields
    const context = resource.context || {};
    const artwork = {
      id: resource.public_id,
      title: String(context.caption || resource.public_id),
      price: Number(context.price) || 0,
      size: String(context.size || ""),
      style: String(context.style || ""),
      image: resource.public_id,
      available: context.available?.toLowerCase() !== "false",
    };

    try {
      await prisma.artwork.upsert({
        where: { id: artwork.id },
        update: artwork,
        create: artwork,
      });
      console.log(`✓ Synced: ${artwork.title}`);
    } catch (error) {
      console.error(`✗ Failed to sync ${resource.public_id}:`, error);
    }
  }
}

async function main() {
  if (isDryRun) {
    console.log("🔍 DRY RUN - showing metadata only, not syncing\n");
  }
  if (folder) {
    console.log(`📁 Filtering to folder: ${folder}`);
  }
  if (onlyWithContext) {
    console.log("📋 Only syncing images with context metadata");
  }

  if (cleanFirst && !isDryRun) {
    console.log("🗑️  Cleaning database first...");
    const deleted = await prisma.artwork.deleteMany({});
    console.log(`   Deleted ${deleted.count} records\n`);
  }

  console.log("Fetching images from Cloudinary...\n");

  try {
    const resources = await fetchAllResources();
    await syncToDatabase(resources);

    if (!isDryRun) {
      console.log("\nSync complete!");
    }
  } catch (error) {
    console.error("Sync failed:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
