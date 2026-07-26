import { Mail } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import alfonso from '../assets/alfonso-image.jpeg'

export default function Hero({lang}) {
  return (
    <section
      id="home"
      className="
        flex
        items-center
        justify-center
        relative
        pt-40
        pb-18
      "
    >
      <div className="w-full mx-auto">

        {/* Columns container */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">

          {/* Left column */}
          <div className="flex-1 text-gray-400">

            <p className="
              text-lg 
              md:text-xl 
              font-medium 
              mb-5
              text-center 
              lg:text-left
            ">
              {lang.hero.greeting}
            </p>

            <h1 className="
              font-hand
              text-5xl
              md:text-6xl
              text-text-h
              mb-8
              text-center
              lg:text-left
            ">
              {lang.hero.name}
            </h1>

            <h2 className="
              text-xl
              md:text-2xl
              font-semibold
              text-accent
              mb-6
              text-center
              lg:text-left
              text-sky-400
            ">
              {lang.hero.role}
            </h2>

            <p className="
              text-base
              md:text-lg
              leading-relaxed
              max-w-xl
              text-center
              lg:text-left
              mb-6
            ">
              {lang.hero.description}
            </p>

            {/* Buttons row */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 justify-center lg:justify-start">
              <a className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-base text-gray-200 transition-all duration-200 bg-sky-700 rounded-full py-2 px-6 font-semibold shrink-0" href="#projects">
                {lang.header.projects}
              </a>
              <a className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-base text-gray-200 transition-all duration-200 bg-white/5 backdrop-blur-sm rounded-full py-2 px-6 font-semibold shrink-0" href="#contact">
                {lang.hero.contact}
              </a>
            </div>

            {/* Social Media row*/}
            <div className="flex items-center gap-6 mt-6 justify-center lg:justify-start">
              <a
                href="mailto:alfonso.conejo@outlook.com"
                aria-label="Email"
                className="flex items-center justify-center w-10 h-10 rounded-full text-gray-400 hover:text-white hover:bg-sky-700 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>

              <a
                href="https://github.com/AlfonsoConejo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex items-center justify-center w-10 h-10 rounded-full text-gray-400 hover:text-white hover:bg-sky-700 transition-colors"
              >
                <FiGithub className="w-5 h-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/alfonso-conejo/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex items-center justify-center w-10 h-10 rounded-full text-gray-400 hover:text-white hover:bg-sky-700 transition-colors"
              >
              <FaLinkedinIn className="w-5 h-5" />
            </a>
            </div>
          </div>

          {/* Right column */}
          <div className="flex-1 flex items-center justify-center">
            <img
              src={alfonso}
              alt={"Alfonso Conejo"}
              className="w-72 md:w-96 lg:w-[28rem] object-cover"
              style={{
                borderRadius: "68% 32% 72% 28% / 26% 72% 28% 74%"
              }}
            />
          </div>

        </div>
      </div>
    </section>
  )
}