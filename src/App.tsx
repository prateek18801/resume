import { useEffect, useState } from "react";
import { AiFillPrinter } from "react-icons/ai";
import { MdOutlineModeEdit, MdOutlineEditOff } from "react-icons/md";
// import About from "./components/About";
import Achievements from "./components/Achievements";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Responsibilites from "./components/Responsibilities";

const App = () => {
    const [isContentEditable, setIsContentEditable] = useState<boolean>(false);
    useEffect(() => {
        document.designMode = isContentEditable ? "on" : "off";
    }, [isContentEditable]);

    const handlePrint = () => {
        document.title = `RES_PRATEEK_${new Date().toLocaleDateString("en-IN", {
            year: "2-digit",
            month: "2-digit",
            day: "2-digit"
        }).replace(/\//g, "")}`;
        window.print();
        document.title = "RESUME - Prateek Chaurasia";
    }

    return (
        <div className="flex justify-center bg-gray-900 print:bg-white">
            <div className="relative w-11/12 max-w-screen-lg p-8 m-4 leading-5 bg-white rounded-sm shadow-lg md:scale-100 scale print:m-0 print:p-0 print:w-auto print:shadow-none">
                <div className="absolute flex items-center gap-1 top-6 right-6 print:hidden">
                    <button
                        className={`p-1 text-lg transition-all rounded-full outline-none ${isContentEditable ? "bg-green-600 ring-1 ring-green-600 text-white" : "border-gray-400 text-gray-400 ring-1 ring-gray-400"}`}
                        onClick={() => { setIsContentEditable(prev => !prev) }}
                    >{isContentEditable ? <MdOutlineModeEdit /> : <MdOutlineEditOff />}</button>
                    <button
                        className="p-1 text-lg transition-all border rounded-full outline-none text-accent-color border-accent-color hover:bg-accent-color hover:text-white"
                        onClick={handlePrint}
                    ><AiFillPrinter /></button>
                </div>
                <Header />
                {/* <About /> */}
                <Skills />
                <Education />
                <Experience />
                <Projects />
                <Achievements />
                <Responsibilites />
            </div>
        </div>
    );
}

export default App;
