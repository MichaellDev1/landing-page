import Link from 'next/link'
import React from 'react'

export default function Hero() {
  return   <section className="min-h-[500px] flex items-center">
  <div className="flex flex-col">
    <h2 className="text-7xl text-white flex flex-col font-bold">
      <span>Changing</span>
      <span>
        your <span className="text-amber-400">eating</span>
      </span>
      <span>habits</span>
    </h2>
    <p className="max-w-[500px] mt-5 text-gray-200 font-medium">
      Always take core of your health starting from the food menu that
      you consume avery day
    </p>

    <div className="mt-7 flex gap-5">
      <Link
        href={"#"}
        className="bg-[#F1B413] text-slate-700 font-medium text-sm px-5 py-3 rounded-xl"
      >
        Explore Menu
      </Link>

      <Link
        href={"#"}
        className="text-white font-medium text-sm px-5 py-3 rounded-3xl"
      >
        Watch video
      </Link>
    </div>
  </div>

  <div></div>
</section>
}
