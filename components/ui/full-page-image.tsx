import { getImage } from "~/server/queries";

export default async function FullPageImage({ id }: { id: string }) {
  const image = await getImage(id);
  return (
    <div className="my-auto flex h-full items-center justify-center">
      <div className=" relative flex h-[90%] flex-col justify-start bg-black">
        <img
          className="h-full flex-shrink object-contain"
          src={image.url}
          alt={image.name}
        />
        <div className="absolute bottom-0 h-32 w-full flex-shrink-0 bg-zinc-900/85 p-2">
          <p className="text-lg">{image.name}</p>
        </div>
      </div>
    </div>
  );
}
