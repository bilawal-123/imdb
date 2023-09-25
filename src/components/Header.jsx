import Link from "next/link";
import MenuItem from "./MenuItem";

import { TbHome2, TbInfoCircle } from "react-icons/tb";
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
      <ul>
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
