import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  _: Request,
  { params }: { params: Promise<{ artId: string }> }
) {
  const { artId } = await params;

  const artwork = await prisma.artwork.findUnique({
    where: { id: artId },
  });

  if (!artwork) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(artwork);
}
