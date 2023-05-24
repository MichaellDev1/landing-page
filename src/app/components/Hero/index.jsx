import Link from "next/link";
import React from "react";
import { PlayIcon } from "../Icons";
import ButtonStyled from "../LinkStyled";

export default function Hero() {
  return (
    <section className="min-h-[500px] flex items-center">
      <div className="flex flex-col">
        <h2 className="text-7xl text-white flex flex-col font-bold">
          <span>Changing</span>
          <span>
            your <span className="text-amber-400">eating</span>
          </span>
          <span>habits</span>
        </h2>
        <p className="max-w-[500px] mt-5 text-gray-200 font-medium">
          Always take core of your health starting from the food menu that you
          consume avery day
        </p>

        <div className="mt-7 flex items-center gap-5">
          <ButtonStyled label={"Explore Menu"} />
          <Link
            href={"#"}
            className="text-white font-medium flex items-center gap-3 text-sm px-5 py-3 rounded-3xl"
          >
            <div
              className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center"
              style={{
                border: "2px solid #ffffff63",
              }}
            >
              <span className="text-[#FCC737]">
                <PlayIcon />
              </span>
            </div>
            Watch video
          </Link>
        </div>
      </div>
      <div></div>
    </section>
  );
}
