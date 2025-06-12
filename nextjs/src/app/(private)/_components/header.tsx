import { LogoutButton } from "@/app/(private)/_components/logout-button";
import { MobileMenu } from "@/app/(private)/_components/mobile-menu";

export const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <div className="p-4">
        <h1>サンプルアプリ</h1>
      </div>
      <MobileMenu>
        <LogoutButton />
      </MobileMenu>
    </header>
  );
};
