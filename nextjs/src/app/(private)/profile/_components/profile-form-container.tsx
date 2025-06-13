import { getDepartments } from "@/api/department/department";
import { getGrades } from "@/api/grade/grade";
import { ProfileForm } from "@/app/(private)/profile/_components/profile-form/profile-form";

export const ProfileFormContainer = async () => {
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
    <ProfileForm
      yearItems={yearItems}
      departmentItems={departmentItems}
      gradeItems={gradeItems}
    />
  );
};
