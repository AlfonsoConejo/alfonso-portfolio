import kitab_logo from '../assets/kitab-logo.png'
import kitabImage from '../assets/kitab_ss.png'
import { ExternalLink } from 'lucide-react'
import githubLogo from '../assets/stack/github.svg'

export default function Projects({dictionary}) {
  return(
    <section
      id="projects"
      className="
        flex flex-col
        items-center
        justify-center
        relative
        pt-20
        pb-12
      "
    >
      {/* Skills title */}
      <h1
        className="
          text-4xl
          sm:text-5xl
          lg:text-6xl
          font-semibold
          text-gray-400
          text-center
        "
      >
        {dictionary.projects.title}
      </h1>

      {/* Paragraph */}
      <p
        className="
          mt-4
          max-w-5xl
          mx-auto
          text-center
          text-xl
          lg:text-2xl
          text-gray-400
        "
      >
        {dictionary.projects.description}
      </p>

      {/* Kitab Card */}
      <div className="w-full max-w-5xl bg-white/5 backdrop-blur-sm mt-6 rounded-xl px-6 py-8">
        {/* Headaer */}
        <div className="flex justify-between">
          {/* Title */}
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center size-11 rounded-lg bg-gray-700">
              <img src={kitab_logo} className="size-8 text-gray-200" />
            </div>
                    
            <h2 className="text-xl font-medium text-gray-200">
              {dictionary.projects.items.kitab.title} 
            </h2>
            
          </div>

          {/* Buttons */}
          <div className="flex flex-row items-center sm:items-start gap-4 justify-center lg:justify-start">
            <a className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-base text-gray-200 transition-all duration-200 bg-sky-700 rounded-full py-2 px-6 font-semibold shrink-0"
              href="https://kitab-six.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Demo Kitab" 
            >
              <ExternalLink size={16}/>
              {dictionary.projects.items.kitab.demoButton}
            </a>
            <a className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-base text-gray-200 transition-all duration-200 bg-zinc-900 backdrop-blur-sm rounded-full py-2 px-6 font-semibold shrink-0"
              href="https://github.com/AlfonsoConejo/kitab"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"  
            >
              <img className="size-4" src={githubLogo}/>
              {dictionary.projects.items.kitab.githubButton}
            </a>
          </div>
        </div>

        {/* Content */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-[280px_1fr]
            gap-8
            pt-6
            items-start
          "
        >
          {/* Left column */}
          <div>
            <img
              src={kitabImage}
              alt="Kitab"
              className="rounded-xl"
            />

            <div className="flex flex-wrap gap-2 mt-4">
              {/* technologies */}
            </div>
          </div>


          {/* Right column */}
          <div>
            <p className="mt-4 text-gray-400">
              Description...
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}