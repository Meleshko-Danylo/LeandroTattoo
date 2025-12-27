import Header from "@/Components/Header.tsx";
import Home from "@/Components/Home.tsx";
import AboutMe from "@/Components/AboutMe.tsx";
import FAQ from "@/Components/FAQ.tsx";
import React, {useEffect, useState} from "react";
import ProjectsBoard from "@/Components/ProjectsBoard.tsx";
import ContactMe from "@/Components/ContactMe.tsx";
import {ToastContainer} from "react-toastify";

type LanguageContextType = {
    ln: string;
    setLn: React.Dispatch<React.SetStateAction<string>>;
};

const LanguageContext = React.createContext<LanguageContextType|undefined>(undefined);

export const useLanguageContext = (): any => {
    const context = React.useContext(LanguageContext);
    if (context === undefined) throw new Error('useLanguage must be used within a LanguageProvider');
    return context;
}

function App() {
    const [ln, setLn] = useState<string>("en");
    
    useEffect(() => {
        const elements = Array.from(document.querySelectorAll(".appear"));

        const onScroll = () => {
            const triggerY = window.innerHeight * 0.9;

            elements.forEach(el => {
                const top = el.getBoundingClientRect().top;
                const bottom = el.getBoundingClientRect().bottom;

                const isVisible = top < triggerY && bottom > window.innerHeight * 0.2;

                el.classList.toggle("is-visible", isVisible);
            });
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });

        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    
  return (
      <div className={"h-full min-h-screen w-full overflow-hidden bg-gray-950"}>
          <LanguageContext.Provider value={{ ln, setLn }}>
              <Header/>
              <div id={"content"} className={"flex flex-col justify-start items-center h-full min-h-screen w-full bg-transparent gap-[8vh]"}>
                  <Home/>
                  <AboutMe/>
                  <ProjectsBoard/>
                  <ContactMe/>
                  <FAQ/>
              </div>
              <ToastContainer autoClose={2000} newestOnTop={true} theme={"light"} limit={4} pauseOnHover={false}/>
          </LanguageContext.Provider>
      </div>
  )
}

export default App
