import { db } from "~/server/db";
export default async function DashboardPage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  return (
    <main>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] gap-2">
        {images.map((image) => (
          <div key={image.id} className="flex w-48 flex-col">
            <img src={image.url} />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
