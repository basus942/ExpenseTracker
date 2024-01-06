// Sidebar.js
"use client";
import Link from "next/link";
import React from "react";
import Avatar from "./avatar";
import {
  TbArrowBarRight,
  TbHome2,
  TbPigMoney,
  TbSettings,
  TbUserHexagon,
  TbWallet,
} from "react-icons/tb";
import Image from "next/image";
const Sidebar = () => {
  const icon_size = 25;
  const links = [
    { label: "Dashboard", icon: <TbHome2 size={icon_size} />, path: "/" },
    {
      label: "Expenses",
      icon: <TbPigMoney size={icon_size} />,
      path: "/expenses",
    },
    { label: "Wallets", icon: <TbWallet size={icon_size} />, path: "/" },
    { label: "Accounts", icon: <TbUserHexagon size={icon_size} />, path: "/" },
    { label: "Settings", icon: <TbSettings size={icon_size} />, path: "/" },
  ];
  const [showSidebar, setShowSidebar] = React.useState(true);

  return (
    <>
      <div
        className={` flex justify-center ${
          showSidebar ? "w-64" : "w-12"
        } h-screen duration-700 relative bg-slate-800 overflow-hidden`}
      >
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className="text-red-500  absolute top-0 right-0 "
        >
          {showSidebar ? "close" : <TbArrowBarRight size={icon_size} />}
        </button>
        <div className="flex flex-col items-start pt-20 gap-3 text-white">
          <Image
            src="/micheal.jpg"
            alt="profile picture"
            className="rounded-xl object-cover duration-700"
            width={showSidebar ? 100 : 30}
            height={showSidebar ? 100 : 30}
          />
          {showSidebar && (
            <div className="flex flex-col">
              <text className="text-xl font-bold text-nowrap">
                Subhajit Basu
              </text>
              <text className="text-sm text-gray-400 text-nowrap">
                subhajit@gmail.com
              </text>
            </div>
          )}

          {links.map((link) => (
            <Link
              className=" flex  items-center "
              href={link.path}
              key={link.label}
            >
              {link.icon}
              {showSidebar && <span className="pl-2">{link.label}</span>}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
