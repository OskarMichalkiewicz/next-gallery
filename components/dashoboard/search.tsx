"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="relative flex w-full flex-1 flex-shrink-0">
      <input
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        className="peer block h-10 w-full grow rounded-md border border-slate-600 bg-slate-800 py-2 pl-10 text-sm outline-none placeholder:text-slate-400 focus:border-violet-500"
        defaultValue={searchParams.get("query")?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 peer-focus:text-violet-500" />
    </div>
  );
}
