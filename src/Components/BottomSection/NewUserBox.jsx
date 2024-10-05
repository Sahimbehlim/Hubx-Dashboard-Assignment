import React from "react";
import { FaRegUser } from "react-icons/fa6";
import { Btn, TagLine } from "../index";

const NewUserBox = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm px-3 pt-2 pb-4 flex flex-col gap-3 xl:h-max">
      <div className="flex items-center gap-2">
        <TagLine text="New users" icon={<FaRegUser />} />
        <Btn text="see all" className={`bg-[#55ccc1] rounded-2xl`} />
      </div>
      <div className="flex items-center gap-2">
        <div className="w-10 h-10">
          <img
            src="/avatar.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-gray-600">
          <p className="text-sm">hubx</p>
          <p className="text-[12px]">24 minutes</p>
        </div>
      </div>
    </div>
  );
};

export default NewUserBox;
