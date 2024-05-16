import Image from "next/image";
import { getImages } from "~/server/queries";
export default async function DashboardPage() {
  const images = await getImages();
  return (
    <main>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-2">
        {images.map((image) => (
          <div key={image.id} className="flex w-48 flex-col">
            <Image
              src={image.url}
              alt={image.name}
              style={{ objectFit: "contain" }}
              width={192}
              height={192}
            />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
