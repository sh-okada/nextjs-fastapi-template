import { getDepartments } from "@/api/department/department";
import { getGrades } from "@/api/grade/grade";
import { ProfileForm } from "@/app/profile/_components/profile-form";
import { Suspense } from "react";

export default async function Page() {
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
		<Suspense
			fallback={
				<div className="flex justify-center" aria-label="読み込み中">
					<div className="animate-spin h-10 w-10 border-4 border-blue-500 rounded-full border-t-transparent" />
				</div>
			}
		>
			<ProfileForm
				yearItems={yearItems}
				departmentItems={departmentItems}
				gradeItems={gradeItems}
			/>
		</Suspense>
	);
}
