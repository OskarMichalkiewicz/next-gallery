import SideNav from "~/components/dashoboard/sidenav";

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-2 md:overflow-y-auto md:p-4">
        {children}
        {modal}
        <div id="modal-root"></div>
      </div>
    </div>
  );
}
