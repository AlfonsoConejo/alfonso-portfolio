import { MessageSquare } from "lucide-react";

const translations = {
  es: {
    header: {
      home: "Inicio",
      skills: "Habilidades",
      experience: "Experiencia",
      projects: "Proyectos",
      contact: "Contacto",
      language: "Idioma"
    },
    hero: {
      greeting: "Hola, soy",
      name: "Alfonso Conejo",
      role: "Desarrollador full stack",
      description: "Soy un ingeniero de software de México enfocado en crear aplicaciones útiles y confiables. Me gusta construir experiencias completas, desde interfaces intuitivas hasta sistemas backend escalables, desarrollando APIs seguras, diseños responsivos y soluciones que aporten valor real a los usuarios.",
      contact: "Contáctame",
    },
    skills: {
      title: "Habilidades",
      description: 'Esta es la colección de tecnologías y herramientas que utilizo para crear aplicaciones web modernas.',
      frontend: "Frontend",
      backend: "Backend",
      databases: "Bases de datos",
      devops: "DevOps",
      deployment: "Despliegue y Nube",
    },
    experience: {
      title: "Experiencia",
      subtitle: "Mi trayectoria como desarrollador de software.",
      achievementsTitle: "Logros",

      items: {
        easysoft: {
          title: "Easysoft",
          position: "Desarrollador Full Stack",
          achievements: [
            "Optimicé la sincronización de datos entre cliente y servidor mediante estrategias de transferencia selectiva.",
            "Rediseñé y normalicé estructuras de bases de datos SQL para mejorar la integridad de los datos y simplificar consultas complejas.",
            "Implementé un sistema seguro de recuperación de contraseña utilizando URLs cifradas con expiración temporal.",
            "Integré flujos de actualización asíncrona mediante AJAX, eliminando recargas completas de página y mejorando el rendimiento."
          ],
          technologies: [
            "Java",
            "JavaScript",
            "PHP",
            "AJAX"
          ]
        },
      }
    },
    projects:{
      title: 'Proyectos',
      description: 'Una selección de proyectos donde he aplicado mis conocimientos creando aplicaciones completas.',
      featuresTitle: "Características",

      items: {
        kitab: {
          title: "Kitab - Agenda Escolar",
          description: "Kitab es una agenda escolar diseñada para ayudar a los estudiantes a organizar su vida académica. Permite gestionar periodos académicos, donde cada uno incluye materias, horarios de clase, tareas, vacaciones y otros recursos académicos.",
          technologies: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS", "JWT", "bcrypt"],
          features: [
            "Autenticación con JWT mediante cookies HTTP-Only y sistema de refresh tokens almacenados en PostgreSQL.",
            "Gestión de periodos académicos, mostrando únicamente la información del periodo seleccionado por el usuario.",
            "Administración de materias y horarios de clase con personalización mediante colores."
          ],
          demoButton: "Demo",
          githubButton: "GitHub",
        }
      }
    },
    contact: {
      title: "Contáctame",
      subtitle: "Construyamos algo juntos.",
      message: "Actualmente estoy en búsqueda de nuevas oportunidades. Si te interesa colaborar, tienes alguna pregunta o simplemente quieres saludar, no dudes en ponerte en contacto conmigo.",
      email: "Correo",
      github: "GitHub",
      linkedin: "LinkedIn",
      phone: "Teléfono",
      resume: "Descargar CV"
    }
  },

  en: {
    header: {
      home: "Home",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
      language: "Language"
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Alfonso Conejo",
      role: "Full-stack developer",
      description: "I am a software engineer from Mexico focused on building useful and reliable applications. I enjoy creating complete experiences, from intuitive interfaces to scalable backend systems, developing secure APIs, responsive designs, and solutions that deliver real value to users.",
      contact: "Contact me",
    },
    skills: {
      title: 'Skills',
      description: 'This is the collection of technologies and tools I use to build modern web applications.',
      frontend: "Frontend",
      backend: "Backend",
      databases: "Databases",
      devops: "DevOps",
      deployment: "Deployment & Cloud",
    },
    experience: {
      title: "Experience",
      subtitle: "My journey as a software developer.",
      achievementsTitle: "Achievements",

      items: {
        easysoft: {
          title: "Easysoft",
          position: "Full Stack Developer",
          achievements: [
            "Optimized local-server data synchronization by implementing selective data transfer strategies.",
            "Redesigned and normalized SQL database structures to improve data integrity and simplify complex queries.",
            "Implemented a secure password recovery system with encrypted and time-limited URLs.",
            "Integrated asynchronous update flows using AJAX, eliminating full page reloads and improving performance."
          ],
          technologies: [
            "Java",
            "JavaScript",
            "PHP",
            "AJAX"
          ]
        },
      }
    },
    projects:{
      title: 'Projects',
      description: 'A selection of projects where I have applied my skills by building complete applications.',
      featuresTitle: "Features",

      items: {
        kitab: {
          title: "Kitab - Student planner",
          description: "Kitab is a student planner designed to help students organize their academic life. It allows users to manage academic periods, each containing subjects, class schedules, assignments, vacations, and other academic resources.",
          technologies: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS", "JWT", "bcrypt"],
          features: [
            "JWT authentication using HTTP-only cookies with a refresh token system stored in PostgreSQL.",
            "Academic period management, displaying only the information for the user’s selected period.",
            "Subject and class schedule management with customizable color labels."
          ],
          demoButton: "Demo",
          githubButton: "GitHub",
        }
      }
    },
    contact: {
      title: "Contact Me",
      subtitle: "Let's build something together.",
      message: "I'm currently looking for new opportunities. Feel free to reach out if you'd like to collaborate, have a question, or just say hello.",
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
      phone: "Phone",
      resume: "Download Resume"
    }
  }
};

export default translations;