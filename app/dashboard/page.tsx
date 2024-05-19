import Link from "next/link";
import { getFilteredImages } from "~/server/queries";
import Image from "next/image";

export default async function DashboardPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const images = await getFilteredImages(query);
  return (
    <main>
      <ul className="columns-2 gap-x-3 md:columns-3 lg:columns-4 xl:columns-6 2xl:columns-8 ">
        {images.map((image) => (
          <li
            key={image.id}
            className="grid-rows-[1fr, auto] m-0 mb-3 grid break-inside-avoid"
          >
            <Link href={`/dashboard/img/${image.id}`}>
              <Image
                src={image.url}
                alt={image.name}
                width={0}
                height={0}
                sizes="100vw"
                className="h-auto w-full"
              />
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
