import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import links from "../data/navLinks";
import { useClickOutside } from "../hooks/useClickOutside";


export default function Header({dictionary, language, setLanguage, activeSection}) {

  const menuButtonRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useClickOutside(menuButtonRef, () => {setIsOpen(false)});

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleResize = (e) => {
      if (e.matches) {
        setIsOpen(false);
      }
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return(
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        py-3 sm:py-4
        transition-all duration-300
        ${
          isOpen
          ? "bg-zinc-900/70 backdrop-blur-xl border-b border-transparent"
          : scrolled
          ? "bg-background/70 backdrop-blur-md border-b border-sky-600/10"
          : "backdrop-blur-md border-b border-transparent"
        }
      `}
    >
      <div className='w-full px-4 sm:px-6 lg:px-8' ref={menuButtonRef}>
        <div className='max-w-6xl mx-auto flex items-center justify-between gap-3'>
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

          <nav className='flex items-center justify-center'>
            {/* Nav Links */}
            <div className='relative hidden md:flex bg-white/5 backdrop-blur-sm rounded-full px-1 py-1 mr-4 border border-sky-600/10'>
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
            <div className="relative flex items-center bg-white/5 backdrop-blur-sm rounded-full p-1 mr-2 md:mr-0">
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

            {/* Mobile menu */}
            <div className="relative flex justify-center items-center md:hidden bg-white/5 backdrop-blur-sm rounded-full p-1">
              <button
                className="flex items-center justify-center rounded-full p-1 cursor-pointer"
                onClick={toggleMenu}
                aria-label="Open menu"
              >
                <div className="relative w-5 h-5">
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{
                      rotate: isOpen ? 90 : 0,
                      opacity: isOpen ? 0 : 1,
                    }}
                  >
                    <Menu size={18} />
                  </motion.div>

                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{
                      rotate: isOpen ? 0 : -90,
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <X size={18} />
                  </motion.div>
                </div>
              </button>
            </div>
          </nav>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          className="absolute left-0 top-full w-full z-40"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <div className="bg-zinc-900/95 backdrop-blur-xl px-4 sm:px-6 lg:px-8 border-b border-sky-600/10">
            <ul className="max-w-6xl mx-auto py-4">
              {links.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setIsOpen(false)}
                    className={`block py-3 text-gray-400 font-semibold hover:text-gray-200 transition-colors ${activeSection === link.id ? 'text-sky-700' : 'text-gray-400'}`}
                  >
                    {dictionary.header[link.id]}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </header>
  )
}