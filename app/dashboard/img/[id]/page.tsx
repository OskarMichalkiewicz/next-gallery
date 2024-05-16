import FullPageImage from "~/components/full-page-image";

export default async function ImagePage({
  params: { id },
}: {
  params: { id: string };
}) {
  return <FullPageImage id={id} />;
}
