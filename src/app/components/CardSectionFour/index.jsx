import React from "react";

export default function CardSectionFour({ title, icon, isGold = false }) {
  return (
    <div
      className={`flex items-center max-w-[370px] ${
        isGold ? "bg-[#EFEFEF]" : "bg-[#EFE8F5]"
      } gap-4 py-5 rounded-2xl px-5`}
    >
      <span
        className="relative flex items-center justify-center text-white text-3xl mr-2 w-[50px] h-[50px] rounded-xl"
        style={{
          background: `${
            isGold ? "#F5BF42" : "linear-gradient(#A779E5,#9865f5)"
          }`,
          border: "2px solid #ffffff85",
        }}
      >
        {icon}
      </span>
      <span className="text-[#6E5895] font-bold text-[18px]">{title}</span>
    </div>
  );
}
