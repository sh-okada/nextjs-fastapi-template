"use server";

import { paths } from "@/config/paths";
import { personalInfoSchema } from "@/lib/zod/schema";
import { parseWithZod } from "@conform-to/zod";
import { redirect } from "next/navigation";

export async function submitPersonalInfo(
  _prevState: unknown,
  formData: FormData,
) {
  const submission = parseWithZod(formData, {
    schema: personalInfoSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  redirect(paths.home.getHref());
}
