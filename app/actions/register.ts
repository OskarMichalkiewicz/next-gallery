"use server";

import bcrypt from "bcrypt";
import { AuthError } from "next-auth";
import { object, string } from "zod";
import { signIn } from "~/auth";
import { db } from "~/server/db";
import { users } from "~/server/db/schema";

const RegisterSchema = object({
  email: string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email"),
  password: string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
  name: string().min(1, {
    message: "Name is required",
  }),
});

export type State = {
  errors?: {
    name?: string[];
    password?: string[];
    email?: string[];
  };
  message?: string | null;
};

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}

export const register = async (prevState: State, values: FormData) => {
  const validateFields = RegisterSchema.safeParse({
    name: values.get("name"),
    password: values.get("password"),
    email: values.get("email"),
  });

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: "Missing fields. Failed to register user.",
    };
  }
  const { email, password, name } = validateFields.data;
  const hashedPW = await bcrypt.hash(password, 10);

  const user = await db.query.users.findFirst({
    where: (users, { eq, and }) => and(eq(users.email, email)),
  });
  if (user) return { message: "Email alredy in use" };
  try {
    await db.insert(users).values({ name, email, password: hashedPW });
  } catch (e) {
    return {
      message: "Database error: failed to create user.",
    };
  }

  return { success: "User registered" };
};
