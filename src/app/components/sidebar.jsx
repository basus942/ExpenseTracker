// Sidebar.js
"use client";
import Link from "next/link";
import React from "react";

import HomeIcon from "@mui/icons-material/Home";

import SavingsIcon from "@mui/icons-material/Savings";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import NavigateBeforeRoundedIcon from "@mui/icons-material/NavigateBeforeRounded";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import LightModeIcon from "@mui/icons-material/LightMode";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const [theme, setTheme] = React.useState("light");
  const links = [
    {
      label: "Dashboard",
      // icon: <TbHome2 size={icon_size} />,
      icon: <HomeIcon fontSize="large" />,
      path: "/dashboard",
    },
    {
      label: "Expenses",
      icon: <SavingsIcon fontSize="large" />,
      path: "/expenses",
    },

    {
      label: "Account",
      icon: <AccountBoxIcon fontSize="large" />,
      path: "/account",
    },
    {
      label: "Settings",
      icon: <SettingsApplicationsIcon fontSize="large" />,
      path: "/settings",
    },
    {
      label: "logout",
      icon: <ExitToAppRoundedIcon fontSize="large" />,
      path: "/",
    },
  ];
  const [showSidebar, setShowSidebar] = React.useState(false);
  const pathname = usePathname();

  return (
    <>
      <div
        className={` flex justify-center sticky top-0 z-10 overflow-hidden h-dvh p-1  bg-secondary-200 ${
          showSidebar ? "w-64  " : "w-16"
        } transition-width duration-300 linear`}
      >
        <button
          onClick={() => setShowSidebar(false)}
          className="text-white-200 absolute top-0 right-0 "
        >
          {showSidebar && <NavigateBeforeRoundedIcon fontSize="large" />}
        </button>
        <div
          className={`flex flex-col items-start pt-5 ${
            showSidebar ? "gap-3" : "gap-5"
          }  text-white-200`}
        >
          {!showSidebar && (
            <button onClick={() => setShowSidebar(true)}>
              <DensityMediumIcon fontSize="large" />
            </button>
          )}
          <Link href="/">
            <Image
              src="/micheal.jpg"
              alt="profile picture"
              className="rounded-xl mt-5 object-cover duration-700"
              width={showSidebar ? 125 : 40}
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
              {showSidebar && <h4 className="pl-2">{link.label}</h4>}
            </Link>
          ))}

          <button
            className={`absolute bottom-5 ${showSidebar && "hidden"}`}
            onClick={() => setTheme(theme == "light" ? "dark" : "light")}
          >
            {theme == "light" ? (
              <LightModeIcon fontSize="large" />
            ) : (
              <BedtimeIcon fontSize="large" />
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
