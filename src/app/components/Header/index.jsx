import Link from "next/link";
import React from "react";
import ButtonStyled from "../LinkStyled";

const navLinks = [
  {
    href: "#",
    label: "Programs",
  },
  {
    href: "#",
    label: "Services",
  },
  {
    href: "#",
    label: "News",
  },
  {
    href: "#",
    label: "About Us",
  },
];

export default function Header() {
  return (
    <header className="w-full h-[95px] flex justify-between items-center">
      <div></div>
      <nav>
        <ul className="flex gap-8 text-white text-[15px] font-semibold">
          {navLinks.map(({ href, label }, inx) => (
            <li key={inx}>
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <ButtonStyled label={"Let`s Talk"} />
    </header>
  );
}
