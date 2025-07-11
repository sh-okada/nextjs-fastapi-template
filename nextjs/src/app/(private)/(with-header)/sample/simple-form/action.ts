"use server";

import { parseWithZod } from "@conform-to/zod";
import { redirect } from "next/navigation";
import { postProfile as postProfileApi } from "@/api/users";
import { paths } from "@/config/paths";
import { isConflictError } from "@/lib/axios";
import { profileSchema } from "@/lib/zod/schema";

export async function postProfile(_prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: profileSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  try {
    await postProfileApi(submission.value);
  } catch (error) {
    if (isConflictError(error)) {
      return submission.reply({
        formErrors: ["プロフィールは既に登録されています。"],
      });
    }
    throw error;
  }

  redirect(paths.home.getHref({}));
}
