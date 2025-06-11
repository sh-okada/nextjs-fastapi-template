import { MobileMenu } from "@/app/_components/mobile-menu";
import { Button } from "@/components/core/button";
import { NextLink } from "@/components/ui-parts/next-link";
import { SubmitButton } from "@/components/ui-parts/submit-button";
import { paths } from "@/config/paths";
import { auth, signOut } from "@/lib/auth";

export const Header = async () => {
	const session = await auth();

	return (
		<header className="flex justify-between items-center">
			<div className="p-4">
				<h1>サンプルアプリ</h1>
			</div>
			<MobileMenu>
				<div className="flex flex-col gap-4 max-w-3xl m-auto">
					<Button variant="text" asChild>
						<NextLink href={paths.home.getHref()}>ホーム</NextLink>
					</Button>
					<Button variant="text" asChild>
						<NextLink href={paths.profile.getHref()}>プロフィール</NextLink>
					</Button>
					{session?.user && (
						<form
							action={async () => {
								"use server";
								await signOut();
							}}
						>
							<SubmitButton className="w-full" variant="solid">
								ログアウト
							</SubmitButton>
						</form>
					)}
				</div>
			</MobileMenu>
		</header>
	);
};
