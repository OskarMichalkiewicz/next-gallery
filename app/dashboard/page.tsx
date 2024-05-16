import Link from "next/link";
import { getImages } from "~/server/queries";
import Image from "next/image";

export default async function DashboardPage() {
  const images = await getImages();
  return (
    <main>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-2">
        {images.map((image) => (
          <div key={image.id} className="flex w-48 flex-col">
            <Link href={`/dashboard/img/${image.id}`}>
              <Image
                src={image.url}
                alt={image.name}
                style={{ objectFit: "contain" }}
                width={192}
                height={192}
              />
            </Link>
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
