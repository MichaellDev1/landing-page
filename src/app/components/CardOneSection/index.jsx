import Link from "next/link";
import React from "react";

export default function CardOneSection({
  title,
  description,
  icon,
  isDorado = false,
}) {
  return (
    <div
      className={`relative flex flex-col items-center px-5 justify-center text-center ${
        isDorado ? "h-[145%] bottom-[67px] rounded-t-[30px]" : "h-[100%]"
      } min-h-[200px]`}
      style={{
        background: `${isDorado && "linear-gradient(110deg,#F5CF70,#F5B118)"}`,
      }}
    >
      <span
        className="relative flex items-center justify-center mb-5 w-[50px] text-3xl text-white h-[50px] rounded-xl"
        style={{
          background: `${isDorado ? "#F3B230" : "#8039FF"}`,
          border: "2px solid #ffffff85",
        }}
      >
        {icon}
      </span>
      <h4
        className={`text-lg ${
          isDorado ? "text-[#846000]" : "text-white"
        } font-semibold`}
      >
        {title}
      </h4>
      <p
        className={` ${
          isDorado ? "text-[#9c7a1d]" : "text-[#bb98ec]"
        } font-medium`}
      >
        {description}
      </p>
      {isDorado && (
        <Link
          href={"#"}
          className="mt-10 flex items-center gap-1 text-sm text-[#705200]  font-bold"
        >
          Learn More
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="#705200"
              class="bi bi-play-fill"
              viewBox="0 0 16 16"
            >
              <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
            </svg>
          </span>
        </Link>
      )}
    </div>
  );
}
