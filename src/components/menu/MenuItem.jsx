export default function MenuItem({
  style,
  translate,
  isOpen,
  onClick,
  text,
  arrow,
  isTextFirst,
  children,
}) {
  return (
    <div className="nav-item">
      <div
        className={`fixed flex justify-center text-center w-56 h-32 text-2xl 
        font-semibold border border-zinc-800 rounded-40 cursor-pointer
        ${style} ${isOpen ? "bg-zinc-800 text-zinc-100 z-50 dark:bg-zinc-700" : "z-20"}
        dark:border-zinc-100`}
        onClick={onClick}
      >
        {isTextFirst ? (
          <>
            {isOpen && arrow}
            <br />
            {text}
          </>
        ) : (
          <>
            {text}
            <br />
            {isOpen && arrow}
          </>
        )}
      </div>
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-zinc-100 bg-opacity-95					
        z-40 transition duration-300 ease-in-out ${isOpen ? "translate-x-0 translate-y-0" : translate}
        dark:bg-zinc-800 dark:bg-opacity-95`}
      >
        {isOpen && children}
      </div>
    </div>
  );
}
