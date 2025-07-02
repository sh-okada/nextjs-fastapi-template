"use server";

import { parseWithZod } from "@conform-to/zod";
import { redirect } from "next/navigation";
import { paths } from "@/config/paths";
import { postDocSchema } from "@/lib/zod/schema";

export async function postDoc(_prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: postDocSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  redirect(paths.home.getHref({}));
}
