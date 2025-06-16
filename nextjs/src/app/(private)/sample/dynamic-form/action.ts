"use server";

import { paths } from "@/config/paths";
import { addressSchema } from "@/lib/zod";
import { parseWithZod } from "@conform-to/zod";
import { redirect } from "next/navigation";

export async function postAddress(_prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: addressSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  redirect(paths.home.getHref());
}
