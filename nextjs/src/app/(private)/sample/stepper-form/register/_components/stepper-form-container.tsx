import type { ReactNode } from "react";
import { getDepartments } from "@/api/department/department";
import { getGrades } from "@/api/grade/grade";
import type { SelectItems } from "@/components/core/select";

export type StepperFormPropsContainer = {
	children: (
		yearItems: SelectItems<number>,
		departmentItems: SelectItems<string>,
		gradeItems: SelectItems<string>,
	) => ReactNode;
};

export const StepperFormContainer = async ({
	children,
}: StepperFormPropsContainer) => {
	const grades = await getGrades();
	const departments = await getDepartments();

	const yearItems = Array.from({ length: 40 }, (_, i) => ({
		value: i + 1,
		label: `${i + 1}年目`,
	}));
	const departmentItems = departments.data.map((department) => ({
		value: department.id.toString(),
		label: department.name,
	}));
	const gradeItems = grades.data.map((grade) => ({
		value: grade.id.toString(),
		label: grade.name,
	}));

	return children(yearItems, departmentItems, gradeItems);
};
