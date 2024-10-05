import React from "react";
import { MainChart, MainData } from "../index";

const MainSection = () => {
  return (
    <div className="flex flex-col xl:flex-row px-6 gap-10 py-4 bg-white">
      <MainChart />
      <MainData />
    </div>
  );
};

export default MainSection;
