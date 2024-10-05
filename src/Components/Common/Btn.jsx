import React from "react";

const Btn = ({ text = "", className }) => {
  return (
    <button className={`${className} text-sm w-max px-2 py-1 text-white`}>
      {text}
    </button>
  );
};

export default Btn;
