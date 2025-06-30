import { HumburgerMenu } from "@/app/(private)/(with-header)/_components/humburger-menu";
import { LogoutButton } from "@/app/(private)/(with-header)/_components/logout-button";

export const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <div className="p-4">
        <h1>サンプルアプリ</h1>
      </div>
      <HumburgerMenu>
        <LogoutButton />
      </HumburgerMenu>
    </header>
  );
};
