import html from "../assets/logos/html.png";
import css from "../assets/logos/css.png";
import javascript from "../assets/logos/javascript.png";
import angular from "../assets/logos/angular.png";
import react from "../assets/logos/react.png";
import typescript from "../assets/logos/typescript.png";
import redux from "../assets/logos/redux.png";
import rxjs from "../assets/logos/rxjs.png";
import bootstrap from "../assets/logos/bootstrap.png";
import tailwind from "../assets/logos/tailwind.png";
import git from "../assets/logos/git.png";
import postman from "../assets/logos/postman.png";
import jira from "../assets/logos/jira.png";
import figma from "../assets/logos/figma.png";
import xd from "../assets/logos/adobe-xd.png";
import photoshop from "../assets/logos/adobe-photoshop.png";

export default function Skills() {
  const languages = [
    {
      id: 1,
      url: html,
      name: "HTML5",
    },
    {
      id: 2,
      url: css,
      name: "CSS3",
    },
    {
      id: 3,
      url: javascript,
      name: "JavaScript",
    },
    {
      id: 4,
      url: angular,
      name: "Angular",
    },
    {
      id: 5,
      url: react,
      name: "React",
    },
    {
      id: 6,
      url: typescript,
      name: "Typescript",
    },
    {
      id: 7,
      url: redux,
      name: "Redux",
    },
    {
      id: 8,
      url: rxjs,
      name: "Rxjs",
    },
    {
      id: 9,
      url: bootstrap,
      name: "Bootstrap",
    },
    {
      id: 10,
      url: tailwind,
      name: "Tailwind",
    },
  ];

  const tools = [
    {
      id: 11,
      url: git,
      name: "Git",
    },
    {
      id: 12,
      url: postman,
      name: "Postman",
    },
    {
      id: 13,
      url: jira,
      name: "Jira",
    },
    {
      id: 14,
      url: figma,
      name: "Figma",
    },
    {
      id: 15,
      url: xd,
      name: "Adobe XD",
    },
    {
      id: 16,
      url: photoshop,
      name: "Photoshop",
    },
  ];

  return (
    <div className="container gap-8">
      <div className="border border-slate-400 rounded-md p-4
        dark:border-zinc-100">
        <div className="text-lg pb-4 font-semibold underline">Frontend Development</div>
        <ul className="flex flex-wrap gap-3 text-sm">
          {languages.map((language) => (
            <li
              key={language.id}
              className="flex justify-center items-center gap-2 px-3 py-2 font-medium border border-slate-400 rounded-md
                bg-zinc-100 dark:bg-zinc-800 dark:border-zinc-100">
              <img className="w-5 h-5" src={language.url} alt={language.name} loading="lazy" />
              <span>{language.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="border border-slate-400 rounded-md p-4
        dark:border-zinc-100">
        <div className="text-lg pb-4 font-semibold underline">Others</div>
        <ul className="flex flex-wrap gap-3 text-sm">
          {tools.map((tool) => (
            <li
              key={tool.id}
              className="flex justify-center items-center gap-2 px-3 py-2 font-medium border border-slate-400 rounded-md
                bg-zinc-100 dark:bg-zinc-800 dark:border-zinc-100">
              <img className="w-5 h-5" src={tool.url} alt={tool.name} loading="lazy" />
              <span className="">{tool.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
