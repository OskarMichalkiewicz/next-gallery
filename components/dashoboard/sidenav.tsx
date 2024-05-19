import Link from "next/link";
import NavLinks from "~/components/dashoboard/nav-link";
import { CubeTransparentIcon } from "@heroicons/react/24/solid";
import SignOutButton from "./sign-out-button";
import { Search } from "./search";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4">
      <Link
        className="mb-2 flex h-10 items-center justify-start rounded-md bg-violet-900 px-2"
        href="/"
      >
        <div className="flex flex-row items-center gap-1 leading-none">
          <CubeTransparentIcon className="h-8 rotate-[30deg]" />
          <p className="text-3xl">Gallery</p>
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2">
        <NavLinks />
        <Search />
        <SignOutButton />
      </div>
    </div>
  );
}
