import { SubmitButton } from "@/components/ui-parts/submit-button";
import { auth, signOut } from "@/lib/auth";

export default async function Page() {
	const session = await auth();

	if (!session?.user) {
		return <h1>ログインしてください</h1>;
	}

	return (
		<div>
			<h1>ようこそ！{session.user.name}</h1>
			<form
				action={async () => {
					"use server";
					await signOut();
				}}
			>
				<SubmitButton>ログアウト</SubmitButton>
			</form>
		</div>
	);
}
