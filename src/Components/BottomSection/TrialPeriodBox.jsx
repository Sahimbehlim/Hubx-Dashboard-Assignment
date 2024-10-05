import React from "react";
import { Btn, TagLine } from "../index";
import { RiUserLocationLine } from "react-icons/ri";
import { CgSandClock } from "react-icons/cg";

const TrialPeriodBox = () => {
  return (
    <div className="flex flex-col gap-3">
      {/* Box Top */}
      <div
        style={{
          background:
            "repeating-linear-gradient(-45deg, white, white 20px, #f1fbfa 20px, #f1fbfa 50px)",
        }}
        className="rounded-lg shadow-sm px-3 pt-2 pb-4 flex justify-between h-max"
      >
        <div className="flex flex-col gap-2 pb-4">
          <h2 className="font-semibold text-gray-600">Trial period</h2>
          <div className="h-24 w-24 bg-[#55ccc1] flex flex-col items-center justify-center rounded-full text-white border-2 border-white shadow-[0px_0px_10px_2px_rgba(0,0,0,0.3)]">
            <p className="font-medium text-lg">30</p>
            <p className="text-[12px]">DAYS LEFT</p>
          </div>
        </div>
        <div className="pt-1 flex flex-col justify-between">
          <CgSandClock className="text-4xl text-gray-400 ms-auto" />
          <Btn
            text="Upgrade now! »"
            className={"bg-[#f7399b] rounded-2xl font-bold px-3 text-[13px]"}
          />
        </div>
      </div>

      {/* Box Bottom */}
      <div className="bg-white rounded-lg shadow-sm px-3 pt-3 pb-4 flex flex-col gap-3 h-max">
        <TagLine
          text="Online users (1)"
          icon={<RiUserLocationLine className="text-lg" />}
        />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10">
              <img
                src="/avatar.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <a href="#" className="text-[#4eb8ae]">
              hubx
            </a>
          </div>
          <Btn text="contact" className={`bg-[#55ccc1] rounded-sm`} />
        </div>
      </div>
    </div>
  );
};

export default TrialPeriodBox;
