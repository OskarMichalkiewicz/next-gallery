import LogoHeader from "~/components/dashoboard/logo-header";
import SignOutButton from "~/components/dashoboard/sign-out-button";

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col">
      <div className="mx-3 mb-3 mt-3 flex space-x-2.5">
        <LogoHeader />
        <SignOutButton />
      </div>
      {children}
      {modal}
      <div id="modal-root"></div>
    </div>
  );
}
