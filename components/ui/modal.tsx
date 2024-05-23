"use client";

import { type ElementRef, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <dialog
      ref={dialogRef}
      className="h-screen w-screen bg-zinc-900/50 text-violet-50"
      onClose={onDismiss}
    >
      <XMarkIcon
        onClick={onDismiss}
        className="absolute left-6 top-3 w-7 cursor-pointer"
      />
      {children}
    </dialog>,
    document.getElementById("modal-root")!,
  );
}
