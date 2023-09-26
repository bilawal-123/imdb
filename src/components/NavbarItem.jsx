"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
function NavbarItem({ title, param }) {
  //   console.log(params);
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <Link
      href={`/?genre=${param}`}
      className={`capitalize font-semibold hover:text-amber-600 transition-colors duration-200    ${
        genre &&
        genre === param &&
        " underline underline-offset-8 decoration-amber-600 decoration-4"
      }`}
    >
      {title}
    </Link>
  );
}

export default NavbarItem;
