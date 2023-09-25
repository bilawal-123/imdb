import Link from "next/link";
import MenuItem from "./MenuItem";

import { TbHome2, TbInfoCircle } from "react-icons/tb";
import DarkModeSwitch from "./DarkModeSwitch";
export default function Header() {
  return (
    <nav className="flex justify-between items-center px-4 py-2">
      <ul className="flex gap-3">
        <li>
          <MenuItem title="home" address="/" Icon={TbHome2} />
        </li>
        <li>
          <MenuItem title="about" address="/about" Icon={TbInfoCircle} />
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li>
          <DarkModeSwitch />
        </li>
        <li>
          <Link href={"/"} className="flex items-center gap-2">
            <span className="bg-amber-500 py-2 px-3 rounded-md font-black tracking-wide">
              IMDb
            </span>
            <span className="font-medium">Clone</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
