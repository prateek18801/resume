// import About from "./components/About";
import Achievements from "./components/Achievements";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
    return (
        <div className='flex justify-center bg-gray-900 print:bg-white'>
            <div className='w-11/12 max-w-screen-lg p-8 m-4 leading-5 bg-white rounded-sm shadow-lg md:scale-100 scale print:m-0 print:p-0 print:w-auto print:shadow-none'>
                <Header />
                <Skills />
                {/* <About /> */}
                <Projects />
                <Experience />
                <Education />
                <Achievements />
            </div>
        </div>
    );
}

export default App;
