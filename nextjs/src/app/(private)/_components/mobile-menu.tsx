"use client";

import { FullDrawer } from "@/app/(private)/_components/full-drawer";
import { Button } from "@/components/core/button";
import { Container } from "@/components/ui-parts/container";
import { InternalLink } from "@/components/ui-parts/internal-link";
import { paths } from "@/config/paths";
import { usePathname } from "next/navigation";
import { type ReactNode, useEffect } from "react";

export type MobileMenuProps = {
  children?: ReactNode;
};

export const MobileMenu = ({ children }: MobileMenuProps) => {
  const menuItems = [
    {
      key: 1,
      label: paths.home.name,
      url: paths.home.getHref(),
    },
    {
      key: 2,
      label: paths.sampleForm.name,
      url: paths.sampleForm.getHref(),
    },
    {
      key: 3,
      label: paths.sampleStepperFormRegister.name,
      url: paths.sampleStepperFormRegister.getHref(),
    },
  ];
  const pathname = usePathname();

  return (
    <FullDrawer>
      {(drawerRef) => {
        // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
        useEffect(() => {
          drawerRef.current?.close();
        }, [pathname]);
        return (
          <Container className="flex flex-col gap-4">
            {menuItems.map((menuItem) => (
              <Button key={menuItem.key} variant="text" asChild>
                <InternalLink href={menuItem.url}>
                  {menuItem.label}
                </InternalLink>
              </Button>
            ))}
            {children}
          </Container>
        );
      }}
    </FullDrawer>
  );
};
