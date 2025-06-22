"use client";

import {
	getFormProps,
	getInputProps,
	getSelectProps,
	useForm,
} from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { useActionState } from "react";
import { postProfile } from "@/app/(private)/sample/simple-form/action";
import { Button } from "@/components/core/button";
import { DatePicker } from "@/components/core/date-picker";
import { ErrorText } from "@/components/core/error-text";
import { Field } from "@/components/core/field";
import { Fieldset } from "@/components/core/fieldset";
import { Radio } from "@/components/core/radio";
import { RadioGroup } from "@/components/core/radio-group";
import { Section } from "@/components/core/section/section";
import { Select, type SelectItems } from "@/components/core/select";
import { profileSchema } from "@/lib/zod/schema";

export type SimpleFormProps = {
	yearItems: SelectItems<number>;
	departmentItems: SelectItems<string>;
	gradeItems: SelectItems<string>;
};

export const SimpleForm = ({
	yearItems,
	departmentItems,
	gradeItems,
}: SimpleFormProps) => {
	const [lastResult, action] = useActionState(postProfile, null);
	const [form, fields] = useForm({
		lastResult,
		onValidate({ formData }) {
			return parseWithZod(formData, { schema: profileSchema });
		},
		shouldValidate: "onBlur",
	});

	return (
		<form
			className="flex flex-col gap-4"
			{...getFormProps(form)}
			action={action}
		>
			<Section>
				<Section.Header>プロフィールを入力</Section.Header>
				<Section.Content className="flex flex-col gap-4">
					<Fieldset>
						<Fieldset.Legend>入社日を選択</Fieldset.Legend>
						<DatePicker
							{...getInputProps(fields.joiningDate, { type: "date" })}
							key={fields.joiningDate.key}
						/>
						<ErrorText>{fields.joiningDate.errors}</ErrorText>
					</Fieldset>
					<Field>
						<Field.Label htmlFor={fields.years.id}>入社年数を選択</Field.Label>
						<Select {...getSelectProps(fields.years)}>
							<Select.Item value={0} hidden>
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
						<Field.Label htmlFor={fields.department_id.id}>
							部署を選択
						</Field.Label>
						<Select {...getSelectProps(fields.department_id)}>
							<Select.Item value="" hidden>
								選択してください
							</Select.Item>
							{departmentItems.map((department) => (
								<Select.Item key={department.value} value={department.value}>
									{department.label}
								</Select.Item>
							))}
						</Select>
						<ErrorText>{fields.department_id.errors}</ErrorText>
					</Field>
					<Fieldset>
						<Fieldset.Legend>グレードを選択</Fieldset.Legend>
						<RadioGroup className="flex-col md:flex-row flex-wrap gap-2">
							{gradeItems.map((grade) => (
								<Radio
									key={grade.value}
									name={fields.grade_id.name}
									value={grade.value}
									defaultChecked={fields.grade_id.initialValue === grade.value}
								>
									{grade.label}
								</Radio>
							))}
						</RadioGroup>
						<ErrorText>{fields.grade_id.errors}</ErrorText>
					</Fieldset>
				</Section.Content>
			</Section>
			<Button className="w-full" type="submit">
				登録
			</Button>
		</form>
	);
};
