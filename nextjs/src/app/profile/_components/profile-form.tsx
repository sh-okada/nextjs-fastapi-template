"use client";

import { login } from "@/app/login/action";
import { ErrorText } from "@/components/core/error-text";
import { Input } from "@/components/core/input";
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
	const years = Array.from({ length: 40 }, (_, i) => ({
		value: i + 1,
		label: `${i + 1}年目`,
	}));
	const departments = [
		{ value: 1, label: "人事部" },
		{ value: 2, label: "総務部" },
		{ value: 3, label: "開発センター" },
		{ value: 4, label: "DX推進" },
	];
	const positions = [
		{ value: 1, label: "Sグレード" },
		{ value: 2, label: "Mグレード" },
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
						<Select.Item key={year.value} value={year.value}>
							{year.label}
						</Select.Item>
					))}
				</Select>
				<ErrorText>{fields.years.errors}</ErrorText>
				<Select {...getSelectProps(fields.department)}>
					<Select.Item value={0} hidden>
						選択してください
					</Select.Item>
					{departments.map((department) => (
						<Select.Item key={department.value} value={department.value}>
							{department.label}
						</Select.Item>
					))}
				</Select>
				<ErrorText>{fields.department.errors}</ErrorText>
				{/* <RadioGroup
					inputProps={getInputProps(fields.position, { type: "text" })}
				>
					{(name, defaultValue) =>
						positions.map((position) => (
							<label className="flex items-center gap-1" key={position.value}>
								<input
									type="radio"
									name={name}
									value={position.value}
									defaultChecked={Number(defaultValue) === position.value}
								/>
								<span>{position.label}</span>
							</label>
						))
					}
				</RadioGroup> */}
				<div className="flex gap-2">
					{positions.map((position) => (
						<label className="flex items-center gap-1" key={position.value}>
							<input
								type="radio"
								name={fields.position.name}
								value={position.value}
								defaultChecked={
									Number(fields.position.initialValue) === position.value
								}
							/>
							<span>{position.label}</span>
						</label>
					))}
				</div>

				<ErrorText>{fields.position.errors}</ErrorText>
				<SubmitButton>登録</SubmitButton>
			</div>
		</form>
	);
};
