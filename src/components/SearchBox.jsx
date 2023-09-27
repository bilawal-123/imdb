"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBox() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
  };
  return (
    <form
      onSubmit={handleSearch}
      className="flex justify-between items-center max-w-6xl mx-auto bg-white bg-opacity-5"
    >
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Keyword"
        className="h-12 p-4 flex-1 outline-none text-gray-200 placeholder-gray-400 bg-transparent"
      />
      <button className="px-4 disabled:text-gray-200 text-amber-400">
        Search
      </button>
    </form>
  );
}
