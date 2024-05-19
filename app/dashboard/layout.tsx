import SideNav from "~/components/dashoboard/sidenav";

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col">
      <div className="w-full flex-none">
        <SideNav />
      </div>
      <div className="flex-grow px-3">
        {children}
        {modal}
        <div id="modal-root"></div>
      </div>
    </div>
  );
}
