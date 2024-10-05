import React from "react";
import {
  NewUserBox,
  HowToSellBox,
  EventsLogBox,
  TrialPeriodBox,
} from "../index";

const BottomSection = () => {
  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-3 px-3 pt-3">
      <NewUserBox />
      <HowToSellBox />
      <EventsLogBox />
      <TrialPeriodBox />
    </div>
  );
};

export default BottomSection;
