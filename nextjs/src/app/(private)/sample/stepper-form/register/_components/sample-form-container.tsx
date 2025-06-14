import { getDepartments } from "@/api/department/department";
import { getGrades } from "@/api/grade/grade";
import { SampleForm } from "@/app/(private)/sample/stepper-form/register/_components/sample-form";

export const SampleFormContainer = async () => {
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

  return (
    <SampleForm
      yearItems={yearItems}
      departmentItems={departmentItems}
      gradeItems={gradeItems}
    />
  );
};
