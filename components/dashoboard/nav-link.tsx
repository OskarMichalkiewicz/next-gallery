"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { SimpleUploadButton } from "../uploadthing/simple-upload-button";
import { HomeIcon } from "@heroicons/react/24/outline";

const links = [{ name: "Home", href: "/dashboard" }];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-10 items-center justify-center gap-2 rounded-md bg-slate-600 p-3 text-sm font-medium text-violet-100 hover:bg-slate-600 hover:text-violet-200 ",
              {
                "bg-slate-800 text-violet-200": pathname !== link.href,
              },
            )}
          >
            <HomeIcon className="w-6" />
          </Link>
        );
      })}
      <SimpleUploadButton />
    </>
  );
}
