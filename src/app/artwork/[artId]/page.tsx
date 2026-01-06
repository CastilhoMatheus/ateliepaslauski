import { notFound } from "next/navigation";
import ArtworkClient from "./ArtworkClient";

export async function generateStaticParams() {
  // We still need IDs to prebuild pages
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/artworks`, {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch artworks for static params");
  }

  const artworks: { id: string }[] = await res.json();

  return artworks.map((art) => ({
    artId: art.id,
  }));
}

async function getArtwork(artId: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/artworks/${artId}`,
    {
      cache: "force-cache",
    }
  );

  if (!res.ok) return null;
  return res.json();
}

export default async function ArtworkPage({
  params,
}: {
  params: Promise<{ artId: string }>;
}) {
  const { artId } = await params;
  const artwork = await getArtwork(artId);

  if (!artwork) {
    notFound();
  }

  return <ArtworkClient artwork={artwork} />;
}
// return (
//   <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
//     <div className="container mx-auto px-4 py-8">
//       {/* Back button */}
//       <div className="mb-6">
//         <Link href="/">
//           <Button variant="ghost" size="sm">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={2}
//               stroke="currentColor"
//               className="mr-2 h-4 w-4"
//             >
//               <title>Back arrow</title>
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
//               />
//             </svg>
//             Back to Collection
//           </Button>
//         </Link>
//       </div>

//       {/* Artwork detail */}
//       <div className="grid gap-8 lg:grid-cols-[1.5fr,1fr]">
//         {/* Large image */}
//         <div className="relative overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-[0_20px_60px_rgba(20,30,55,0.12)]">
//           <CldImage
//             src={artwork.image}
//             alt={artwork.title}
//             width={1200}
//             height={900}
//             className="h-auto w-full object-contain"
//             priority
//           />
//           {!artwork.available && (
//             <div className="absolute inset-0 flex items-center justify-center bg-black/50">
//               <span className="rounded-md bg-white px-6 py-3 text-lg font-semibold text-slate-900">
//                 Sold
//               </span>
//             </div>
//           )}
//         </div>

//         {/* Artwork info */}
//         <div className="flex flex-col gap-6">
//           <div className="space-y-4">
//             <Badge variant="neutral" className="normal-case tracking-tight">
//               {artwork.style}
//             </Badge>

//             <h1 className="text-4xl font-[var(--font-display)] leading-tight text-slate-900">
//               {artwork.title}
//             </h1>

//             <div className="flex flex-wrap gap-3">
//               <div className="rounded-lg border border-slate-200 bg-white px-4 py-2">
//                 <p className="text-xs uppercase tracking-wider text-slate-500">
//                   Size
//                 </p>
//                 <p className="mt-1 text-sm font-semibold text-slate-900">
//                   {artwork.size}
//                 </p>
//               </div>

//               <div className="rounded-lg border border-slate-200 bg-white px-4 py-2">
//                 <p className="text-xs uppercase tracking-wider text-slate-500">
//                   Status
//                 </p>
//                 <p className="mt-1 text-sm font-semibold text-slate-900">
//                   {artwork.available ? "Available" : "Sold"}
//                 </p>
//               </div>
//             </div>

//             <Price amount={artwork.price} variant="large" label="Price" />
//           </div>

//           <div className="mt-auto space-y-3">
//             <Link href="/">
//               <Button className="w-full" size="lg">
//                 View More Works
//               </Button>
//             </Link>

//             <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
//               <h3 className="mb-2 text-sm font-semibold text-slate-900">
//                 About This Piece
//               </h3>
//               <p className="text-sm text-slate-600">
//                 This artwork is part of our curated collection. Each piece is
//                 unique and crafted with care.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );
