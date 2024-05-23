import { CubeTransparentIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import SideNav from "~/components/dashoboard/sidenav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SideNav />
      <div className="flex-grow px-3">{children}</div>
    </>
  );
}
