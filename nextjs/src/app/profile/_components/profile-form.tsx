"use client";

import { login } from "@/app/login/action";
import { ErrorText } from "@/components/core/error-text";
import { Input } from "@/components/core/input";
import { Radio } from "@/components/core/radio";
import { RadioGroup } from "@/components/core/radio-group";
import { Select, type SelectItems } from "@/components/core/select";
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

export type ProfileFormProps = {
	yearItems: SelectItems;
	departmentItems: SelectItems;
	gradeItems: SelectItems;
};

export const ProfileForm = ({
	yearItems,
	departmentItems,
	gradeItems,
}: ProfileFormProps) => {
	const [lastResult, action] = useActionState(login, null);
	const [form, fields] = useForm({
		lastResult,
		onValidate({ formData }) {
			return parseWithZod(formData, { schema: profileSchema });
		},
		shouldValidate: "onBlur",
	});

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
					{yearItems.map((year) => (
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
					{departmentItems.map((department) => (
						<Select.Item key={department.value} value={department.value}>
							{department.label}
						</Select.Item>
					))}
				</Select>
				<ErrorText>{fields.department.errors}</ErrorText>
				<RadioGroup className="sm: flex-col md:flex-row">
					{gradeItems.map((grade) => (
						<Radio
							key={grade.value}
							name={fields.grade.name}
							value={grade.value}
							defaultChecked={fields.grade.initialValue === grade.value}
						>
							{grade.label}
						</Radio>
					))}
				</RadioGroup>

				<ErrorText>{fields.grade.errors}</ErrorText>
				<SubmitButton>登録</SubmitButton>
			</div>
		</form>
	);
};
