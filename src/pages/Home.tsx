import React from "react";
import { Header } from "../components/Header.tsx";
import { ChoiceBox } from "../components/ChoiceBox.tsx";
import { Calendar } from "../components/ui/calendar.tsx";
import { Footer } from "../components/Footer.tsx";

export const Home = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="container">
      <Header />
      <main>
        <ChoiceBox />
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
  );
};
