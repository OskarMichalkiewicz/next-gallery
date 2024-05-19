import { PowerIcon } from "@heroicons/react/24/outline";
import { signOut } from "~/auth";

export default async function SignOutButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button className="flex h-10 w-full grow items-center justify-center gap-2 rounded-md bg-slate-800 p-3 text-sm font-medium hover:bg-slate-600 hover:text-violet-200 ">
        <PowerIcon className="w-6" />
        <div className="hidden ">Sign Out</div>
      </button>
    </form>
  );
}
