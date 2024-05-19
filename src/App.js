import Hero from "./components/Hero";
import Menu from "./components/menu/Menu";
import { useEffect, useState } from "react";

export default function App() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    theme === "dark"
      ? document.querySelector("body").classList.add("dark")
      : document.querySelector("body").classList.remove("dark");
  }, [theme]);

  return (
    <div
      className="relative w-full h-screen overflow-hidden
      bg-zinc-100 text-zinc-800
      dark:bg-zinc-800 dark:text-zinc-100"
    >
      <Menu theme={theme} />
      <Hero theme={theme} setTheme={setTheme} />
    </div>
  );
}
