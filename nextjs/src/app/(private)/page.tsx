import { ATag } from "@/components/ui-parts/markdown/a-tag";
import { auth } from "@/lib/auth";
import Markdown from "react-markdown";

const markdown = "[たいとる](url)";

export default async function Page() {
	const session = await auth();

	if (!session?.user) {
		return <h1>ログインしてください</h1>;
	}

	return (
		<div>
			<h1>ようこそ！{session.user.name}</h1>
			<Markdown components={{ a: ATag }}>{markdown}</Markdown>
		</div>
	);
}
