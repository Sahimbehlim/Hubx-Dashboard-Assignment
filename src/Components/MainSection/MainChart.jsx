import React, { useState } from "react";
import { RxCalendar } from "react-icons/rx";
import LineChart from "./LineChart";

const MainChart = () => {
  const [activeIndex, setactiveIndex] = useState(0);
  const handleActiveIndex = (index) => {
    setactiveIndex(index);
  };
  return (
    <div className="xl:w-[70%] hidden md:flex flex-col">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-gray-500">
          <RxCalendar className="text-2xl" />
          <p className="text-sm font-medium">Your School</p>
        </div>
        <div className="text-sm flex items-center gap-x-3">
          {["New signups", "Revenue", "Product sales", "Active learners"].map(
            (item, index) => (
              <button
                onClick={() => handleActiveIndex(index)}
                key={index}
                className={`${
                  activeIndex == index ? "font-semibold" : "text-gray-400"
                } relative px-2`}
              >
                {item}
                {activeIndex == index && (
                  <span className="absolute left-0 top-6 h-[3.2px] w-full bg-[#55ccc1]"></span>
                )}
              </button>
            )
          )}
          <select className="outline-none bg-[#ebebeb] rounded-xl px-2 py-1">
            <option value="">Last 7 days</option>
            <option value="">Last 30 days</option>
            <option value="">Last 60 days</option>
          </select>
        </div>
      </div>
      <div className="w-full relative pt-10">
        <LineChart />
      </div>
    </div>
  );
};

export default MainChart;
