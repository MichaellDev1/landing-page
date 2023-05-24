import React from "react";

export default function CardSectionFour() {
  return (
    <div className="flex items-center bg-[#F9F1FE] gap-4 py-5 rounded-2xl px-5">
      <span
        className="relative flex items-center justify-center text-white text-4xl mr-2 w-[55px] h-[55px] rounded-xl"
        style={{
          background: "linear-gradient(#A779E5,#9865f5)",
          border: "2px solid #ffffff85",
        }}
      ></span>

      <span className="text-[#6E5895] font-bold text-xl">
        Breakfast Recipes
      </span>
    </div>
  );
}
