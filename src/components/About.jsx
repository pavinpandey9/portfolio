export default function About() {
  return (
    <div className="container text-left gap-8">
      <div>
        <p className="inline-block py-2 px-4 border border-slate-400 rounded-3xl mb-3
          bg-zinc-800 text-zinc-100
          dark:bg-zinc-100 dark:text-zinc-800">
          <i className="fa-solid fa-briefcase mr-2"></i>
          <span className="font-medium">Experience</span>
        </p>
        <p>
          Skilled Frontend Developer with 3 years of experience specialising in
          crafting visually appealing and user-friendly web applications. My
          proficiency spans HTML, CSS, and JavaScript, complemented by knowledge
          of modern frameworks like Angular, React, Bootstrap, and Tailwind.
        </p>
      </div>

      <div>
        <p className="inline-block py-2 px-4 border border-slate-400 rounded-3xl mb-3
          bg-zinc-800 text-zinc-100
          dark:bg-zinc-100 dark:text-zinc-800">
          <i className="fa-solid fa-book-open-reader mr-2"></i>
          <span className="font-medium">Education</span>
        </p>

        <div>
          <p>Mumbai University - 2015</p>
          <p>BSc - Computer Science</p>
          <p>Grade - A</p>
        </div>
      </div>
    </div>
  );
}
