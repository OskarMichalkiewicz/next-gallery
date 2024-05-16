import { CubeTransparentIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";

export default async function HomePage() {
  return (
    <main className="m-auto w-[800px] ">
      <div className={`flex flex-row items-center gap-1 leading-none`}>
        <CubeTransparentIcon className="h-60 rotate-[30deg]" />
        <p className="text-[10rem]">Gallery</p>
      </div>

      <div className="m-auto max-w-36">
        <Link
          href="/login"
          className={clsx(
            "mb-2 flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-slate-600 p-3 text-sm font-medium text-violet-200 hover:bg-slate-600 hover:text-violet-200 md:flex-none md:justify-start md:p-2 md:px-3",
          )}
        >
          <p className="text-lg">Login</p>
        </Link>
        <Link
          href="/register"
          className={clsx(
            "flex h-[48px] grow items-center justify-center rounded-md bg-slate-600 p-3 text-sm font-medium text-violet-200 hover:bg-slate-600 hover:text-violet-200 md:flex-none md:justify-start md:p-2 md:px-3",
          )}
        >
          <p className="text-lg">Register</p>
        </Link>
      </div>
    </main>
  );
}
