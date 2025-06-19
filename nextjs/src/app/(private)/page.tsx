import { Markdown } from "@/components/ui-parts/markdown/markdown";
import { PageContent } from "@/components/ui-parts/page-content";
import { paths } from "@/config/paths";

const markdownText = `
1. はじめに
このサンプルアプリ以下の機能を実装しています。
    - ログイン
    - ユーザー登録
    - シンプルなフォーム
    - ステップ形式のフォーム
1. 技術スタック
    - フロントエンド
      - Next.js
    - バックエンド
      - FastAPI

| a | b | c |
| - | - | - |
| 2 | 3 | 4 |
`;

export default async function Page() {
	return (
		<PageContent title={paths.home.name}>
			<Markdown body={markdownText} />
		</PageContent>
	);
}
