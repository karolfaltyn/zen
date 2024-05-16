import { Link } from "react-router-dom";
import { Time } from "./ui/Time.tsx";
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
          <button onClick={toggleTheme}>
            <svg
              className="coffee"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#7f0102"
            >
              <path d="M5 2h2v3H5zm4 0h2v3H9zm4 0h2v3h-2zm6 7h-2V7H3v11c0 1.654 1.346 3 3 3h8c1.654 0 3-1.346 3-3h2c1.103 0 2-.897 2-2v-5c0-1.103-.897-2-2-2zm-4 9a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9h10v9zm2-2v-5h2l.002 5H17z" />
            </svg>
            <div className="absolute right-1 top-4">
              <svg
                className="cursor"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="#444"
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
