import React from "react";
import CardOneSection from "../CardOneSection";
import Titles from "../Titles";
import { TbChefHat, TbToolsKitchen2 } from "react-icons/tb";
import { MdOutlineSetMeal, MdArrowBackIosNew } from "react-icons/md";
import { GiHotMeal } from "react-icons/gi";
import { TbCrown } from "react-icons/tb";

export default function SectionTwo() {
  return (
    <div className="px-[120px] min-h-[600px] w-full flex flex-col justify-center mt-16">
      <div className="max-w-[1400px]">
        <div className="flex w-full justify-between">
          <Titles title={"Our Best Programs"} icon={<TbCrown />} />
          <div className="flex gap-3">
            <button
              className="bg-neutral-200 text-neutral-400 w-10 flex justify-center items-center rounded-full h-10"
              style={{ border: "2px solid #ffffff85" }}
            >
              <MdArrowBackIosNew />
            </button>
            <button
              className="bg-neutral-300 rotate-180 text-neutral-700 w-10 flex justify-center items-center rounded-full h-10"
              style={{ border: "2px solid #ffffff85" }}
            >
              <MdArrowBackIosNew />
            </button>
          </div>
        </div>

        <div
          className="bg-white p-4 rounded-[60px] mt-10"
          style={{ boxShadow: "-6px 0px 24px rgba(0 0 0 / 13%)" }}
        >
          <div className="grid lg:grid-cols-4  py-7 grid-cols-1 bg-[#8A51F5] w-full gap-7 min-h-[230px] rounded-[45px]">
            <CardOneSection
              title={" Healthy Recipe"}
              icon={<TbChefHat />}
              description={" Homart Recipes. From food & nutrition experts"}
            />
            <CardOneSection
              icon={<GiHotMeal />}
              title={" Healthy Meals"}
              description={"Learn how to tiecome a meal planning pro"}
            />

            <CardOneSection
              title={"Healthy Eating"}
              icon={<TbToolsKitchen2 />}
              description={"Eat healthy with aout export & inspiration tips"}
              isDorado
            />

            <CardOneSection
              title={"Healthy Lifes"}
              icon={<MdOutlineSetMeal />}
              description={" Your like is your choice maje youself healsheet"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
