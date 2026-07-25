import { useState, useEffect } from 'react'
import translations from './data/translations.js';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    console.log(sections);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(
            entry.target.id,
            entry.isIntersecting
          );

          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);
  
  const [language, setLanguage] = useState("en");
  const dictionary = translations[language];

  return (
    <div className='min-h-screen bg-background relative overflow-hidden'>

      <Header 
        dictionary={dictionary}
        language={language}
        setLanguage={setLanguage}
        activeSection={activeSection}/> 

      <div className='w-full max-w-6xl mx-auto px-4'>
        <Hero lang={dictionary}/> 
        <Skills dictionary={dictionary}/> 
        <Projects dictionary={dictionary}/> 
      </div>

      
      
    </div>
  )
}

export default App
