import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Menu from "./components/menu/Menu";

export default function App() {
  return (
    <div
      className="relative w-full h-screen overflow-hidden
      bg-zinc-100 text-zinc-800
      dark:bg-zinc-800 dark:text-zinc-100"
    >
      <Menu />
      <Hero />
    </div>
  );
}
