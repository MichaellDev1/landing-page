import React from "react";

export default function CardSection({
  title,
  icon,
  isGold = false,
  description = "Lorem ipsum dolor, sit amet consectetur adipisicing else.",
}) {
  return (
    <div className="bg-[#EFE8F5] px-6 pb-9 rounded-3xl">
      <div
        className={`bottom-6 ${
          isGold ? "bg-[#F5BF42]" : "bg-[#9E7FEA]"
        } relative w-[50px] h-[50px]  rounded-2xl flex justify-center items-center`}
        style={{
          border: "2px solid #ffffff85",
        }}
      >
        <span className="text-2xl text-white">{icon}</span>
      </div>
      <span className="text-[#4d3e64] font-semibold">{title}</span>
      <p className="text-[#b49cf0] font-medium text-sm mt-2">{description}</p>
    </div>
  );
}
