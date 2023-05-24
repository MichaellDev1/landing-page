import React from "react";
import Titles from "../Titles";
import CardTestimonials from "../CardTestimonials";

import { RiDoubleQuotesL } from "react-icons/ri";

export default function SectionFive() {
  return (
    <section className="px-[120px] min-h-[400px] gap-14 flex mt-28">
      <div className="flex w-full md:flex-row flex-col">
        <div className="flex-1"></div>
        <div className="flex-1 flex flex-col">
          <Titles title={"Testimonials Abount Us"} icon={<RiDoubleQuotesL />} />

          <p className="text-[14px] pl-6 max-w-[370px] mt-3 font-semibold text-[#8374aa]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magng elit.
            Magni, corrupti!g elit. Magn
          </p>

          <CardTestimonials />
        </div>
      </div>
    </section>
  );
}
