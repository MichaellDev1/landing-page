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
      className={`relative flex flex-col items-center justify-center text-center ${
        isDorado ? "h-[131%] bottom-[71px] rounded-t-3xl" : "h-[100%]"
      } min-h-[200px]`}
      style={{
        background: `${isDorado && "linear-gradient(110deg,#F5CF70,#F5B118)"}`,
      }}
    >
      <span
        className="relative flex items-center justify-center mb-5 w-[45px] border h-[45px] rounded-xl"
        style={{
          background: `${
            isDorado
              ? "linear-gradient(#ebb85b,#F5AF2E)"
              : "linear-gradient(#A779E5,#9865f5)"
          }`,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="#F5D89D"
          class="bi bi-star-fill"
          viewBox="0 0 16 16"
        >
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
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
        <Link href={"#"} className="mt-10 text-sm text-[#705200]  font-bold">
          Learn More
        </Link>
      )}
    </div>
  );
}
