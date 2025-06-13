import { Checkbox } from "@/components/core/checkbox";
import { Markdown } from "@/components/ui-parts/markdown/markdown";
import { PageContent } from "@/components/ui-parts/page-content";
import { paths } from "@/config/paths";

const markdownText = `
# H1
## H2
### H3
#### H4
##### H5
###### H6

[リンクテキスト](http://github.com)

- リスト1
  - リスト1
  - リスト2
- リスト2
  - リスト1

1. リスト1
  1. リスト1
  1. リスト2
1. リスト2
1. リスト3

~~~typescript
// コード
console.log("Hello, world!");
~~~
`;

export default async function Page() {
  return (
    <PageContent title={paths.home.name}>
      <Markdown body={markdownText} />
    </PageContent>
  );
}
