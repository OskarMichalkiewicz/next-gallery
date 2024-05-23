"use client";

import { useRouter } from "next/navigation";
import { useUploadThing } from "~/components/uploadthing";
import { toast } from "sonner";
import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";

type Input = Parameters<typeof useUploadThing>;

const useUploadThingInputProps = (...args: Input) => {
  const $ut = useUploadThing(...args);

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const selectedFiles = Array.from(e.target.files);
    const result = await $ut.startUpload(selectedFiles);

    console.log("uploaded files", result);
    // TODO: persist result in state maybe?
  };

  return {
    inputProps: {
      onChange,
      multiple: ($ut.permittedFileInfo?.config?.image?.maxFileCount ?? 1) > 1,
      accept: "image/*",
    },
    isUploading: $ut.isUploading,
  };
};

export function SimpleUploadButton() {
  const router = useRouter();

  const { inputProps } = useUploadThingInputProps("imageUploader", {
    onUploadBegin() {
      toast.promise(
        new Promise((resolve) =>
          setTimeout(() => resolve({ name: "upload-begin" }), 100000),
        ),
        {
          loading: "Uploading...",
          id: "upload-begin",
        },
      );
    },
    onUploadError(_) {
      toast.dismiss("upload-begin");
      toast.error("Upload failed");
    },
    onClientUploadComplete() {
      toast.dismiss("upload-begin");
      toast("Upload complete!");

      router.refresh();
    },
  });

  return (
    <>
      <label
        htmlFor="upload-button"
        className="flex h-10 cursor-pointer items-center justify-center gap-2 rounded-md bg-slate-800 p-3 text-sm font-medium text-violet-50 hover:bg-slate-600 hover:text-violet-200"
      >
        <ArrowUpTrayIcon className="w-6" />
      </label>
      <input
        id="upload-button"
        type="file"
        className="sr-only"
        {...inputProps}
      />
    </>
  );
}
