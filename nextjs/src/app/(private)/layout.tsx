import { Header } from "@/app/(private)/_components/header";

export default function PrivateLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Header />
			<main className="max-w-3xl m-auto">{children}</main>
		</>
	);
}
