"use server";

import { parseWithZod } from "@conform-to/zod";
import { redirect } from "next/navigation";
import { postDoc as postDocApi } from "@/api/docs";
import { paths } from "@/config/paths";
import { postDocSchema } from "@/lib/zod/schema";

export async function postDoc(_prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: postDocSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  await postDocApi(submission.value);

  redirect(paths.home.getHref({}));
}
