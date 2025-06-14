"use server";

import { postProfile as postProfileApi } from "@/api/profile/profile";
import { paths } from "@/config/paths";
import { profileSchemaWithIntent } from "@/lib/zod";
import { parseWithZod } from "@conform-to/zod";
import { redirect } from "next/navigation";

export async function postProfile(_prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: profileSchemaWithIntent,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  await postProfileApi(submission.value);

  redirect(paths.home.getHref());
}
