import Link from "next/link";
import React from "react";

export default function ButtonStyled({ label, style }) {
  return (
    <Link
      href={"#"}
      className={`text-[#815203] ${style} bg-[#F5BF42] font-semibold text-sm px-5 py-2 rounded-xl`}
      style={{
        border: "2px solid #ffffff85",
      }}
    >
      {label}
    </Link>
  );
}
