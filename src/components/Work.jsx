import { FaGlobe, FaGithub } from "react-icons/fa";
import stone_paper from "../assets/stone_paper.jpg";
import simple_login_page from "../assets/simple_login_page.jpg";
import health_care_project from "../assets/health_care_poject.jpg";
import amazon_clone from "../assets/amazon_clone.jpg";
import final_year_project from "../assets/final_year_project.jpg";
import appointment from "../assets/appointment.jpg";
import flipkart from "../assets/flipkart_clone.jpg"
import portfilo from "../assets/portfilo.jpg"
function Work() {
  const projects = [
    {
      name: "Stone Paper Scissor",
      image: stone_paper,
      description:
        "A fun mini-game where users challenge a computer in the classic stone-paper-scissor battle. Features clean UI and smart logic.",
      website: "https://laleeprakash.github.io/stonepaperscirssor/",
      github: "https://github.com/laleeprakash/stonepaperscirssor",
    },
    {
      name: "Simple Login Page",
      image: simple_login_page,
      description:
        "A simple, clean login page UI with validation and responsiveness.",
      website: "https://loginpage-pearl.vercel.app/",
      github: "https://github.com/laleeprakash/loginpage",
    },
    {
      name: "Health Care Project",
      image: health_care_project,
      description:
        "Healthcare-related project with modern UI and basic functionality.",
      website: "https://healthcare-project-gules.vercel.app/",
      github: "https://github.com/laleeprakash/healthcare_project",
    },
    {
      name: "Amazon Static Page",
      image: amazon_clone,
      description: "A static clone of Amazon's homepage with HTML/CSS.",
      website: "https://laleeprakash.github.io/amazonclone/",
      github: "https://github.com/laleeprakash/healthcare_project",
    },
    {
      name: "Final Year Project",
      image: final_year_project,
      description: "A full-stack final year restaurant ordering application.",
      github: "https://github.com/laleeprakash/dine",
    },
    {
      name: "Appointment Booking App",
      image: appointment,
      description: "A full-stack appointment management system using MERN.",
      github: "https://github.com/laleeprakash/appointment",
    },
    {
      name : "Flipkart static page",
      image:flipkart,
      description:"A static flipkart page using html and css",
      website:"https://laleeprakash.github.io/flipkart_clone/",
      github:"https://github.com/laleeprakash/flipkart_clone"
    },
     {
      name : "Portfilo",
      image:portfilo,
      description:"A Portfilo Project using HTML , REACT JS AND TAILWIND CSS",
      website:"https://portfilo-amber.vercel.app/",
      github:"https://github.com/laleeprakash/portfilo"
    }
  ];

  return (
    <div className="py-10 bg-gray-900">
      {/* Header */}
      <div className="flex flex-row gap-4 font-bold text-4xl justify-center items-center mb-10">
        <img
          src="https://cdn-icons-png.flaticon.com/128/6675/6675267.png"
          className="w-12 bg-white p-1 rounded-full"
          alt="project-icon"
        />
        <p className="text-white">Project</p>
        <span className="text-yellow-400">Made</span>
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-6 md:px-12">
        {projects.map(({ name, image, description, website, github }, index) => (
          <div
            key={index}
            className="w-full rounded-xl shadow-lg overflow-hidden border border-yellow-400 bg-gray-800 group"
          >
            {/* Image with hoverable icons */}
            <div className="relative">
              <img src={image} alt={name} className="w-full h-48 object-cover" />

              {/* Icons appear on hover */}
              <div className="absolute inset-0 flex justify-between items-start px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {website && (
                  <a
                    href={website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow-400 p-2 rounded-full text-black hover:bg-yellow-500 transition"
                    title="Live Website"
                  >
                    <FaGlobe size={20} />
                  </a>
                )}
                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow-400 p-2 rounded-full text-black hover:bg-yellow-500 transition"
                    title="GitHub Repository"
                  >
                    <FaGithub size={20} />
                  </a>
                )}
              </div>
            </div>

            {/* Project Details */}
            <h3 className="text-xl font-semibold text-yellow-400 px-4 py-2">
              {name}
            </h3>
            <p className="text-white px-4 pb-4">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;
