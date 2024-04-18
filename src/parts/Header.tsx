import { toggleTheme } from "../utils/toggleTheme.ts";

export const Header = () => {
  return (
    <header className="mb-16 mt-12 flex flex-col justify-center text-center sm:mt-24">
      <div className="flex justify-center gap-2">
        <h1 className="mb-2 text-7xl font-semibold text-[#7f0102] dark:text-red-400">
          Zen
        </h1>
        <div className="relative flex items-center">
          <button onClick={toggleTheme}>
            <svg
              id="coffee"
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="#7f0102"
            >
              <path d="M5 2h2v3H5zm4 0h2v3H9zm4 0h2v3h-2zm6 7h-2V7H3v11c0 1.654 1.346 3 3 3h8c1.654 0 3-1.346 3-3h2c1.103 0 2-.897 2-2v-5c0-1.103-.897-2-2-2zm-4 9a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9h10v9zm2-2v-5h2l.002 5H17z" />
            </svg>
            <div className="absolute right-2 top-11">
              <svg
                id="cursor"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#444"
              >
                <path d="M19.221 10.803 12 10V4a2 2 0 0 0-4 0v12l-3.031-1.212a2 2 0 0 0-2.64 1.225l-.113.34a.998.998 0 0 0 .309 1.084l5.197 4.332c.179.149.406.231.64.231H19a2 2 0 0 0 2-2v-7.21a2 2 0 0 0-1.779-1.987z" />
              </svg>
            </div>
          </button>
        </div>
      </div>
      <p className="text-3xl font-light text-[#7f0102] dark:text-red-400">
        Select Option
      </p>
    </header>
  );
};
