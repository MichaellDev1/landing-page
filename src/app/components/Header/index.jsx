import Link from "next/link";
import React from "react";

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
    <header className="w-full h-[70px] flex justify-between items-center">
      <div></div>

      <nav>
        <ul className="flex gap-8 text-white text-sm font-medium">
          {navLinks.map(({ href, label }, inx) => (
            <li key={inx}>
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <Link
        href={"#"}
        className="bg-[#F0CB5B] text-slate-700 font-semibold text-sm px-5 py-2 rounded-3xl"
      >
        Let`s Talk
      </Link>
    </header>
  );
}
