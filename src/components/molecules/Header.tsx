import { useEffect, useState } from "react";

export const Header = () => {
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 0 ? setIsShrunk(true) : setIsShrunk(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`bg-slate-100 border-gray-200 text-gray-900 dark:text-white dark:bg-gray-900 transition-all duration-1000 ease-in-out ${
        isShrunk ? `max-h-0` : "max-h-72"
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between p-4 font-bold text-3xl">
        FE George
      </div>
    </nav>
  );
};
