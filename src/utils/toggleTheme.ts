export function toggleTheme() {
  document.body.classList.toggle("bg-[#181a1b]");
  const isDarkMode = document.documentElement.classList.toggle("dark");

  localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
}