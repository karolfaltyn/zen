import { toggleTheme } from "../utils/toggleTheme.ts";
import { Time } from "./Time.tsx";

export const Hero = () => {
  return (
    <header className="my-12 flex flex-col justify-center text-center sm:mt-24">
      <div className="flex justify-center gap-2">
        <h1 className="mb-2 font-sarabun text-7xl font-semibold text-[#7f0102] dark:text-red-400">
          Zen
        </h1>
        <div className="relative flex items-center">
          <button onClick={toggleTheme} className="text-6xl">
            &#10070;
            <div className="absolute left-8 top-11">
              <svg
                className="cursor"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#999"
              >
                <path d="M19.221 10.803 12 10V4a2 2 0 0 0-4 0v12l-3.031-1.212a2 2 0 0 0-2.64 1.225l-.113.34a.998.998 0 0 0 .309 1.084l5.197 4.332c.179.149.406.231.64.231H19a2 2 0 0 0 2-2v-7.21a2 2 0 0 0-1.779-1.987z" />
              </svg>
            </div>
          </button>
        </div>
      </div>
      <p className="mb-2 font-sarabun text-3xl font-extralight text-[#7f0102] dark:text-red-400">
        Management app
      </p>
      <div className="flex justify-center text-2xl font-extralight">
        <Time />
      </div>
    </header>
  );
};
