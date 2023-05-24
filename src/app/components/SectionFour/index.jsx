import React from "react";
import Titles from "../Titles";
import { HiOutlineClipboardList } from "react-icons/hi";

export default function SectionFour() {
  return (
    <section className="px-[120px] min-h-[600px] w-full flex flex-col justify-center mt-16">
      <div className="flex w-full">
        <div className="flex-1 flex flex-col">
          <Titles
            title={"Try Our Healthy Menu"}
            icon={<HiOutlineClipboardList />}
          />
          <p className="text-[#9289A9] max-w-[90%] font-sans font-medium mt-3">
            We provide a variety of healthy recipes that have been curated by
            our best nutritionists for you
          </p>

          <ul className="w-full overflow-y-scroll min-h-[300px] flex-col flex gap-3 mt-10  justify-start items-start">
            <li>
              <div className="flex items-center bg-[#F9F1FE] gap-4 py-5 rounded-2xl px-5">
                <span
                  className="relative flex items-center justify-center text-white text-4xl mr-2 w-[55px] h-[55px] rounded-xl"
                  style={{
                    background: "linear-gradient(#A779E5,#9865f5)",
                    border: "2px solid #ffffff85",
                  }}
                ></span>

                <span className="text-[#6E5895] font-bold text-xl">Breakfast Recipes</span>
              </div>
            </li>
          </ul>
        </div>

        <div className="flex-1"></div>
      </div>
    </section>
  );
}
