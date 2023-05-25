import React from "react";
import ButtonStyled from "../LinkStyled";

export default function CardImageFour({ isGold, description, labelButton }) {
  return (
    <div className="w-[230px] min-h-[350px] bg-[#EEE8F5]  rounded-t-[500px] rounded-b-[100px] flex flex-col p-5 border-4">
      <div
        className="w-full h-[190px] rounded-t-[500px] rounded-b-[100px] border-4"
        style={{ background: "linear-gradient(45deg, #ADAAED, #dbdaf3)" }}
      ></div>
      <div className="flex flex-col items-center text-center">
        <p className="text-[16px] max-w-[370px] font-semibold text-[#6E5895] py-5">
          {description}
        </p>
        <ButtonStyled label={labelButton} isGold={isGold} />
      </div>
    </div>
  );
}
