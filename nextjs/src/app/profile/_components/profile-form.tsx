"use client";

import { login } from "@/app/login/action";
import { postProfile } from "@/app/profile/action";
import { ErrorText } from "@/components/core/error-text";
import { Field } from "@/components/core/field";
import { Fieldset } from "@/components/core/fieldset";
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
	const [lastResult, action] = useActionState(postProfile, null);
	const [form, fields] = useForm({
		lastResult,
		onValidate({ formData }) {
			return parseWithZod(formData, { schema: profileSchema });
		},
		shouldValidate: "onBlur",
	});

	return (
		<form {...getFormProps(form)} action={action}>
			<div className="flex flex-col gap-2">
				<Fieldset>
					<Fieldset.Legend>入社日を選択</Fieldset.Legend>
					<Input
						{...getInputProps(fields.joiningDate, { type: "date" })}
						key={fields.joiningDate.key}
					/>
					<ErrorText>{fields.joiningDate.errors}</ErrorText>
				</Fieldset>
				<Field>
					<Field.Label htmlFor={fields.years.id}>入社年数を選択</Field.Label>
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
				</Field>
				<Field>
					<Field.Label htmlFor={fields.department.id}>部署を選択</Field.Label>
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
				</Field>
				<Fieldset>
					<Fieldset.Legend>グレードを選択</Fieldset.Legend>
					<RadioGroup className="flex-col md:flex-row flex-wrap gap-2">
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
				</Fieldset>
				<SubmitButton>登録</SubmitButton>
			</div>
		</form>
	);
};
