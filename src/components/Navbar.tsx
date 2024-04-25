import { Time } from "./ui/Time.tsx";

export const Navbar = () => {
  return (
    <nav className="mb-12 flex items-center justify-around border-b border-black p-4 dark:border-[#ccc] md:mb-24">
      <button className="text-2xl text-[#7f0102] hover:font-medium dark:text-red-400 ">
        Zen
      </button>
      <div className="text-2xl font-extralight">
        <Time />
      </div>
    </nav>
  );
};
