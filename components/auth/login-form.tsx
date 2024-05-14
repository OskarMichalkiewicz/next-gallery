"use client";

import Link from "next/link";
import { authenticate } from "~/app/actions/register";
import { useFormState, useFormStatus } from "react-dom";
import { Button } from "~/components/button";
import Input from "~/components/input";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Form() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  return (
    <form action={dispatch} aria-describedby="form-error">
      <div className="rounded-md bg-slate-600 p-4 md:p-6">
        <h1 className="mb-3 text-2xl">Please log in to continue.</h1>
        <Input
          label="Email"
          placeholder="Email"
          id="email"
          type="email"
          name="email"
        />
        <Input
          label="Password"
          id="password"
          name="password"
          type="password"
          placeholder="Password"
        />
        <div className="flex items-end space-x-1">
          <div
            className="flex items-end space-x-1"
            aria-live="polite"
            aria-atomic="true"
          >
            {errorMessage && (
              <>
                <p className="text-sm text-red-500">{errorMessage}</p>
              </>
            )}
          </div>
        </div>
        <LoginButton />
      </div>
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();
  return (
    <Button className="mt-4 w-full" aria-disabled={pending}>
      Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-slate-50" />
    </Button>
  );
}
