import { useEffect, useState } from "react";
import CV from '../assets/document/CV.pdf';

export default function Hero() {
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
    <div className="container text-center gap-4">
      <h1>
        <span className="text-sm font-semibold">Hello, I'm</span>
        <br />
        <span className="text-4xl font-bold">Pavin Pandey</span> <br />
        <span>Frontend Developer - 3 yrs</span>
      </h1>
      <img
        src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png"
        alt="Profile"
        className="animate-bounce duration-700 block w-60 h-60 object-cover	mx-auto"
      />
      <a
        href={CV}
        download="CV_Pavin_Pandey"
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium w-max mx-auto py-2 px-4 border border-slate-400 rounded-3xl 
          bg-zinc-800 text-zinc-100
          dark:bg-zinc-100 dark:text-zinc-800"
      >
        Download Resume
        <i className="fa-solid fa-cloud-arrow-down ml-2"></i>
      </a>
      <div
        className="fixed bottom-6 left-1/2 -translate-x-1/2 rounded-2rem w-16 py-0.5 px-2.5 
        text-left bg-zinc-200
        dark:text-right dark:text-zinc-800"
      >
        {theme === "light" && (
          <i
            className="fa-solid fa-sun text-3xl cursor-pointer"
            onClick={() => setTheme("dark")}
          ></i>
        )}
        {theme === "dark" && (
          <i
            className="fa-solid fa-moon text-3xl cursor-pointer"
            onClick={() => setTheme("light")}
          ></i>
        )}
      </div>
    </div>
  );
}
