import { Modal } from "./modal";
import FullPageImage from "~/components/full-page-image";

export default async function ImageModal({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <Modal>
      <FullPageImage id={id} />
    </Modal>
  );
}
