import Link from "next/link";
import MenuItem from "./MenuItem";

import { TbHome2, TbInfoCircle, TbUserCode } from "react-icons/tb";
import DarkModeSwitch from "./DarkModeSwitch";
export default function Header() {
  return (
    <nav className="flex justify-between items-center px-2  py-3 mb-3 max-w-6xl pt-6 mx-auto">
      <ul className="flex gap-3">
        <li>
          <MenuItem title="home" address="/" Icon={TbHome2} />
        </li>
        <li>
          <MenuItem title="about" address="/about" Icon={TbInfoCircle} />
        </li>
        <li>
          <MenuItem title="developer" address="/developer" Icon={TbUserCode} />
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
