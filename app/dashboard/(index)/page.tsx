import Link from "next/link";
import { getFilteredImages, getUser } from "~/server/queries";
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
      <ul className="columns-2 gap-x-3 xl:columns-3 2xl:columns-6 ">
        {images.map(async (image) => {
          const uploader = await getUser(image.userId);
          return (
            <li
              key={image.id}
              className="grid-rows-[1fr, auto] m-0 mb-3 grid break-inside-avoid"
            >
              <Link
                href={`/dashboard/img/${image.id}`}
                className="group relative"
              >
                <Image
                  src={image.url}
                  alt={image.name}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-auto w-full"
                />
                <div className="pointer-events-none absolute bottom-0 flex h-0 w-full flex-col justify-center pl-4 transition-all duration-300 group-hover:h-20 group-hover:bg-gradient-to-t group-hover:from-black/50">
                  <p className="text-lg font-bold opacity-0 group-hover:opacity-100">
                    {uploader.name}
                  </p>
                  <p className="text-sm opacity-0 group-hover:opacity-100">
                    {image.name}
                  </p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
