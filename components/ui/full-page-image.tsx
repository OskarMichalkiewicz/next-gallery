import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { getImage, getUser } from "~/server/queries";

export default async function FullPageImage({ id }: { id: string }) {
  const image = await getImage(id);
  const user = await getUser(image.userId);
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-slate-950">
      <div className="flex h-16 w-full justify-end">
        <EllipsisVerticalIcon className="mr-6 w-7 cursor-pointer" />
      </div>
      <img
        className="h-[calc(100%-12rem)] object-contain"
        src={image.url}
        alt={image.name}
      />
      <div className=" h-32 w-full px-6">
        <p className="text-xl font-bold">{user.name}</p>
        <p>{image.name}</p>
      </div>
    </div>
  );
}
