import type { ComponentProps } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/cjs/styles/prism";

export type CodeBlockProps = ComponentProps<"code"> & {
	inline?: boolean;
};

export const CodeBlock = ({
	inline = false,
	className,
	children,
}: CodeBlockProps) => {
	if (inline) {
		return <code className={className}>{children}</code>;
	}

	const match = /language-(\w+)/.exec(className || "");
	if (!match) {
		return <code className={className}>{children}</code>;
	}

	const lang = match[1] ?? undefined;

	return (
		<SyntaxHighlighter style={prism} language={lang}>
			{String(children).replace(/\n$/, "")}
		</SyntaxHighlighter>
	);
};
