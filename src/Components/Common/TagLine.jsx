import React from "react";

const TagLine = ({ text = "", icon }) => {
  return (
    <div className="flex items-center gap-2 text-gray-600">
      {icon}
      <h2 className="font-semibold text-sm">{text}</h2>
    </div>
  );
};

export default TagLine;
