import Header from "@/Components/Header.tsx";
import Home from "@/Components/Home.tsx";
import AboutMe from "@/Components/AboutMe.tsx";
import FrequentlyAskedQuestions from "@/Components/FrequentlyAskedQuestions.tsx";
import {useEffect} from "react";
import ProjectsBoard from "@/Components/ProjectsBoard.tsx";
import ContactMe from "@/Components/ContactMe.tsx";


function App() {
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
      <div className={"h-full min-h-screen w-full overflow-x-hidden bg-gray-950"}>
          <Header/>
          <div id={"content"} className={"flex flex-col justify-start items-center h-full min-h-screen w-full bg-transparent gap-[8vh]"}>
              <Home/>
              <AboutMe/>
              <ProjectsBoard/>
              <ContactMe/>
              <FrequentlyAskedQuestions/>
          </div>
      </div>
  )
}

export default App
