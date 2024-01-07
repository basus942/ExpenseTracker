import Card from "@/app/components/card";
import React from "react";
import {
  TbArrowDownRight,
  TbArrowUpRight,
  TbCoin,
  TbCreditCard,
  TbCurrencyDollar,
  TbDots,
} from "react-icons/tb";
import { BsPiggyBank } from "react-icons/bs";

const Financial_Overview = () => {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 gap-1 md:gap-3">
      <Card>
        <div className="flex justify-between ">
          <span className="bg-grey-100 rounded-full  w-7 h-7  flex items-center justify-center my-2">
            <TbCurrencyDollar size={20} />
          </span>
          <TbDots />
        </div>

        <text className="uppercase text-xs font-semibold"> Total Income</text>

        <text className="text-xl font-bold pb-1">$30,000</text>
        <text className="flex text-xs font-medium">
          <span className="text-green-500 flex items-start pr-1">
            <TbArrowUpRight /> 6%
          </span>
          vs last 30 days
        </text>
      </Card>
      <Card className="bg-green-400">
        <div className="flex justify-between ">
          <span className="bg-white rounded-full  w-7 h-7   flex items-center justify-center my-2">
            <TbCoin size={20} />
          </span>
          <TbDots />
        </div>

        <text className="uppercase text-xs font-semibold">Total Expense</text>

        <text className="text-xl font-bold pb-1">$30,000</text>
        <text className="flex text-xs font-medium">
          <span className=" flex items-start pr-1">
            <TbArrowDownRight /> 2%
          </span>
          vs last 30 days
        </text>
      </Card>
      <Card>
        <div className="flex justify-between ">
          <span className="bg-grey-100 rounded-full  w-7 h-7  flex items-center justify-center my-2">
            <BsPiggyBank size={20} />
          </span>
          <TbDots />
        </div>

        <text className="uppercase text-xs font-semibold">Total Savings</text>

        <text className="text-xl font-bold pb-1">$15,000</text>
        <text className="flex text-xs font-medium">
          <span className="text-red-500 flex items-start pr-1">
            <TbArrowDownRight />
            4%
          </span>
          vs last 30 days
        </text>
      </Card>
      <Card>
        <div className="flex justify-between ">
          <span className="bg-grey-100 rounded-full  w-7 h-7  flex items-center justify-center my-2">
            <TbCreditCard size={20} />
          </span>
          <TbDots />
        </div>

        <text className="uppercase text-xs font-semibold">Most Spending</text>

        <text className="text-xl font-bold pb-1">House Rent</text>
        <text className="text-xs text-grey-200">$17,300</text>
      </Card>
      {/* <Card title={"Total Expense"} viewOption={true}>
        <text className="text-xl font-bold pb-1">$30,000</text>
      </Card>
      <Card title={"Total Savings"} viewOption={true}>
        <text className="text-xl font-bold pb-1">$15,000</text>
      </Card>
      <Card title={"Most Spending"} viewOption={true}>
        <text className="text-xl font-bold pb-1">House Rent</text>
        <text className="text-xs text-grey-200">$17,300</text>
      </Card> */}
    </div>
  );
};

export default Financial_Overview;
