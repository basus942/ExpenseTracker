import Card from "@/app/components/card";
import React from "react";

import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import AddCardIcon from "@mui/icons-material/AddCard";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import SouthEastIcon from "@mui/icons-material/SouthEast";

import SavingsIcon from "@mui/icons-material/Savings";
const Financial_Overview = () => {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 gap-0 xs:gap-3">
      <Card>
        <span className="bg-grey-100 rounded-full  w-7 h-7  flex items-center justify-center ml-2 mb-2">
          <CurrencyRupeeIcon fontSize="medium" />
        </span>

        <text className="uppercase text-xs font-semibold"> Total Income</text>

        <text className="text-xl font-bold pb-1">$30,000</text>
        <text className="flex text-xs font-medium">
          <span className="text-green-500 flex items-start pr-1">
            <NorthEastIcon fontSize="small" /> 6%
          </span>
          vs last 30 days
        </text>
      </Card>
      <Card className="bg-green-400">
        <span className="bg-white rounded-full  w-7 h-7   flex items-center justify-center ml-2 mb-2">
          <AutoGraphIcon fontSize="medium" />
        </span>

        <text className="uppercase text-xs font-semibold">Total Expense</text>

        <text className="text-xl font-bold pb-1">$30,000</text>
        <text className="flex text-xs font-medium">
          <span className=" flex items-start pr-1">
            <SouthEastIcon fontSize="small" /> 2%
          </span>
          vs last 30 days
        </text>
      </Card>
      <Card>
        <span className="bg-grey-100 rounded-full  w-7 h-7  flex items-center justify-center ml-2 mb-2">
          <SavingsIcon fontSize="medium" />
        </span>

        <text className="uppercase text-xs font-semibold">Total Savings</text>

        <text className="text-xl font-bold pb-1">$15,000</text>
        <text className="flex text-xs font-medium">
          <span className="text-red-500 flex items-start pr-1">
            <SouthEastIcon fontSize="small" />
            4%
          </span>
          vs last 30 days
        </text>
      </Card>
      <Card>
        <span className="bg-grey-100 rounded-full  w-7 h-7  flex items-center justify-center ml-2 mb-2">
          <AddCardIcon fontSize="medium" />
        </span>

        <text className="uppercase text-xs font-semibold">Most Spending</text>

        <text className="text-xl font-bold pb-1">House Rent</text>
        <text className="text-xs text-grey-200">$17,300</text>
      </Card>
    </div>
  );
};

export default Financial_Overview;
