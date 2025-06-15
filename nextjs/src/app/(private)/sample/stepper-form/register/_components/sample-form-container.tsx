import { getDepartments } from "@/api/department/department";
import { getGrades } from "@/api/grade/grade";
import type { SelectItems } from "@/components/core/select";
import type { ReactNode } from "react";

export type SampleFormPropsContainer = {
  children: (
    yearItems: SelectItems,
    departmentItems: SelectItems,
    gradeItems: SelectItems,
  ) => ReactNode;
};

export const SampleFormContainer = async ({
  children,
}: SampleFormPropsContainer) => {
  const grades = await getGrades();
  const departments = await getDepartments();

  const yearItems = Array.from({ length: 40 }, (_, i) => ({
    value: (i + 1).toString(),
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
