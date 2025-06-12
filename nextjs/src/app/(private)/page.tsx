import { A } from "@/components/ui-parts/markdown/parts/a";
import { H1 } from "@/components/ui-parts/markdown/parts/h1";
import { H2 } from "@/components/ui-parts/markdown/parts/h2";
import { H3 } from "@/components/ui-parts/markdown/parts/h3";
import { H4 } from "@/components/ui-parts/markdown/parts/h4";
import { H5 } from "@/components/ui-parts/markdown/parts/h5";
import { H6 } from "@/components/ui-parts/markdown/parts/h6";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

const markdown = `
# H1
## H2
### H3
#### H4
##### H5
###### H6
[リンクテキスト](http://github.com)
`;

function insertBrForEmptyLines(md: string) {
	return md.replace(/^\s*$/gm, "&nbsp;\n");
}

export default async function Page() {
	return (
		<div>
			<Markdown
				components={{ h1: H1, h2: H2, h3: H3, h4: H4, h5: H5, h6: H6, a: A }}
				remarkPlugins={[remarkBreaks]}
				skipHtml={false}
			>
				{insertBrForEmptyLines(markdown)}
			</Markdown>
		</div>
	);
}
