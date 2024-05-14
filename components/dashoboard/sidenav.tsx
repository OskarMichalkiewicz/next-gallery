import Link from "next/link";
import { PowerIcon } from "@heroicons/react/24/outline";
import { signOut } from "~/auth";
import NavLinks from "~/components/dashoboard/nav-link";
import { CubeTransparentIcon } from "@heroicons/react/24/solid";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-violet-500 p-4 md:h-40"
        href="/"
      >
        <div className={` flex flex-row items-center gap-1 leading-none`}>
          <CubeTransparentIcon className="h-12 rotate-[30deg]" />
          <p className="text-[44px]">Gallery</p>
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-slate-800 md:block"></div>
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-slate-800 p-3 text-sm font-medium hover:bg-slate-600 hover:text-violet-200 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
