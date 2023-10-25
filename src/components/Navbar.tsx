import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 inset-x-0 h-fit bg-zinc-100 border-b border-zinc-300 z-[10] py-2">
      <div className="container flex items-center justify-between h-full gap-2 mx-auto max-w-7xl">
        <Link href="/" className="flex items-center gap-2">
          <p className="hidden font-medium text-md text-zinc-700 md:block">
            Reddit
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
