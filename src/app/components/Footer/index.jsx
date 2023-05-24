import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full flex pt-16 px-[120px] mt-20 flex-col">
      <div className="flex w-full justify-between gap-8">
        <div className="flex flex-col gap-3">
        <span className="text-[#654B99] font-semibold text-base">Company</span>
          <p className="max-w-[270px] text-[#A294B3] font-medium text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quasi
            nesciunt corrupti doloribus quis.
          </p>
        </div>

        <div className="flex flex-1 gap-10 justify-end">
          <div className="flex flex-col gap-3">
            <span className="text-[#654B99] font-semibold text-base">About</span>
            <Link href={"#"} className="text-[#A294B3] text-sm">Terms & Agreements</Link>
            <Link href={"#"} className="text-[#A294B3] text-sm">Privacy Policy</Link>
            <Link href={"#"} className="text-[#A294B3] text-sm">Terms & Agreements</Link>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-[#654B99] font-semibold text-base">Movement</span>
            <Link href={"#"} className="text-[#A294B3] text-sm">Terms & Agreements</Link>
            <Link href={"#"} className="text-[#A294B3] text-sm">Privacy Policy</Link>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-[#654B99] font-semibold text-base">Company</span>
            <Link href={"#"} className="text-[#A294B3] text-sm">Terms & Agreements</Link>
            <Link href={"#"} className="text-[#A294B3] text-sm">Privacy Policy</Link>
            <Link href={"#"} className="text-[#A294B3] text-sm">Terms & Agreements</Link>
          </div>
        </div>
      </div>

      <div className="flex justify-between w-full py-10">
        <span className="text-[#693daf] font-medium text-sm">@{new Date().getFullYear()} Random. All rights reserved</span>
        <div className="flex gap-5">
          <Link href={"#"} className="text-[#693daf] font-medium text-sm">Terms & Agreements</Link>
          <Link href={"#"} className="text-[#693daf] font-medium text-sm">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
