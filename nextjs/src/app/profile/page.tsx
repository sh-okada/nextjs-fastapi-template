import { getDepartments } from "@/api/department/department";
import { ProfileForm } from "@/app/profile/_components/profile-form";
import { Suspense } from "react";

export default async function Page() {
	const { data } = await getDepartments();

	const yearItems = Array.from({ length: 40 }, (_, i) => ({
		value: (i + 1).toString(),
		label: `${i + 1}年目`,
	}));
	const departmentItems = data.map((department) => ({
		value: department.id.toString(),
		label: department.name,
	}));
	const gradeItems = [
		{ value: "1", label: "S1グレード" },
		{ value: "2", label: "S2グレード" },
		{ value: "3", label: "S3グレード" },
		{ value: "4", label: "S4グレード" },
		{ value: "5", label: "M1グレード" },
		{ value: "6", label: "M2グレード" },
		{ value: "7", label: "M3グレード" },
		{ value: "8", label: "M4グレード" },
	];

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<ProfileForm
				yearItems={yearItems}
				departmentItems={departmentItems}
				gradeItems={gradeItems}
			/>
		</Suspense>
	);
}
