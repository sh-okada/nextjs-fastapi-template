import { auth } from "@/lib/auth";

export default async function Page() {
	const session = await auth();

	if (!session?.user) {
		return <h1>ログインしてください</h1>;
	}

	return (
		<div>
			<h1>ようこそ！{session.user.name}</h1>
		</div>
	);
}
