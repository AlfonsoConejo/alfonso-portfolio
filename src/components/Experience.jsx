import SectionTitle from "./SectionTitle"
import SectionDescription from "./SectionDescription"
import SectionBody from "./SectionBody"

export default function Experience({ dictionary }) {
  return (
    <section
      id="experience"
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
        {dictionary.experience.title}
      </SectionTitle>
      
      <SectionDescription>
        {dictionary.experience.subtitle}
      </SectionDescription>
      
      <SectionBody>
        {/* Experience Card */}
        <div
          className="
            w-full max-w-5xl mx-auto
            rounded-2xl
            border border-white/10
            bg-white/[0.04]
            backdrop-blur-md
            p-8
            shadow-lg
          "
        >
          {/* Header */}
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-medium text-gray-200">
              {dictionary.experience.items.easysoft.position}
            </h2>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <p className="text-lg text-sky-400">
                {dictionary.experience.items.easysoft.title}
              </p>

               <p className="text-sm md:text-base text-gray-400">
                Nov 2023 - Nov 2024
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="mt-8">

            <h3
              className="
                mb-4
                text-sm
                uppercase
                font-bold
                tracking-wide
                text-gray-300
              "
            >
              {dictionary.experience.achievementsTitle}
            </h3>

            <ul className="list-disc pl-5 space-y-3 text-base md:text-lg text-gray-300">
              {/* Achievements */
                dictionary.experience.items.easysoft.achievements.map((achievement) => (
                  <li className="list-disc pl-5 space-y-3 text-base md:text-lg text-gray-300">
                    {achievement}
                  </li>
                ))
              }
            </ul>

            <div className="flex flex-wrap gap-2 mt-6">
              {/* Technologies */
              dictionary.experience.items.easysoft.technologies.map((tech) => (
                <span
                  key={tech}
                  className="
                    rounded-full
                    bg-slate-800/60
                    border border-white/10
                    px-3
                    py-1
                    text-sm
                    text-gray-300
                    hover:border-sky-500
                    hover:text-sky-300
                    transition
                  "
                >
                  {tech}
                </span>
              ))
              }
            </div>
          </div>
        </div>
      </SectionBody>
      
    </section>
  )
}