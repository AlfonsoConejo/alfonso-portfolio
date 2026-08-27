import javascript from '../assets/stack/javascript.svg'
import typescript from '../assets/stack/typescript.svg'
import react from '../assets/stack/react.svg'
import tailwind from '../assets/stack/tailwind.svg'
import node from '../assets/stack/nodejs.svg'
import express from '../assets/stack/express.svg'
import php from '../assets/stack/php.svg'
import postgre from '../assets/stack/postgre.svg'
import sqlserver from '../assets/stack/sqlserver.svg'
import vitest from '../assets/stack/vitest.svg'
import mongo from '../assets/stack/mongo.svg'
import git from '../assets/stack/git.svg'
import github from '../assets/stack/github.svg'
import vercel from '../assets/stack/vercel.svg'
import render from '../assets/stack/render.svg'
import neon from '../assets/stack/neon.svg'
import { Monitor, Server, Database, Cloud, Rocket, FlaskConical } from 'lucide-react'

const stack = {
  frontend: {
    icon: Monitor,
    technologies: {
      javascript: {
        name: 'JavaScript', icon: javascript
      },
      typescript: {
        name:"TypeScript", icon: typescript
      },
      react: {
        name: 'React.js' , icon: react
      },
      tailwind: {
        name: 'Tailwind CSS', icon: tailwind
      }
    }
    
  },

  backend: {
    icon: Server,
    technologies: {
      node: {
        name: 'Node.js', icon: node
      },
      express: {
        name: 'Express.js', icon: express
      },
      php: {
        name: 'PHP', icon: php
      }
    }
    
  },

  databases: {
    icon: Database,
    technologies: {
      mongo: {
        name: 'MongoDB', icon: mongo
      },
      postgre: {
        name: 'PostgreSQL', icon: postgre
      },
      sqlserver: {
        name: 'SQL Server', icon: sqlserver
      }
    }
  },

  testing: {
    icon: FlaskConical,
    technologies: {
      vitest: {
        name: 'Vitest', icon: vitest
      }
    }
  },

  devops: {
    icon: Cloud,
    technologies: {
      git: {
        name: 'Git', icon: git
      },
      github: {
        name: 'GitHub', icon: github
      }
    }
  },

  deployment: {
    icon: Rocket,
    technologies: {
      vercel: {
        name: 'Vercel', icon: vercel
      },
      render:{
        name: 'Render', icon: render
      },
      neon:{
        name: 'Neon', icon: neon
      }
    }
  }
};

export default stack;