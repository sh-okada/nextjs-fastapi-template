import { ProfileFormProvider } from "@/app/(private)/profile/_components/profile-form/profile-form-provider";

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ProfileFormProvider>{children}</ProfileFormProvider>;
}
