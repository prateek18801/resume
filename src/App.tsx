import { useEffect, useState } from "react";
import { AiFillPrinter } from "react-icons/ai";
import { MdOutlineEditOff, MdOutlineModeEdit } from "react-icons/md";
// import About from "./components/About";
import Achievements from "./components/Achievements";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Header from "./components/Header";
// import Projects from "./components/Projects";
import Responsibilites from "./components/Responsibilities";
import Skills from "./components/Skills";

const App = () => {
  const [isContentEditable, setIsContentEditable] = useState<boolean>(false);
  useEffect(() => {
    document.designMode = isContentEditable ? "on" : "off";
  }, [isContentEditable]);

  const handlePrint = () => {
    document.title = `RESUME_PRATEEK_${new Date().toLocaleDateString("en-IN", {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit"
    }).replace(/\//g, "")}`;
    window.print();
    document.title = "RESUME - Prateek Chaurasia";
  }

  return (
    <div className="flex justify-center bg-gray-900 print:bg-white">
      <div className="relative bg-white shadow-lg print:shadow-none m-4 print:m-0 p-8 print:p-0 rounded-sm w-11/12 print:w-auto max-w-screen-lg leading-5 md:scale-100 scale">
        <div className="print:hidden top-6 right-6 absolute flex items-center gap-1">
          <button
            className={`p-1 text-lg transition-all rounded-full outline-none ${isContentEditable ? "bg-green-600 ring-1 ring-green-600 text-white" : "border-gray-400 text-gray-400 ring-1 ring-gray-400"}`}
            onClick={() => { setIsContentEditable(prev => !prev) }}
          >{isContentEditable ? <MdOutlineModeEdit /> : <MdOutlineEditOff />}</button>
          <button
            className="p-1 border border-accent-color rounded-full outline-none hover:text-white text-lg transition-all text-accent-color hover:bg-accent-color"
            onClick={handlePrint}
          ><AiFillPrinter /></button>
        </div>
        <Header />
        {/* <About /> */}
        <Experience />
        <Skills />
        {/* <Projects /> */}
        <Achievements />
        <Responsibilites />
        <Education />
      </div>
    </div>
  );
}

export default App;
