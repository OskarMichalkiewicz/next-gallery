import { CubeTransparentIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function LogoHeader() {
  return (
    <Link
      className="flex h-10 grow items-center justify-start rounded-md bg-violet-950 px-2"
      href="/"
    >
      <div className="flex flex-row items-center gap-1 leading-none">
        <CubeTransparentIcon className="h-8 rotate-[30deg]" />
        <p className="text-3xl">Gallery</p>
      </div>
    </Link>
  );
}
