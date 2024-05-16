import { getImage } from "~/server/queries";

export default async function FullPageImage({ id }: { id: string }) {
  const image = await getImage(id);
  return (
    <div className="flex h-full justify-center">
      <div className="flex flex-shrink justify-start">
        <img
          className="flex-shrink object-contain"
          src={image.url}
          alt={image.name}
        />
      </div>
      <div className="flex w-72 flex-shrink-0 justify-center bg-black">
        <p className="text-lg">{image.name}</p>
      </div>
    </div>
  );
}
