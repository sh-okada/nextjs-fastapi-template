import { Markdown } from "@/components/ui-parts/markdown/markdown";
import { PageContent } from "@/components/ui-parts/page-content";
import { paths } from "@/config/paths";

const markdownText = `

## 見出し

# h1
## h2
### h3
#### h4
##### h5
###### h6

## 箇条書き
- リスト1
    - リスト1-1
    - リスト1-2
- リスト2
    - リスト2-1
        - リスト2-1-1
## ナンバリング
1. リスト1
    1. リスト1-1
    1. リスト1-2
1. リスト2
    1. リスト2-1
    1. リスト2-2

1. 技術スタック
    - フロントエンド
      - Next.js
    - バックエンド
      - FastAPI

## リンク
[Next.js](https://nextjs.org/)
[FastAPI](https://fastapi.tiangolo.com/)

## コードブロック
~~~typescript
// コメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメント
export const Input = (props: React.ComponentProps<"input">) => {
  return <input {...props} />;
}
~~~

~~~bash
echo "Hello, World!"
~~~

## テーブル
| Head | Head | Head |
| ---- | ---- | ---- |
| Text | Text | Text |
| Text | Text | Text |

## タスクリスト
- [x] 完了
- [ ] 未完了

`;

export default async function Page() {
  return (
    <PageContent title={paths.home.name}>
      <Markdown body={markdownText} />
    </PageContent>
  );
}
