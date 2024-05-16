import "server-only";
import { db } from "./db";
import { auth } from "~/auth";

export const getImages = async () => {
  const session = await auth();
  if (!session?.user?.id) throw new Error("Unauthorized");

  const images = await db.query.images.findMany({
    where: (model, { eq }) => eq(model.userId, session?.user?.id || ""),
    orderBy: (model, { desc }) => desc(model.id),
  });
  return images;
};
export const getImage = async (id: string) => {
  const session = await auth();
  if (!session?.user?.id) throw new Error("Unauthorized");

  const image = await db.query.images.findFirst({
    where: (model, { eq }) => eq(model.id, id),
  });

  if (!image) throw new Error("Image not found");
  if (image.userId !== session.user.id) throw new Error("Unauthorized");

  return image;
};
