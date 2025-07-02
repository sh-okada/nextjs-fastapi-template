import { getDepartments } from "@/api/department";
import { getGrades } from "@/api/grades";
import { SimpleForm } from "@/app/(private)/(with-header)/sample/simple-form/_components/simple-form";

export const SimpleFormContainer = async () => {
  const grades = await getGrades();
  const departments = await getDepartments();

  const yearItems = Array.from({ length: 40 }, (_, i) => ({
    value: i + 1,
    label: `${i + 1}年目`,
  }));
  const departmentItems = departments.data.map((department) => ({
    value: department.id,
    label: department.name,
  }));
  const gradeItems = grades.data.map((grade) => ({
    value: grade.id,
    label: grade.name,
  }));

  return (
    <SimpleForm
      yearItems={yearItems}
      departmentItems={departmentItems}
      gradeItems={gradeItems}
    />
  );
};
