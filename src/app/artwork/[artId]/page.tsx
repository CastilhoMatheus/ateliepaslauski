import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import ArtworkClient from "./ArtworkClient";

export async function generateStaticParams() {
  const artworks = await prisma.artwork.findMany({
    select: { id: true },
  });

  return artworks.map((art) => ({
    artId: art.id,
  }));
}

export default async function ArtworkPage({
  params,
}: {
  params: Promise<{ artId: string }>;
}) {
  const { artId } = await params;

  const artwork = await prisma.artwork.findUnique({
    where: { id: artId },
  });

  if (!artwork) {
    notFound();
  }

  return <ArtworkClient artwork={artwork} />;
}
