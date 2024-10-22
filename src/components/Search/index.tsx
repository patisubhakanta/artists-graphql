"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handlePopState = () => {
      setSearchTerm("");
    };
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  useEffect(() => {
    if (!searchTerm) {
      router.push(`/`);
    }
  }, [searchTerm, router]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm) {
      router.push(`/?search=${encodeURIComponent(searchTerm)}`);
    } else {
      router.push(`/`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="mb-6 flex justify-center">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          if (e.target.value === "") {
            router.push(`/`);
          }
        }}
        placeholder="Search products..."
        className="border border-gray-300 rounded-l p-2"
      />
      <button type="submit" className="bg-blue-500 text-white rounded-r p-2">
        Search
      </button>
    </form>
  );
};

export default Search;
