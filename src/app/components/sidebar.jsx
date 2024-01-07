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
    {
      label: "Dashboard",
      icon: <TbHome2 size={icon_size} />,
      path: "/dashboard",
    },
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
  const [showSidebar, setShowSidebar] = React.useState(false);
  const pathname = usePathname();

  return (
    <>
      <div
        className={` flex justify-center sticky top-0 z-10 overflow-hidden h-dvh p-1  bg-secondary-200 ${
          showSidebar ? "w-64 " : "w-12"
        }  duration-200 `}
      >
        <button
          onClick={() => setShowSidebar(false)}
          className="text-white-200 absolute top-0 right-0 "
        >
          {showSidebar && <TbArrowBarLeft size={icon_size} />}
        </button>
        <div className="flex flex-col items-start pt-5 gap-5 text-white-200">
          {!showSidebar && (
            <button onClick={() => setShowSidebar(true)}>
              <TbBaselineDensityMedium
                size={icon_size}
                // className="hidden md:block"
              />
            </button>
          )}
          <Link href="/">
            <Image
              src="/micheal.jpg"
              alt="profile picture"
              className="rounded-xl mt-5 object-cover duration-700"
              width={showSidebar ? 125 : 35}
              height={showSidebar ? 0 : 36}
            />
          </Link>
          {showSidebar && (
            <div className="flex flex-col pb-3">
              <text className="text-xl font-bold text-nowrap">
                Subhajit Basu
              </text>
              <text className="text-sm text-grey-200 text-nowrap">
                subhajit@gmail.com
              </text>
            </div>
          )}

          {links.map((link, index) => (
            <Link
              key={index}
              className={`flex link items-center  hover:scale-105 no-underline ${
                pathname === link.path ? "text-active-200" : ""
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
