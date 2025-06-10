import { ProfileFormContainer } from "@/app/profile/_components/profile-form-container";
import { Spinner } from "@/components/ui-parts/spinner";
import { Suspense } from "react";

export default function Page() {
	return (
		<Suspense fallback={<Spinner />}>
			<ProfileFormContainer />
		</Suspense>
	);
}
