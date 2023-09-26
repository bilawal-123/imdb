import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <nav className="bg-gray-500 bg-opacity-20 text-center">
      <ul className="flex justify-center space-x-3 py-3 mb-4">
        <li>
          <NavbarItem title="Top Rated" param="fetchTopRated" />
        </li>
        <li>
          <NavbarItem title="Trending" param="fetchTrending" />
        </li>
      </ul>
    </nav>
  );
}
