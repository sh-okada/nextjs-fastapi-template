"use client";

import { login } from "@/app/login/action";
import { ErrorText } from "@/components/core/error-text";
import { Input } from "@/components/core/input";
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
import dayjs from "dayjs";
import { useActionState } from "react";

export const ProfileForm = () => {
	const [lastResult, action] = useActionState(login, null);
	const [form, fields] = useForm({
		lastResult,
		onValidate({ formData }) {
			return parseWithZod(formData, { schema: profileSchema });
		},
		shouldValidate: "onBlur",
		defaultValue: {
			joiningDate: dayjs().format("YYYY-MM-DD"),
			years: 0,
			department: 0,
			position: 1,
		},
	});
	const years = Array.from({ length: 40 }, (_, i) => i + 1);
	const departments = [
		{ id: 1, name: "人事部" },
		{ id: 2, name: "総務部" },
		{ id: 3, name: "開発センター" },
		{ id: 4, name: "DX推進" },
	];
	const positions = [
		{ id: 1, name: "Sグレード" },
		{ id: 2, name: "Mグレード" },
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
					<Select.Item value={0} hidden>
						選択してください
					</Select.Item>
					{years.map((year) => (
						<Select.Item key={year} value={year}>{`${year}年目`}</Select.Item>
					))}
				</Select>
				<ErrorText>{fields.years.errors}</ErrorText>
				<Select {...getSelectProps(fields.department)}>
					<Select.Item value={0} hidden>
						選択してください
					</Select.Item>
					{departments.map((department) => (
						<Select.Item key={department.id} value={department.id}>
							{department.name}
						</Select.Item>
					))}
				</Select>
				<ErrorText>{fields.department.errors}</ErrorText>
				{positions.map((position) => (
					<div key={position.id}>
						<input
							type="radio"
							id={position.name}
							name={fields.position.name}
							value={position.id}
							defaultChecked={
								Number(fields.position.initialValue) === position.id
							}
						/>
						<label htmlFor={position.name}>{position.name}</label>
					</div>
				))}
				<ErrorText>{fields.position.errors}</ErrorText>
				<SubmitButton>登録</SubmitButton>
			</div>
		</form>
	);
};
