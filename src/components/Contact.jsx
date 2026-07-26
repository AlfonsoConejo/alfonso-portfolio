import SectionTitle from "./SectionTitle";
import SectionDescription from "./SectionDescription";
import SectionBody from "./SectionBody";
import { Mail, Phone, File } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

export default function Contact({ dictionary }) {
  return (
    <section
      id="contact"
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
        {dictionary.contact.title}
      </SectionTitle>

      <SectionDescription>
        {dictionary.contact.subtitle}
      </SectionDescription>

      <SectionBody>
				{/* Contact Card */}
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
					
          <div className="flex flex-col gap-8 items-center">
						{/* Message*/}
            <div>
              <p className="text-base md:text-lg text-center max-w-2xl text-gray-300 leading-relaxed">
                {dictionary.contact.message}
              </p>
            </div>


            {/* Contact information grid*/}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

              <a
                href="mailto:alfonso.conejo@outlook.com"
                className="
                  flex items-center gap-4
                  p-4
                  rounded-xl
                  bg-white/[0.05]
                  hover:bg-white/[0.10]
                  transition
                "
              >
                <div className="text-2xl">
                  <Mail/>
                </div>

                <div>
                  <p className="text-sm text-gray-400">
                    {dictionary.contact.email}
                  </p>
                  <p className="text-white">
                    alfonso.conejo@outlook.com
                  </p>
                </div>
              </a>


              <a
                href="https://github.com/AlfonsoConejo"
                target="_blank"
                className="
                  flex items-center gap-4
                  p-4
                  rounded-xl
                  bg-white/[0.05]
                  hover:bg-white/[0.10]
                  transition
                "
              >
                <div className="text-2xl">
                  <FiGithub/>
                </div>

                <div>
                  <p className="text-sm text-gray-400">
                    GitHub
                  </p>
                  <p className="text-white">
                    https://github.com/AlfonsoConejo
                  </p>
                </div>
              </a>


              <a
                href="https://www.linkedin.com/in/alfonso-conejo/"
                target="_blank"
                className="
                  flex items-center gap-4
                  p-4
                  rounded-xl
                  bg-white/[0.05]
                  hover:bg-white/[0.10]
                  transition
                "
              >
                <div className="text-2xl">
                  <FaLinkedinIn/>
                </div>

                <div>
                  <p className="text-sm text-gray-400">
                    LinkedIn
                  </p>
                  <p className="text-white">
                    https://www.linkedin.com/in/alfonso-conejo/
                  </p>
                </div>
              </a>
							
							<a
								href="tel:+522222593196"
                className="
                  flex items-center gap-4
                  p-4
                  rounded-xl
                  bg-white/[0.05]
                  hover:bg-white/[0.10]
                  transition
                "
              >
                <div className="text-2xl">
                  <Phone/>
                </div>

                <div>
                  <p className="text-sm text-gray-400">
                    {dictionary.contact.phone}
                  </p>
                  <p className="text-white">
                    +52 222 259 3196
                  </p>
                </div>
              </a>

            </div>

						 {/* Download CV */}
						<div className="flex justify-center">
							<a
								href="./documents/CV_Alfonso_Conejo_FullStack.pdf"
								download
								className="
									flex items-center justify-center gap-3
									px-6 py-4
									rounded-xl
									bg-sky-600 hover:bg-sky-500
									transition
									text-gray-200
								"
							>
								<File />
								<span>{dictionary.contact.resume}</span>
							</a>
						</div>

          </div>
        </div>
      </SectionBody>
    </section>
  );
}