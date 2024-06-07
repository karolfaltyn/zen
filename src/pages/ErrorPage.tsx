import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer.tsx";
import { Button } from "../components/ui/button.tsx";

export const ErrorPage = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="mb-24 flex flex-col items-center gap-8">
        <p className="flex flex-col text-center font-sarabun text-8xl font-light text-[#7f0102] dark:text-red-400">
          404<span className="text-2xl">Page not found</span>
        </p>
        <p className="font-sarabun text-2xl font-light">
          There is nothing here!
        </p>
        <Link to="/">
          <Button>Let's go back</Button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};
