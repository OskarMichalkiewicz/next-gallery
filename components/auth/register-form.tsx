"use client";

import { register } from "~/app/actions/register";
import { useFormState, useFormStatus } from "react-dom";
import { Button } from "~/components/ui/button";
import Input from "~/components/ui/input";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Form() {
  const initialState = { message: "", errors: {} };
  const [state, dispatch] = useFormState(register, initialState);
  return (
    <form action={dispatch} aria-describedby="form-error">
      <div className="rounded-md bg-slate-800 p-4 md:p-6">
        <h1 className="mb-3 text-2xl">Register to use application.</h1>
        <Input
          label="Email"
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          errors={state.errors?.email}
        />
        <Input
          label="Name"
          id="name"
          name="name"
          type="text"
          placeholder="Name"
          errors={state.errors?.name}
        />
        <Input
          label="Password"
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          aria-describedby="password-error"
          errors={state.errors?.password}
        />
        <div id="form-error" aria-live="polite" aria-atomic="true">
          <p className="mt-2 text-sm text-red-500">{state.message}</p>
        </div>
        <RegisterButton />
      </div>
    </form>
  );
}

function RegisterButton() {
  const { pending } = useFormStatus();
  return (
    <Button className="mt-4 w-full" aria-disabled={pending}>
      Register <ArrowRightIcon className="ml-auto h-5 w-5" />
    </Button>
  );
}
