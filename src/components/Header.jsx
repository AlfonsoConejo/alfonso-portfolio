import { useState, useEffect } from "react";
import { motion } from "motion/react";
import links from "../data/navLinks";

export default function Header({dictionary, language, setLanguage, activeSection}) {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(activeSection);

  return(
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md py-3 sm:py-4 
      ${scrolled 
        ? "bg-background/70 border-b border-sky-600/10" 
        : "border-b border-transparent"
      }`}
    >
      <div className='w-full px-4 sm:px-6 lg:px-8'>
        <div className='max-w-6xl mx-auto flex items-center justify-between'>
          <div className="flex items-center gap-3">
            <div className="
              w-8 h-8
              rounded-xl
              bg-gradient-to-br
              from-sky-300
              to-blue-600
              flex items-center justify-center
            ">
              <span className="font-hand text-white text-2xl font-semibold">
                A
              </span>
            </div>

            <span className="font-hand text-text-h font-semibold text-xl">
              Alfonso
            </span>
          </div>

          <nav className='hidden md:flex items-center justify-center'>
            {/* Nav Links */}
            <div className='relative bg-white/5 backdrop-blur-sm rounded-full px-1 py-1 mr-4 border border-sky-600/10'>
              <ul className="flex items-center">
                {links.map((link) => (
                  <li key={link.id} className="relative">
                    <a
                      href={`#${link.id}`}
                      className={`
                        relative block px-3 sm:px-4 py-2 text-xs hover:text-gray-200 rounded-full
                        sm:text-sm font-semibold transition-colors text-primary-foreground
                        ${activeSection === link.id ? 'text-gray-200' : 'text-gray-400'}
                      `}
                    >
                      {activeSection === link.id && (
                        <motion.span
                          layoutId="active-pill"
                          className="absolute inset-0 rounded-full bg-sky-700 z-0"
                        />
                      )}
                      <span className="relative z-10">
                        {dictionary.header[link.id]}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Language Toogle */}
            <div className="relative flex items-center bg-white/5 backdrop-blur-sm rounded-full p-1">
              {["en", "es"].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`
                    relative  px-3 py-1 rounded-full text-sm font-medium cursor-pointer hover:text-gray-200
                    ${language === lang ? 'text-gray-200' : 'text-gray-400'}
                  `}
                >
                  {language === lang && (
                    <motion.span
                      layoutId="language-pill"
                      className="absolute inset-0 rounded-full bg-gray-700"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}

                  <span className="relative z-10 uppercase">
                    {lang}
                  </span>
                </button>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}