import NavLinks from "~/components/dashoboard/nav-link";
import { Search } from "./search";

export default function SideNav() {
  return (
    <div className="mx-3 mb-3 flex grow flex-row space-x-2">
      <NavLinks />
      <Search />
    </div>
  );
}
