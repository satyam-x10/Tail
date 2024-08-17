import React from "react";
import { Input } from "./input";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="px-4 lg:px-6 w-full flex items-center">
      <Link
        href="/"
        className="flex items-center font-bold text-white text-xl hover:text-gray-300"
        prefetch={false}
      >
        TAIL
      </Link>
    </div>
  );
};

export default Navbar;
