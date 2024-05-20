import {
  ArrowRightIcon,
  CubeTransparentIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { Button } from "~/components/button";

export default async function HomePage() {
  return (
    <main className="absolute inset-0 m-auto h-fit w-fit space-y-2.5">
      <div className="flex h-auto justify-center rounded-lg bg-violet-900 p-3">
        <div className={`flex flex-row items-center gap-1 leading-none`}>
          <CubeTransparentIcon className="h-28 rotate-[30deg]" />
          <p className="text-[5rem]">Gallery</p>
        </div>
      </div>
      <div className="flex w-full gap-4 rounded-md bg-slate-600 p-4">
        <Link href="/login" className="mt-4 w-full">
          <Button className="w-full">
            Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-slate-50" />
          </Button>
        </Link>
        <Link href="/register" className="mt-4 w-full">
          <Button className="w-full">
            Register
            <ArrowRightIcon className="ml-auto h-5 w-5 text-slate-50" />
          </Button>
        </Link>
      </div>
    </main>
  );
}
