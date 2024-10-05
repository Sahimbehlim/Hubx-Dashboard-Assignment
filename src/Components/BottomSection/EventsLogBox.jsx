import React from "react";
import { Btn, TagLine } from "../index";
import { TbActivityHeartbeat } from "react-icons/tb";
import { IoKeySharp } from "react-icons/io5";

const EventsLogBox = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm px-3 pt-2 pb-4 flex flex-col gap-3 h-max">
      <div className="flex items-center gap-2">
        <TagLine
          text="Events log"
          icon={<TbActivityHeartbeat className="text-2xl" />}
        />
        <Btn text="see all" className={`bg-[#55ccc1] rounded-2xl`} />
      </div>
      <div className="flex justify-between">
        <div className="flex text-gray-500 gap-1">
          <IoKeySharp className="mt-1" />
          <div className="flex flex-col">
            {["hubx", "Logged in", "more info"].map((item, index) => (
              <p
                key={index}
                className={`text-sm ${index === 1 ? "" : "text-[#4eb8ae]"}`}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
        <p className="text-gray-400 text-sm">22 minutes</p>
      </div>
    </div>
  );
};

export default EventsLogBox;
