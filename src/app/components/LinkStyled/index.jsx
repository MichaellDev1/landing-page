import Link from "next/link";
import React from "react";

export default function ButtonStyled({ label, style, isGold = true }) {
  return (
    <Link
      href={"#"}
      className={`${style} ${
        isGold ? "bg-[#F5BF42] text-[#815203] " : "bg-slate-100 text-[#6E5895]"
      } font-semibold text-sm px-5 py-2 rounded-xl`}
      style={{
        border: "2px solid #ffffff85",
      }}
    >
      {label}
    </Link>
  );
}
