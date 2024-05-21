import { Link } from "react-router-dom";
import { Time } from "./Time.tsx";
import { toggleTheme } from "../utils/toggleTheme.ts";

export const Navbar = () => {
  return (
    <nav className="mb-12 flex items-center justify-around border-b border-[#444] p-4 dark:border-[#ccc] md:mb-24">
      <div className="flex gap-2">
        <Link
          to="/"
          className="font-sarabun text-2xl hover:opacity-75 dark:text-[#fafafa]"
        >
          Zen
        </Link>
        <div className="relative flex items-center">
          <button onClick={toggleTheme} className="text-2xl">
            &#10070;
            <div className="absolute left-3 top-4">
              <svg
                className="cursor"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="#999"
              >
                <path d="M19.221 10.803 12 10V4a2 2 0 0 0-4 0v12l-3.031-1.212a2 2 0 0 0-2.64 1.225l-.113.34a.998.998 0 0 0 .309 1.084l5.197 4.332c.179.149.406.231.64.231H19a2 2 0 0 0 2-2v-7.21a2 2 0 0 0-1.779-1.987z" />
              </svg>
            </div>
          </button>
        </div>
      </div>
      <div className="w-12 text-2xl font-extralight">
        <Time />
      </div>
    </nav>
  );
};
