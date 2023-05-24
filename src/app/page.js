import SectionTwo from "./components/SectionTwo";
import Hero from "./components/Hero";
import Header from "./components/Header";
import SecondSection from "./components/SecondSection";
import ContentBrands from "./components/ContentBrands";

export default function Home() {
  return (
    <main className="w-full min-h-[100vh]">
      <div
        className="w-full min-h-[90vh] px-[120px]"
        style={{
          background:
            "linear-gradient(217deg, rgb(255 177 0 / 76%), rgb(39 0 255 / 48%) 70.71% ), linear-gradient(127deg, rgb(110 1 211), rgba(0, 255, 0, 0) 70.71%), linear-gradient(336deg, rgb(255 255 255 / 80%), rgb(17 17 32 / 0%) 70.71%)",
        }}
      >
        <Header />
        <Hero />
      </div>
      <ContentBrands />
      <SectionTwo />
      <SecondSection />
    </main>
  );
}
