import Link from "next/link";
import React from "react";
import Avatar from "./avatar";

const Sidebar = () => {
  const links = [
    { label: "Dashboard", path: "/" },
    { label: "Expenses", path: "/expenses" },
    { label: "Wallets", path: "/" },
    { label: "Summary", path: "/" },
    { label: "Accounts", path: "/" },
    { label: "Settings", path: "/" },
  ];
  return (
    <div className=" flex justify-center items-center text-white h-screen w-2/5 lg:w-2/6 -z-1">
      <div className="flex flex-col  mx-20 md:mx-0 items-start ">
        <Avatar />
        <text className="text-lg text-nowrap lg:text-3xl ">Subhajit Basu</text>
        <text className="text-xs text-nowrap mb-5 lg:text-lg text-slate-300">
          subhajit@gmail.com
        </text>
        {links.map((link, index) => (
          <Link
            href={link.path}
            className="text-sm text-bold py-1 lg:py-2 lg:text-xl"
            key={index}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
