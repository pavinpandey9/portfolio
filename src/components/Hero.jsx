import CV from "../assets/document/CV.pdf";

export default function Hero({ theme, setTheme }) {
  return (
    <div className="container text-center gap-6">
      <h1>
        <span className="text-sm font-semibold">Hello, I'm</span>
        <br />
        <span className="text-3xl md:text-4xl font-bold">
          Pavin Pandey
        </span>{" "}
        <br />
        <span className="text-sm">Frontend Developer - 3 yrs</span>
      </h1>
      <img
        src="https://avatars.githubusercontent.com/u/81810380?s=400&u=bf3d5e1e7badd920e84b38710c555c150286fb83&v=4"
        alt="Profile"
        className="animate-bounce duration-700 block w-52 h-52 object-cover	mx-auto rounded-full"
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
