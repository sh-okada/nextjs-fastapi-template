"use server";

import { isUnAuthorizedError } from "@/lib/axios";
import { profileSchema } from "@/lib/zod";
import { parseWithZod } from "@conform-to/zod";
import { AuthError } from "next-auth";

export async function postProfile(_prevState: unknown, formData: FormData) {
	const submission = parseWithZod(formData, {
		schema: profileSchema,
	});

	if (submission.status !== "success") {
		return submission.reply();
	}

	try {
		await postProfile(Object.fromEntries(formData));
	} catch (error) {
		if (error instanceof AuthError && isUnAuthorizedError(error.cause?.err)) {
			return submission.reply({
				formErrors: ["ユーザ名またはパスワードが間違っています"],
			});
		}
		throw error;
	}
}
