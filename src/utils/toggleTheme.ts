export function toggleTheme() {
    document.body.classList.toggle("bg-[#181a1b]");
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

    const box = document.querySelectorAll(".box");
    box.forEach(box => {
      if (box instanceof SVGElement) {
        box.style.fill = isDarkMode ? "#ccc" : "#444";
    }
  });
  }