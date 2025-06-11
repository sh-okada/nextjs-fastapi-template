"use client";

import { login } from "@/app/login/action";
import { ErrorText } from "@/components/core/error-text";
import { Field } from "@/components/core/field";
import { Input } from "@/components/core/input";
import { NextLink } from "@/components/ui-parts/next-link";
import { SubmitButton } from "@/components/ui-parts/submit-button";
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
				<Field>
					<Field.Label htmlFor={fields.username.id}>ユーザー名</Field.Label>
					<Input
						{...getInputProps(fields.username, { type: "text" })}
						key={fields.username.key}
						isError={Boolean(fields.username.errors)}
					/>
					<ErrorText>{fields.username.errors}</ErrorText>
				</Field>
				<Field>
					<Field.Label htmlFor={fields.password.id}>パスワード</Field.Label>
					<Input
						{...getInputProps(fields.password, { type: "password" })}
						key={fields.password.key}
						isError={Boolean(fields.password.errors)}
					/>
					<ErrorText>{fields.password.errors}</ErrorText>
				</Field>
				<SubmitButton>ログイン</SubmitButton>
				<NextLink href={paths.signup.getHref()}>新規登録はこちら</NextLink>
			</div>
		</form>
	);
};
