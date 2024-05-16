import { useState } from "react";
import About from "../About";
import Skills from "../Skills";
import Projects from "../Projects";
import Contact from "../Contact";
import MenuItem from "./MenuItem";

export default function Menu() {
  const [about, setAbout] = useState(false);
  const [skills, setSkills] = useState(false);
  const [projects, setProjects] = useState(false);
  const [contact, setContact] = useState(false);

  const menu = [
    {
      id: 1,
      style:"-top-7 -left-20 items-end pb-3 -rotate-45",
      translate: "-translate-x-full -translate-y-full",
      text: "About",
      arrow: "↑",
      isTextFirst: true,
      isOpen: about,
      fn: () => setAbout(!about),
      component: <About />,
    },
    {
      id: 2,
      style:"-top-7 -right-20 items-end pb-3 rotate-45",
      translate: "translate-x-full -translate-y-full",
      text: "Skills",
      arrow: "↑",
      isTextFirst: true,
      isOpen: skills,
      fn: () => setSkills(!skills),
      component: <Skills />,
    },
    {
      id: 3,
      style:"-bottom-7 -left-20 items-start pt-3 rotate-45",
      translate: "-translate-x-full translate-y-full",
      text: "Projects",
      arrow: "↓",
      isTextFirst: false,
      isOpen: projects,
      fn: () => setProjects(!projects),
      component: <Projects />,
    },
    {
      id: 4,
      style:"-bottom-7 -right-20 items-start pt-3 -rotate-45",
      translate: "translate-x-full translate-y-full",
      text: "Contact",
      arrow: "↓",
      isTextFirst: false,
      isOpen: contact,
      fn: () => setContact(!contact),
      component: <Contact />,
    },
  ];

  return (
    <nav>
      {menu.map((menuItem) => (
        <MenuItem
          key={menuItem.id}
          style={menuItem.style}
          translate={menuItem.translate}
          isOpen={menuItem.isOpen}
          onClick={menuItem.fn}
          text={menuItem.text}
          arrow={menuItem.arrow}
          isTextFirst={menuItem.isTextFirst}
        >
          {menuItem.component}
        </MenuItem>
      ))}
    </nav>
  );
}
