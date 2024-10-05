import React from "react";
import { Btn, TagLine } from "../index";
import { RiFileList3Line } from "react-icons/ri";

const HowToSellBox = () => {
  const blogData = [
    {
      text: "Blended Learning: What It Is, Why It Matters & How To Apply",
      duration: "7 days",
    },
    {
      text: "Join the Course Sales Bootcamp [Free Live Workshops]",
      duration: "12 days",
    },
    {
      text: "12 Steps to Creating Awesome Live Classes in 2021",
      duration: "20 days",
    },
    {
      text: "Guy Kawasaki on the Future of Business in the Midst of a Pandemic",
      duration: "22 days",
    },
    {
      text: "What is Educational Marketing & How to Use it to Grow with Examples",
      duration: "23 days",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm px-3 pt-2 pb-4 flex flex-col gap-3 h-max">
      <div className="flex items-center gap-2">
        <TagLine
          text="How to sell courses blog"
          icon={<RiFileList3Line className="text-xl" />}
        />
        <Btn text="see all" className={`bg-[#55ccc1] rounded-2xl`} />
      </div>
      <div className="flex flex-col gap-3">
        {blogData.map((data, index) => (
          <div key={index} className="flex text-sm justify-between">
            <a href="#" className="flex gap-2 w-[70%] text-[#4eb8ae]">
              <span>◦</span>
              {data.text}
            </a>
            <p className="text-gray-400">{data.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowToSellBox;
