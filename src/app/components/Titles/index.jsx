import React from "react";
export default function Titles({ title, icon }) {
  return (
    <div className="flex items-center gap-2 ">
      <span
        className="relative flex items-center justify-center text-white text-4xl w-[55px] h-[55px] rounded-xl"
        style={{
          background: "linear-gradient(#A779E5,#9865f5)",
          border: "2px solid #ffffff85",
        }}
      >
        {icon}
      </span>
      <h2 className="text-[#6D5395] text-3xl font-extrabold">{title}</h2>
    </div>
  );
}
