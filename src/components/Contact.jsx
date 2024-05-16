export default function Contact() {
  return (
    <div className="container text-center gap-5">
      <div>
        <p className="font-medium mb-1">Get In Touch</p>
        <p className="text-2xl font-semibold">Contact Me</p>
        <a href="tel:+918286394068"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium">
          +91 8286394068
        </a>
      </div>
      <div className="flex justify-center gap-3">
        <a
          href="mailto:&#112;&#097;&#118;&#105;&#110;&#112;&#097;&#110;&#100;&#101;&#121;&#057;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium py-2 px-8 border border-slate-400 rounded-3xl 
          bg-zinc-800 text-zinc-100
          dark:bg-zinc-100 dark:text-zinc-800"
        >
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/pavin-pandey"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium py-2 px-8 border border-slate-400 rounded-3xl 
          bg-zinc-800 text-zinc-100
          dark:bg-zinc-100 dark:text-zinc-800"
        >
          Linkedin
        </a>
      </div>
    </div>
  );
}
