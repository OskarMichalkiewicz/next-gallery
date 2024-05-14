import { LockClosedIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Metadata } from "next";
import Link from "next/link";
import LoginForm from "~/components/auth/login-form";

export const metadata: Metadata = {
  title: "Login",
};

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end justify-between rounded-lg bg-violet-500 p-3 md:h-36">
          <div className="text-white md:w-36">
            <LockClosedIcon className="h-16 text-slate-50" />
          </div>
          <Link href="/" className="self-start">
            <XMarkIcon className="h-8 text-slate-50" />
          </Link>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
