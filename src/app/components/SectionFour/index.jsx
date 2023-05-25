import React from "react";
import Titles from "../Titles";
import { HiOutlineClipboardList } from "react-icons/hi";
import { BiTimeFive } from "react-icons/bi";
import CardSectionFour from "../CardSectionFour";
import ButtonStyled from "../LinkStyled";
import CardImageFour from "../CardImageFour";

export default function SectionFour() {
  return (
    <section className="px-[120px] min-h-[600px] w-full flex flex-col justify-center mt-16">
      <div className="flex w-full gap-10">
        <div className="flex-1 flex flex-col">
          <Titles
            title={"Try Our Healthy Menu"}
            icon={<HiOutlineClipboardList />}
          />
          <p className="text-[#9289A9] max-w-[90%] font-sans font-medium mt-3">
            We provide a variety of healthy recipes that have been curated by
            our best nutritionists for you
          </p>

          <ul className="w-full overflow-y-scroll min-h-[300px] max-h-[400px] flex-col flex gap-3 mt-10  justify-start">
            <li>
              <CardSectionFour
                title={"Breakfast Recipes"}
                icon={<BiTimeFive />}
              />
            </li>
            <li>
              <CardSectionFour
                title={"Low-Colorie Recipes"}
                isGold
                icon={<BiTimeFive />}
              />
            </li>
            <li>
              <CardSectionFour
                title={"Holiday Recipes"}
                icon={<BiTimeFive />}
              />
            </li>
            <li>
              <CardSectionFour
                title={"Restriction Recipes"}
                icon={<BiTimeFive />}
              />
            </li>
            <li>
              <CardSectionFour
                title={"Breakfast Recipes"}
                icon={<BiTimeFive />}
              />
            </li>
            <li>
              <CardSectionFour
                title={"Low-Colorie Recipes"}
                isGold
                icon={<BiTimeFive />}
              />
            </li>
            <li>
              <CardSectionFour
                title={"Holiday Recipes"}
                icon={<BiTimeFive />}
              />
            </li>
            <li>
              <CardSectionFour
                title={"Restriction Recipes"}
                icon={<BiTimeFive />}
              />
            </li>
          </ul>
        </div>

        <div className="flex-1 flex justify-center items-end gap-8">
          <CardImageFour
            description={"Red Onions With Chopped Cabbage"}
            isGold={true}
            labelButton={"Try now"}
          />
          <CardImageFour
            description={"Low Fat Apple Cake With White Cream"}
            isGold={false}
            labelButton={"Try now"}
          />
        </div>
      </div>
    </section>
  );
}
