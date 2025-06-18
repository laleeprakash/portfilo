import { useNavigate } from "react-router-dom";
import "./App.css";
import hello from "./assets/hello.jpeg";
import { Typewriter } from "react-simple-typewriter";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";

function App() {
  return (
    <>
      {/* Header */}
      <div className="Header h-[5rem] bg-white flex items-center justify-between md:justify-around fixed top-0 left-0 right-0 z-50 shadow-md p-2 px-4">
        <div className="flex flex-row items-center gap-3 text-xl font-semibold">
          <div className="w-12 h-12 text-blue-500 flex items-center justify-center font-semibold 
                          border-4 border-black 
                          [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] 
                          hover:text-pink-900 hover:border-pink-900 
                          transition-all duration-300 ease-in-out">
            kp
          </div>
          <div className="transition-all duration-300 ease-in-out hover:text-gray-500">
            Laalee
          </div>
        </div>
        <div className="hidden md:flex gap-8 text-gray-500 text-lg font-semibold">
          <a href="/" className="relative pb-1 hover:text-blue-700 transition-all duration-300 cursor-pointer 
            before:content-[''] before:absolute before:bottom-0 before:left-0 
            before:w-full before:h-[2px] before:bg-blue-700 
            before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-transform before:duration-300">
            Home
          </a>
          <a href="#about" className="relative pb-1 hover:text-blue-700 transition-all duration-300 cursor-pointer 
            before:content-[''] before:absolute before:bottom-0 before:left-0 
            before:w-full before:h-[2px] before:bg-blue-700 
            before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-transform before:duration-300">
            About
          </a>
          <a href="#skills" className="relative pb-1 hover:text-blue-700 transition-all duration-300 cursor-pointer 
            before:content-[''] before:absolute before:bottom-0 before:left-0 
            before:w-full before:h-[2px] before:bg-blue-700 
            before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-transform before:duration-300">
            Skills
          </a>
          <a href="#education" className="relative pb-1 hover:text-blue-700 transition-all duration-300 cursor-pointer 
            before:content-[''] before:absolute before:bottom-0 before:left-0 
            before:w-full before:h-[2px] before:bg-blue-700 
            before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-transform before:duration-300">
            Education
          </a>
          <a href="#work" className="relative pb-1 hover:text-blue-700 transition-all duration-300 cursor-pointer 
            before:content-[''] before:absolute before:bottom-0 before:left-0 
            before:w-full before:h-[2px] before:bg-blue-700 
            before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-transform before:duration-300">
            Work
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <div className="Second_div flex flex-col md:flex-row justify-around items-center mt-[5rem] px-4 min-h-screen bg-slate-200 gap-8">
        <div className="left_div flex flex-col gap-4 items-start text-center md:text-left">
          <div className="text-3xl md:text-4xl font-bold text-gray-700">Hi There,</div>
          <div className="text-3xl md:text-4xl font-extrabold">
            I'm <span className="text-yellow-500">Kasala Laalee Prakash</span>
          </div>
          <div className="text-2xl md:text-3xl font-medium">
            <span className="text-black">I am Into</span>{" "}
            <span className="text-orange-500 font-bold">
              <Typewriter
                words={["Web Development", "Frontend Development", "Backend Development"]}
                loop={0}
                cursorStyle="|"
                deleteSpeed={60}
                delaySpeed={1500}
              />
            </span>
          </div>

          <div
            className="rounded-xl p-2 px-5 bg-blue-600 w-fit text-white flex flex-row gap-2 hover:gap-4 transition-all duration-300 ease-in cursor-pointer"
            onClick={() => {
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <button className="text-xl"> About Me </button>
            <img
              src="https://cdn-icons-png.flaticon.com/128/17805/17805208.png"
              className="w-8 md:w-10"
              alt="Arrow"
            />
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <button
              className="w-14 h-14 bg-blue-950 rounded-full flex justify-center items-center"
              onClick={() => window.open("https://www.linkedin.com/in/kasala-lalee-prakash-3a3207302", "_blank")}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/3128/3128329.png"
                className="w-8 h-8 bg-blue-400 rounded-full hover:bg-white transition-all duration-300 ease-linear"
                alt="LinkedIn"
              />
            </button>

            <button
              className="w-14 h-14 bg-blue-950 rounded-full flex justify-center items-center"
              onClick={() => window.open("https://github.com/laleeprakash", "_blank")}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/733/733609.png"
                className="w-8 h-8 bg-blue-600 rounded-full hover:bg-white transition-all duration-300 ease-linear"
                alt="GitHub"
              />
            </button>

            <button
              className="w-14 h-14 bg-blue-950 rounded-full flex justify-center items-center"
              onClick={() => window.open("https://www.instagram.com/___prakash_8/", "_blank")}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/174/174855.png"
                className="w-8 h-8 bg-blue-600 rounded-full hover:bg-white transition-all duration-300 ease-linear"
                alt="Instagram"
              />
            </button>

            <button
              className="w-14 h-14 bg-blue-950 rounded-full flex justify-center items-center"
              onClick={() => window.open("http://wa.me/8072747872?text=heelo", "_blank")}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/4423/4423697.png"
                className="w-8 h-8 bg-blue-600 rounded-full hover:bg-white transition-all duration-300 ease-linear"
                alt="WhatsApp"
              />
            </button>
          </div>
        </div>

        <div className="right_div bg-yellow-600 rounded-full flex justify-center items-center w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/4">
          <img src={hello} loading="lazy" alt="Hello" className="shadow-md rounded-full object-cover w-full" />
        </div>
      </div>

      {/* About */}
      <div className="pt-16 pb-10 px-4 bg-white" id="about">
        <About />
      </div>

      {/* Skills */}
      <div className="mt-10 py-10 px-4 bg-violet-700" id="skills">
        <Skills />
      </div>

      {/* Education */}
      <div className="py-10 px-4 bg-indigo-300" id="education">
        <Education />
      </div>

      {/* Work */}
      <div className="pb-10 px-4 h-[600px] pt-10 bg-indigo-950" id="work">
            
      </div>
    </>
  );
}

export default App;
