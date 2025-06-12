"use client";

import { FullDrawer } from "@/app/(private)/_components/full-drawer";
import { Button } from "@/components/core/button";
import { Container } from "@/components/ui-parts/container";
import { InternalLink } from "@/components/ui-parts/internal-link";
import { paths } from "@/config/paths";
import type { ReactNode } from "react";

export type MobileMenuProps = {
	children?: ReactNode;
};

export const MobileMenu = ({ children }: MobileMenuProps) => {
	const menuItems = [
		{
			key: 1,
			label: "サンプルアプリについて",
			url: paths.home.getHref(),
		},
		{
			key: 2,
			label: "プロフィール",
			url: paths.profile.getHref(),
		},
	];

	return (
		<FullDrawer>
			{(drawerRef) => (
				<Container className="flex flex-col gap-4">
					{menuItems.map((menuItem) => (
						<Button key={menuItem.key} variant="text" asChild>
							<InternalLink
								href={menuItem.url}
								onClick={() => drawerRef.current?.close()}
							>
								{menuItem.label}
							</InternalLink>
						</Button>
					))}
					{children}
				</Container>
			)}
		</FullDrawer>
	);
};
