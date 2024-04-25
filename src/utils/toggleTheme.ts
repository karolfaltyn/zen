export function toggleTheme() {
    document.body.classList.toggle("bg-[#181a1b]");
    const isDarkMode = document.documentElement.classList.toggle("dark");

    const box = document.querySelectorAll(".box");
    box.forEach(box => {
      if (box instanceof SVGElement) {
        box.style.fill = isDarkMode ? "#ccc" : "#444";
    }
  });

    const coffee = document.querySelectorAll(".coffee");
    coffee.forEach(coffee => {
      if (coffee instanceof SVGElement) {
        coffee.style.fill = isDarkMode ? "#f87171" : "#7f0102";
    }
  });

    const cursor = document.querySelectorAll(".cursor");
    cursor.forEach(cursor => {
      if (cursor instanceof SVGElement) {
        cursor.style.fill = isDarkMode ? "#bcb7af" : "#444";
    }
  });
  }