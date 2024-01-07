import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Dashboard = () => {
  return (
    <div className="flex items-center justify-between mb-5">
      <div className="flex flex-col">
        <text className="font-bold text-2xl">My Activity</text>
        <small className="text-grey-300 font-semibold">
          Check your expenses here
        </small>
      </div>
      <input
        className="rounded-md p-4 w-3/7 h-6 bg-grey-100 focus:outline-none text-grey-300  hidden sm:inline-block"
        aria-label="Search here"
        placeholder="Search here..."
      />
      <SearchIcon fontSize="small" className="inline-block  sm:hidden" />
    </div>
  );
};

export default Dashboard;
