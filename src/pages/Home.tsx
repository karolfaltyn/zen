import React from "react";
import { Navbar } from "../parts/Navbar.tsx";
import { Header } from "../parts/Header.tsx";
import { ChoiceBox } from "../parts/ChoiceBox.tsx";
import { Calendar } from "../components/ui/calendar.tsx";

export const Home = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="container">
      <Navbar />
      <Header />
      <main>
        <ChoiceBox />
        <div className="flex justify-center">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </div>
      </main>
    </div>
  );
};
