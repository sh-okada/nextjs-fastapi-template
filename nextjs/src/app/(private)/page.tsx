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

## 引用
> これは引用です。

## コードブロック
~~~typescript
// コメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメント
export const Input = (props: React.ComponentProps<"input">) => {
  return <input {...props} />;
}
~~~

## テーブル
| 見出し1 | 見出し2 | 見出し3 | 見出し4 | 見出し5 | 見出し6 | 見出し7 | 見出し8 | 見出し9 | 見出し10 |
|-|-|-|-|-|-|-|-|-|-|
| 項目1 | 項目2 | 項目3 | 項目4 | 項目5 | 項目6 | 項目7 | 項目8 | 項目9 | 項目10 |
| 項目1 | 項目2 | 項目3 | 項目4 | 項目5 | 項目6 | 項目7 | 項目8 | 項目9 | 項目10 |

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
