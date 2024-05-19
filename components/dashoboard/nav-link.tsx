"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { UploadButton } from "../uploadthing";
import { useRouter } from "next/navigation";

const links = [{ name: "Home", href: "/dashboard" }];

export default function NavLinks() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-10 items-center justify-center gap-2 rounded-md bg-slate-600 p-3 text-sm font-medium text-violet-200 hover:bg-slate-600 hover:text-violet-200 ",
              {
                "bg-slate-800 text-slate-50": pathname !== link.href,
              },
            )}
          >
            <p className="">{link.name}</p>
          </Link>
        );
      })}
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={() => {
          router.refresh();
        }}
      />
    </>
  );
}
