import { useEffect, useState } from "react";
import portfolio from "../assets/projects/portfolio.png";
import portfolioDark from '../assets/projects/portfolio-dark.png';

export default function Projects({theme}) {
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);
  const [count, setCount] = useState(0);

  const projects = [
    {
      id: 1,
      img: portfolio,
      imgDark: portfolioDark,
      name: "Personal Portfolio",
      desc: "Portfolio website created using React.js and Tailwind CSS.",
      demoUrl: "",
      githubUrl: "https://github.com/pavinpandey9/portfolio",
      hasDarKMode: true,
    },
  ];

  function checkDisabled() {
    if (count === Math.floor(projects.length - 1)) {
      setNextDisabled(true);
    } else if (count === 0) {
      setPrevDisabled(true);
    } else {
      setPrevDisabled(false);
      setNextDisabled(false);
    }
  }

  useEffect(() => {
    checkDisabled();
  }, [count]);

  return (
    <div className="container items-center gap-6">
      <div className="max-w-80 border border-slate-400 rounded-2xl overflow-hidden">
        <div
          className="flex transition duration-300 ease-in-out"
          style={{
            transform: `translateX(-${count * 100}%)`,
          }}
        >
          {projects.map((project) => (
            <div
              className="shrink-0 w-full flex flex-col justify-between"
              key={project.id}
            >
              <img
                className="w-full h-52 aspect-video object-cover"
                src={theme === 'dark' && project.hasDarKMode ? project.imgDark : project.img}
                alt={project.name}
              />
              <div className="overlay"></div>
              <div className="py-6 px-4">
                <p className="underline font-semibold mb-1">{project.name}</p>
                <p className="text-sm mb-5">{project.desc}</p>
                <div className="flex justify-between items-center">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-github text-3xl"></i>
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium py-2 px-6 border border-slate-400 rounded-3xl 
                  bg-zinc-800 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-800"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-3">
        <button
          type="button"
          className={`font-medium py-2 px-6 border border-slate-400 rounded-3xl 
          bg-zinc-800 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-800
          ${prevDisabled && "bg-opacity-40 dark:bg-opacity-40"}`}
          onClick={() => setCount(count - 1)}
          disabled={prevDisabled}
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button
          type="button"
          className={`font-medium py-2 px-6 border border-slate-400 rounded-3xl 
          bg-zinc-800 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-800
          ${nextDisabled && "bg-opacity-40 dark:bg-opacity-40"}`}
          onClick={() => setCount(count + 1)}
          disabled={nextDisabled}
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}
