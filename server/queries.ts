import "server-only";
import { db } from "./db";
import { auth } from "~/auth";
import { unstable_noStore as noStore } from "next/cache";

export const getImages = async () => {
  try {
    const session = await auth();
    if (!session?.user?.id) throw new Error("Unauthorized");

    const images = await db.query.images.findMany({
      where: (model, { eq }) => eq(model.userId, session?.user?.id || ""),
      orderBy: (model, { desc }) => desc(model.id),
    });
    return images;
  } catch (e) {
    console.error("Database error: ", e);
    throw new Error("Failed to fetch images.");
  }
};
export const getImage = async (id: string) => {
  try {
    const session = await auth();
    if (!session?.user?.id) throw new Error("Unauthorized");

    const image = await db.query.images.findFirst({
      where: (model, { eq }) => eq(model.id, id),
    });

    if (!image) throw new Error("Image not found");
    if (image.userId !== session.user.id) throw new Error("Unauthorized");

    return image;
  } catch (e) {
    console.error("Database error: ", e);
    throw new Error("Failed to fetch images.");
  }
};
export const getFilteredImages = async (query: string) => {
  noStore();
  console.log(query);
  try {
    const session = await auth();
    if (!session?.user?.id) throw new Error("Unauthorized");
    const images = await db.query.images.findMany({
      where: (model, { ilike, and }) =>
        and(
          ilike(model.name, `%${query}%`),
          ilike(model.userId, session.user?.id || ""),
        ),
    });
    return images;
  } catch (e) {
    console.error("Database error: ", e);
    throw new Error("Failed to fetch images.");
  }
};
