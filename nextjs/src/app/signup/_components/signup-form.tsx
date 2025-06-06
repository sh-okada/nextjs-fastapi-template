"use client";

import { signup } from "@/app/signup/action";
import { ErrorText } from "@/components/core/error-text";
import { Input } from "@/components/core/input";
import { SubmitButton } from "@/components/core/submit-button";
import { paths } from "@/config/paths";
import { signUpSchema } from "@/lib/zod";
import { getFormProps, getInputProps, useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import Link from "next/link";
import { useActionState } from "react";

export const SignUpForm = () => {
	const [lastResult, action] = useActionState(signup, null);
	const [form, fields] = useForm({
		lastResult,
		onValidate({ formData }) {
			return parseWithZod(formData, { schema: signUpSchema });
		},
		shouldValidate: "onBlur",
	});

	return (
		<form {...getFormProps(form)} action={action}>
			<ErrorText>{form.errors}</ErrorText>
			<div className="flex flex-col">
				<Input
					{...getInputProps(fields.username, { type: "text" })}
					key={fields.username.key}
				/>
				<ErrorText>{fields.username.errors}</ErrorText>
				<Input
					{...getInputProps(fields.password, { type: "password" })}
					key={fields.password.key}
				/>
				<ErrorText>{fields.password.errors}</ErrorText>
				<SubmitButton>登録</SubmitButton>
				<Link href={paths.login.getHref()}>ログインはこちら</Link>
			</div>
		</form>
	);
};
