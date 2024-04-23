import { Time } from "./ui/Time.tsx";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-around border-b border-black p-4 dark:border-[#ccc]">
      <button className="text-2xl text-[#7f0102] dark:text-red-400 hover:font-medium">Zen</button>
      <div className="text-2xl font-extralight">
        <Time />
      </div>
    </nav>
  );
};
