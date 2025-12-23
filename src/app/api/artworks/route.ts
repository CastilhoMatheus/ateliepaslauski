import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const artworks = await prisma.artwork.findMany({
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(artworks);
}
