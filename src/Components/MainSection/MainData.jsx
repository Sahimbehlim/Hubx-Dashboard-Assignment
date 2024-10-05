import React from "react";
import { FaRegUser } from "react-icons/fa6";
import { BsArrowRepeat } from "react-icons/bs";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { TfiAlarmClock } from "react-icons/tfi";
import { RiFileList2Line } from "react-icons/ri";
import { MdOutlineDiscount } from "react-icons/md";

const MainData = () => {
  const mainData = [
    {
      icon: <FaRegUser />,
      text: "All users",
      data: 1,
    },
    {
      icon: <BsArrowRepeat />,
      text: "Conversions",
      data: 0,
      sub: "%",
    },
    {
      icon: <LiaShoppingBagSolid />,
      text: "30 days sales",
      data: 0,
    },
    {
      icon: <TfiAlarmClock />,
      text: "Avg time",
      data: 0,
      sub: "min",
    },
    {
      icon: <RiFileList2Line />,
      text: "Courses",
      data: 0,
    },
    {
      icon: <MdOutlineDiscount />,
      text: "Course categories",
      data: 0,
    },
  ];
  return (
    <div className="xl:w-[30%] grid grid-cols-2 sm:grid-cols-3 gap-y-5 xl:gap-y-2">
      {mainData.map((item, index) => (
        <div key={index} className="flex flex-col items-center justify-center">
          <span className="text-gray-400 text-3xl">{item.icon}</span>
          <p className="text-sm text-gray-400 pt-2 pb-1">{item.text}</p>
          <h2 className="text-xl font-semibold">
            {item.data}
            {item.sub && (
              <span className="font-normal text-[12px] ps-[2px] text-gray-500">
                {item.sub}
              </span>
            )}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default MainData;
