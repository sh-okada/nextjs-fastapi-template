export default function PublicLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <main className="max-w-3xl m-auto">{children}</main>;
}
