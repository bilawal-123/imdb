import Link from "next/link";

export default function MenuItem({ title, address, Icon }) {
  return (
    <Link href={address} className="flex hover:text-amber-600">
      <span className="text-2xl sm:hidden">
        <Icon />
      </span>
      <span className="hidden sm:inline uppercase">{title}</span>
    </Link>
  );
}
