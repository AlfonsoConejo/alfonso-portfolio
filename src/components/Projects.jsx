import kitab_logo from '../assets/kitab-logo.png'
import kitabImage from '../assets/kitab_ss.png'
import { ExternalLink } from 'lucide-react'
import githubLogo from '../assets/stack/github.svg'
import SectionTitle from './SectionTitle'
import SectionDescription from './SectionDescription'
import SectionBody from './SectionBody'

export default function Projects({dictionary}) {
  return(
    <section
      id="projects"
      className="
        scroll-mt-24
        flex flex-col
        items-center
        justify-center
        relative
        pb-18
      "
    >
      <SectionTitle>
        {dictionary.projects.title}
      </SectionTitle>

      <SectionDescription>
        {dictionary.projects.description}
      </SectionDescription>

      <SectionBody>
        {/* Kitab Card */}
        <div className="w-full max-w-5xl mx-auto rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-8 shadow-lg">
          {/* Headaer */}
          <div className="flex flex-col gap-5 md:flex-row md:justify-between">
            {/* Title */}
            <div className="flex items-center justify-center gap-2">
              <div className="flex items-center justify-center size-11 rounded-lg bg-sky-900/30">
                <img src={kitab_logo} className="size-8 text-gray-200" />
              </div>
                      
              <h2 className="text-xl font-medium text-gray-200">
                {dictionary.projects.items.kitab.title} 
              </h2>
              
            </div>

            {/* Buttons */}
            <div className="flex flex-row items-center sm:items-start gap-4 justify-center lg:justify-start">
              <a className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-base text-gray-200 transition-all duration-200 bg-sky-600 hover:bg-sky-500 rounded-full py-2 px-5 md:px-6 font-semibold shrink-0"
                href="https://kitab-six.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Demo Kitab" 
              >
                <ExternalLink size={16}/>
                {dictionary.projects.items.kitab.demoButton}
              </a>
              <a className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-base text-gray-200 transition-all duration-200 bg-transparent border border-white/10 hover:bg-white/5 rounded-full py-2 px-5 md:px-6 font-semibold shrink-0"
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

          {/* Card Content */}
          <div
            className="
              grid grid-cols-1
              md:grid-cols-[320px_1fr]
              lg:grid-cols-[380px_1fr]
              gap-4 md:gap-8 pt-10 md:pt-8 items-start
            "
          >
            {/* Left column */}
            <div>
              <a 
                className='overflow-hidden'
                href="https://kitab-six.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Demo Kitab"
              >
                <img
                  src={kitabImage}
                  alt="Kitab"
                  className="rounded-xl border border-white/10 transition duration-300 hover:border-sky-500/40 cursor-pointer"
                />
              </a>
            </div>


            {/* Right column */}
            <div className='text-base md:text-lg'>
              <p className="text-gray-300">
                {dictionary.projects.items.kitab.description}
              </p>
              <h3
                className="
                mt-8
                mb-4

                text-sm
                uppercase
                font-bold
                tracking-wide

                text-gray-300
                "
              >
                {dictionary.projects.featuresTitle}
              </h3>

              <ul className='list-disc pl-5 space-y-3'>
                {dictionary.projects.items.kitab.features.map((feature) => (
                  <li className='text-gray-300'>
                    {feature}
                  </li>
                ))} 
              </ul>

              <div className="flex flex-wrap gap-2 mt-6">
                {dictionary.projects.items.kitab.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-slate-800/60 border border-white/10 px-3 py-1 text-sm text-gray-300 hover:border-sky-500 hover:text-sky-300 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
              
          </div>
        </div>
      </SectionBody>
    </section>
  )
}