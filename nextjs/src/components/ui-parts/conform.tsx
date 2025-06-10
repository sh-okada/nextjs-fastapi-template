"use client";

import type { Combine, SubmissionResult } from "@conform-to/dom";
import {
	type FieldMetadata,
	type FormMetadata,
	useForm,
} from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { type ReactNode, useActionState } from "react";
import type { z } from "zod";

export type ConformProps<T extends z.ZodTypeAny> = {
	schema: T;
	formAction: (
		prevState: unknown,
		formData: FormData,
	) => Promise<SubmissionResult<string[]> | undefined>;
	children: (
		form: FormMetadata<z.input<T>, string[]>,
		fields: Required<{
			[Key in keyof Combine<z.input<T>>]: FieldMetadata<
				Combine<z.input<T>>[Key],
				z.input<T>,
				string[]
			>;
		}>,
		action: (payload: FormData) => void,
	) => ReactNode;
};

export const Conform = <T extends z.ZodTypeAny>({
	schema,
	formAction,
	children,
}: ConformProps<T>) => {
	const [lastResult, action] = useActionState(formAction, null);
	const [form, fields] = useForm({
		lastResult,
		onValidate({ formData }) {
			return parseWithZod(formData, { schema: schema });
		},
		shouldValidate: "onBlur",
	});

	return <>{children(form, fields, action)}</>;
};
