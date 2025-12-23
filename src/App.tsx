import Header from "@/Components/Header.tsx";
import Home from "@/Components/Home.tsx";
import AboutMe from "@/Components/AboutMe.tsx";
import MyWork from "@/Components/MyWork.tsx";
import FrequentlyAskedQuestions from "@/Components/FrequentlyAskedQuestions.tsx";


function App() {

  return (
      <div className={"h-full min-h-screen w-full overflow-x-hidden bg-gray-950"}>
          <Header/>
          <div className={"flex flex-col justify-start items-center h-full min-h-screen w-full bg-transparent gap-35"}>
              <Home/>
              <AboutMe/>
              <MyWork/>
              <FrequentlyAskedQuestions/>
          </div>
      </div>
  )
}

export default App
