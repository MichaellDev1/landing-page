import React from "react";
import { FaRegCommentDots } from "react-icons/fa";
import { MdArrowBackIosNew } from "react-icons/md";

export default function CardTestimonials() {
  return (
    <div
      className={`relative flex flex-col px-5 bg-[#FCFAFB] rounded-3xl pb-7 mt-16`}
    >
      <span
        className="relative flex items-center justify-center  bg-[#9E6DEE] w-[40px] h-[40px] rounded-xl bottom-6 text-white text-lg"
        style={{ border: "2px solid #ffffff85" }}
      >
        <FaRegCommentDots />
      </span>

      <em className="text-[#A299AB] font-normal">
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam molestias
        quaspisicing elit. Nam molestias quaspisicing elit. Nam molestias quasi
        dicta doloribus aut. Eaque, ipsa."
      </em>
      <div className="flex justify-between w-full items-center">
        <div>
          <h5 className="text-[18px] text-[#8b65c4] font-semibold mt-5">
            Rara Santuchez
          </h5>
          <span
            className="text-base text-[#A299AB] font-normal mt-1"
            style={{ lineHeight: 1 }}
          >
            Frelancer
          </span>
        </div>
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
    </div>
  );
}
