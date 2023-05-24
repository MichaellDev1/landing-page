import React from "react";

export default function Titles({ title }) {
  return (
    <div className="flex items-center gap-2 ml-5">
      <span
        className="relative flex items-center justify-center w-[40px] h-[40px] rounded-xl"
        style={{ background: "linear-gradient(#A779E5,#9865f5)" }}
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
      <h2 className="text-[#52437B] text-2xl font-bold">{title}</h2>
    </div>
  );
}
