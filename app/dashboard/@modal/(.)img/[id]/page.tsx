import { Modal } from "~/components/ui/modal";
import FullPageImage from "~/components/ui/full-page-image";

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
