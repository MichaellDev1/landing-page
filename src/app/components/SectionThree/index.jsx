import React from "react";
import { StartIcon } from "../Icons";
import ButtonStyled from "../LinkStyled";

export default function SectionThree() {
  return (
    <section className="px-[120px] min-h-[400px] gap-14 flex mt-11">
      <div
        className="bg-white w-full p-4 rounded-[60px] mt-10"
        style={{ boxShadow: "-6px 0px 24px rgba(0 0 0 / 13%)" }}
      >
        <div className="bg-[#8A51F5] w-full flex items-center justify-center flex-col h-full rounded-[50px]">
          <span
            className="relative flex items-center justify-center mb-5 w-[50px] h-[50px] rounded-xl"
            style={{
              background: `#8039FF`,
              border: "2px solid #ffffff85",
            }}
          >
            <StartIcon />
          </span>

          <h4 className="text-white font-bold text-2xl">
            Get Started With <span className="text-[#FBBF24]">Eatly</span>
          </h4>

          <p className="max-w-[50%] text-center text-[#bdbbbb] font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ut
            debitis totam obcaecati fugiat!
          </p>
          <div className="mt-7">
          <ButtonStyled label={'Get Started'}/>
          </div>
        </div>
      </div>
    </section>
  );
}
