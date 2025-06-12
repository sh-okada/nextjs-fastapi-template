"use server";

import { signup as signupApi } from "@/api/signup/signup";
import { paths } from "@/config/paths";
import { isBadRequestError, isUnAuthorizedError } from "@/lib/axios";
import { signUpSchema } from "@/lib/zod";
import { parseWithZod } from "@conform-to/zod";
import { redirect } from "next/navigation";

export async function signup(_prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: signUpSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  try {
    await signupApi(submission.value);
    return redirect(paths.login.getHref());
  } catch (error) {
    if (isBadRequestError(error)) {
      return submission.reply({
        formErrors: ["ユーザー名は既に使用されています。"],
      });
    }
    throw error;
  }
}
