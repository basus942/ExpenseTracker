// Sidebar.js
"use client";
import Link from "next/link";
import React from "react";

import {
  TbArrowBarLeft,
  TbBaselineDensityMedium,
  TbHome2,
  TbPigMoney,
  TbSettings,
  TbUserHexagon,
  TbWallet,
} from "react-icons/tb";
import Image from "next/image";
import { usePathname } from "next/navigation";
const Sidebar = () => {
  const icon_size = 29;
  const links = [
    { label: "Dashboard", icon: <TbHome2 size={icon_size} />, path: "/" },
    {
      label: "Expenses",
      icon: <TbPigMoney size={icon_size} />,
      path: "/expenses",
    },
    { label: "Wallet", icon: <TbWallet size={icon_size} />, path: "/wallet" },
    {
      label: "Account",
      icon: <TbUserHexagon size={icon_size} />,
      path: "/account",
    },
    {
      label: "Settings",
      icon: <TbSettings size={icon_size} />,
      path: "/settings",
    },
  ];
  const [showSidebar, setShowSidebar] = React.useState(true);
  const pathname = usePathname();

  return (
    <>
      <div
        className={` flex justify-center bg-secondary ${
          showSidebar ? "w-64" : "w-12"
        } h-screen duration-700 relative  overflow-hidden`}
      >
        <button
          onClick={() => setShowSidebar(false)}
          className="text-white absolute top-0 right-0 "
        >
          {showSidebar && <TbArrowBarLeft size={icon_size} />}
        </button>
        <div className="flex flex-col items-start pt-5 gap-4 text-white">
          {!showSidebar && (
            <button onClick={() => setShowSidebar(true)}>
              <TbBaselineDensityMedium size={icon_size} className="mb-5" />
            </button>
          )}

          <Image
            src="/micheal.jpg"
            alt="profile picture"
            className="rounded-xl object-cover duration-700"
            width={showSidebar ? 130 : 36}
            height={showSidebar ? 0 : 36}
          />

          {showSidebar && (
            <div className="flex flex-col pb-4">
              <text className="text-xl font-bold text-nowrap">
                Subhajit Basu
              </text>
              <text className="text-sm text-grey text-nowrap">
                subhajit@gmail.com
              </text>
            </div>
          )}

          {links.map((link, index) => (
            <Link
              key={index}
              className={`flex link items-center hover:text-active ${
                pathname === link.path ? "text-active" : ""
              }`}
              href={link.path}
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
