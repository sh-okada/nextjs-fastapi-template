"use client";

import { login } from "@/app/login/action";
import { ErrorText } from "@/components/core/error-text";
import { Input } from "@/components/core/input";
import { Radio } from "@/components/core/radio";
import { RadioGroup } from "@/components/core/radio-group";
import { Select } from "@/components/core/select";
import { SubmitButton } from "@/components/core/submit-button";
import { profileSchema } from "@/lib/zod";
import {
	getFormProps,
	getInputProps,
	getSelectProps,
	useForm,
} from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { useActionState } from "react";

export const ProfileForm = () => {
	const [lastResult, action] = useActionState(login, null);
	const [form, fields] = useForm({
		lastResult,
		onValidate({ formData }) {
			return parseWithZod(formData, { schema: profileSchema });
		},
		shouldValidate: "onBlur",
	});
	const years = Array.from({ length: 40 }, (_, i) => ({
		value: (i + 1).toString(),
		label: `${i + 1}年目`,
	}));
	const departments = [
		{ value: "1", label: "人事部" },
		{ value: "2", label: "総務部" },
		{ value: "3", label: "開発センター" },
		{ value: "4", label: "DX推進" },
	];
	const positions = [
		{ value: "1", label: "S1グレード" },
		{ value: "2", label: "S2グレード" },
		{ value: "3", label: "S3グレード" },
		{ value: "4", label: "S4グレード" },
		{ value: "5", label: "M1グレード" },
		{ value: "6", label: "M2グレード" },
		{ value: "7", label: "M3グレード" },
		{ value: "8", label: "M4グレード" },
	];

	return (
		<form {...getFormProps(form)} action={action}>
			<div className="flex flex-col">
				<Input
					{...getInputProps(fields.joiningDate, { type: "date" })}
					key={fields.joiningDate.key}
				/>
				<ErrorText>{fields.joiningDate.errors}</ErrorText>
				<Select {...getSelectProps(fields.years)}>
					<Select.Item value="" hidden>
						選択してください
					</Select.Item>
					{years.map((year) => (
						<Select.Item key={year.value} value={year.value}>
							{year.label}
						</Select.Item>
					))}
				</Select>
				<ErrorText>{fields.years.errors}</ErrorText>
				<Select {...getSelectProps(fields.department)}>
					<Select.Item value="" hidden>
						選択してください
					</Select.Item>
					{departments.map((department) => (
						<Select.Item key={department.value} value={department.value}>
							{department.label}
						</Select.Item>
					))}
				</Select>
				<ErrorText>{fields.department.errors}</ErrorText>
				<RadioGroup className="sm: flex-col md:flex-row">
					{positions.map((position) => (
						<Radio
							key={position.value}
							name={fields.position.name}
							value={position.value}
							defaultChecked={fields.position.initialValue === position.value}
						>
							{position.label}
						</Radio>
					))}
				</RadioGroup>

				<ErrorText>{fields.position.errors}</ErrorText>
				<SubmitButton>登録</SubmitButton>
			</div>
		</form>
	);
};
