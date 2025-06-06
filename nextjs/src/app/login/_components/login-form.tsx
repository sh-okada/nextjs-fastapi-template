"use client";

import { login } from "@/app/login/action";
import { ErrorText } from "@/components/core/error-text";
import { Input } from "@/components/core/input";
import { SubmitButton } from "@/components/core/submit-button";
import { paths } from "@/config/paths";
import { loginSchema } from "@/lib/zod";
import { getFormProps, getInputProps, useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import Link from "next/link";
import { useActionState } from "react";

export const LoginForm = () => {
	const [lastResult, action] = useActionState(login, null);
	const [form, fields] = useForm({
		lastResult,
		onValidate({ formData }) {
			return parseWithZod(formData, { schema: loginSchema });
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
				<SubmitButton>ログイン</SubmitButton>
				<Link href={paths.signup.getHref()}>新規登録はこちら</Link>
			</div>
		</form>
	);
};
