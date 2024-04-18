export function toggleTheme() {
    document.documentElement.classList.toggle("bg-[#181a1b]");
    const isDarkMode = document.documentElement.classList.toggle("dark");
    
    interface SVGElement {
      style: {
        fill: string;
      };
    }
    const coffee = document.getElementById("coffee") as SVGElement;
    coffee.style.fill = isDarkMode ? "#f87171" : "#7f0102";

    const cursor = document.getElementById("cursor") as SVGElement;
    cursor.style.fill = isDarkMode ? "#bcb7af" : "#444";

    const box1 = document.getElementById("box1") as SVGElement;
    box1.style.fill = isDarkMode ? "#ccc" : "#444";

    const box2 = document.getElementById("box2") as SVGElement;
    box2.style.fill = isDarkMode ? "#ccc" : "#444";

    const box3 = document.getElementById("box3") as SVGElement;
    box3.style.fill = isDarkMode ? "#ccc" : "#444";
  } //TODO: optimise code