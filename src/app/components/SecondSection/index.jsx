import React from "react";
import Titles from "../Titles";
import CardSection from "../CardSecond";
import { RiVipDiamondLine } from "react-icons/ri";
import { AiFillStar } from "react-icons/ai";
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { TbActivityHeartbeat } from "react-icons/tb";

export default function SecondSection() {
  return (
    <section className="px-[120px] min-h-[600px] gap-14 flex mt-11 md:flex-row flex-col">
      <div className="flex-1"></div>
      <div className="flex-1 relative">
        <div className="w-full">
          <Titles title={"Our Value To Help You"} icon={<RiVipDiamondLine />} />
          <p className="text-[13px] pl-6 max-w-[370px] mt-3 font-semibold text-[#8374aa]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
            corrupti!
          </p>
        </div>
        <div className="grid grid-cols-1 grid-rows-1  gap-y-10 gap-x-5 mt-14">
          <CardSection
            title={"  Becomes Healthier"}
            icon={<BsFillSuitHeartFill />}
          />
          <CardSection
            title={" Increase Energy"}
            isGold
            icon={<MdOutlineEnergySavingsLeaf />}
          />

          <CardSection
            title={"Controlling Weight"}
            icon={<TbActivityHeartbeat />}
          />
          <CardSection title={"Becomes Happier "} icon={<AiFillStar />} />
        </div>
      </div>
    </section>
  );
}
