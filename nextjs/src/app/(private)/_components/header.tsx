"use client";

import { MobileMenu } from "@/app/(private)/_components/mobile-menu";
import { Button } from "@/components/core/button";
import { NextLink } from "@/components/ui-parts/next-link";
import { paths } from "@/config/paths";

export const Header = () => {
	return (
		<header className="flex justify-between items-center">
			<div className="p-4">
				<h1>サンプルアプリ</h1>
			</div>
			<MobileMenu>
				{(drawerRef) => (
					<div className="flex flex-col gap-4 max-w-3xl m-auto">
						<Button variant="text" asChild>
							<NextLink
								href={paths.home.getHref()}
								onClick={() => drawerRef.current?.close()}
							>
								ホーム
							</NextLink>
						</Button>
						<Button variant="text" asChild>
							<NextLink
								href={paths.profile.getHref()}
								onClick={() => drawerRef.current?.close()}
							>
								プロフィール
							</NextLink>
						</Button>
						{/* <LogoutButton /> */}
					</div>
				)}
			</MobileMenu>
		</header>
	);
};
