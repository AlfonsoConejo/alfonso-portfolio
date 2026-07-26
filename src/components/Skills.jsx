import stack from "../data/stack";
import SectionTitle from "./SectionTitle";
import SectionDescription from "./SectionDescription";
import SectionBody from "./SectionBody";

export default function Skills({ dictionary }) {
  return (
    <section
      id="skills"
      className="
        flex flex-col
        items-center
        justify-center
        relative
        pt-20
        pb-12
      "
    >
      <SectionTitle>
        {dictionary.skills.title}
      </SectionTitle>

      <SectionDescription>
        {dictionary.skills.description}
      </SectionDescription>

      <SectionBody>
        {/* Skills container */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {
            /* Skills type */
            Object.entries(stack).map(([category, data]) => {
              const Icon = data.icon;

              return(
                <div 
                  className=" bg-white/5 backdrop-blur-sm flex flex-col gap-6 rounded-xl px-6 py-8 h-full border border-white/10 bg-white/[0.04] overflow-hidden"
                  key={category}
                >
                  <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center size-11 rounded-lg bg-sky-700">
                      <Icon className="size-8 text-gray-200" />
                    </div>
                    
                    <h2 className="text-xl font-medium text-gray-200">
                    {dictionary.skills[category]}
                  </h2>
                  </div>                
                  <ul className="flex flex-wrap gap-3 sm:gap-4 items-start">
                    {
                      Object.values(data.technologies).map((tech) => (
                        <li
                          className="
                            flex
                            items-center
                            gap-2
                            px-3
                            sm:px-4
                            py-1
                            rounded-full
                            border
                            border-gray-500/50
                            text-sm
                            sm:text-base
                            whitespace-nowrap
                            transition
                            hover:border-gray-400
                          "
                          key={tech.name}
                        >
                          <img
                            className="size-5 rounded-sm"
                            src={tech.icon}
                            alt={tech.name}
                          />

                          <p>
                            {tech.name}
                          </p>
                        </li>
                      ))
                    }
                  </ul>

                </div>
              )
            })
          }
        </div>
      </SectionBody>
    </section>
  );
}