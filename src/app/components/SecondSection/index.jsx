import React from "react";
import Titles from "../Titles";

export default function SecondSection() {
  return (
    <section className="px-[120px] min-h-[600px] gap-14 flex mt-11">
      <div className="flex-1"></div>
      <div className="flex-1 relative">
        <div className="w-full">
          <Titles title={"Our Value To Help You"} />
          <p className="text-[13px] pl-6 max-w-[370px] mt-3 font-semibold text-[#8374aa]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
            corrupti!
          </p>
        </div>
        <div className="grid-cols-2 grid grid-rows-2  gap-y-10 gap-x-5 mt-14">
          <div className="bg-[#EFE8F5] px-6 pb-9 rounded-3xl">
            <div className="bottom-6 relative w-[50px] h-[50px] bg-[#9E7FEA] rounded-2xl"></div>
            <span className="text-[#4d3e64] font-semibold">
            Becomes Healthier
            </span>
            <p className="text-[#b49cf0] font-medium text-sm mt-2">Lorem ipsum dolor, sit amet consectetur adipisicing else.</p>
          </div>
          <div className="bg-[#ffffff] shadow-lg px-6 pb-9 rounded-3xl">
            <div className="bottom-6 relative w-[50px] h-[50px] bg-[#9E7FEA] rounded-2xl"></div>
            <span className="text-[#4d3e64] font-semibold">
            Increase Energy
            </span>
            <p className="text-[#b49cf0] font-medium text-sm mt-2">Lorem ipsum dolor, sit amet consectetur adipisicing else.</p>
          </div>
          <div className="bg-[#EFE8F5] px-6 pb-9 rounded-3xl">
            <div className="bottom-6 relative w-[50px] h-[50px] bg-[#9E7FEA] rounded-2xl"></div>
              <span className="text-[#4d3e64] font-semibold">
            Controlling Weight
            </span>
            <p className="text-[#b49cf0] font-medium text-sm mt-2">Lorem ipsum dolor, sit amet consectetur adipisicing else.</p>
          </div>
          <div className="bg-[#EFE8F5] px-6 pb-9 rounded-3xl">
            <div className="bottom-6 relative w-[50px] h-[50px] bg-[#9E7FEA] rounded-2xl"></div>
              <span className="text-[#4d3e64] font-semibold">
            Becomes Happier
            </span>
            <p className="text-[#b49cf0] font-medium text-sm mt-2">Lorem ipsum dolor, sit amet consectetur adipisicing else.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
