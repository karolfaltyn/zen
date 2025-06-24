import React from "react";
import { Hero } from "../components/Hero.tsx";
import { Options } from "../components/Options.tsx";
import { Calendar } from "../components/ui/calendar.tsx";
import { Footer } from "../components/Footer.tsx";

import img_bg from "../assets/main-bg.svg";

export const Home = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center">
      <div
        className="flex h-[100%] w-full flex-col items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${img_bg})` }}
      >
        <div className="container">
          <Hero />
          <main>
            <Options />
            <div className="flex justify-center">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border border-black shadow-md dark:border-[#ccc]"
              />
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};
