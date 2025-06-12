import { SubmitButton } from "@/components/ui-parts/submit-button";
import { auth, signOut } from "@/lib/auth";

export const LogoutButton = async () => {
  const session = await auth();

  return session?.user ? (
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
  ) : null;
};
