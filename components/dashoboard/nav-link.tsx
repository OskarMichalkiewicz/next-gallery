"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [{ name: "Home", href: "/dashboard" }];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        console.log(link.href, pathname);
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-slate-600 p-3 text-sm font-medium text-violet-200 hover:bg-slate-600 hover:text-violet-200 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-slate-800 text-slate-50": pathname !== link.href,
              },
            )}
          >
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
