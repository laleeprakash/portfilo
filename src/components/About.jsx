import hello from "../assets/2521.jpg";

function About() {
  return (
    <div className="pt-10 px-4">
      {/* Title */}
      <div className="flex flex-row justify-center items-center gap-3 mb-6">
        <img
          src="https://cdn-icons-png.flaticon.com/128/1077/1077114.png"
          alt="About Icon"
          className="w-10"
        />
        <h2 className="text-3xl font-bold text-center">
          <span>About</span>
          <span className="text-purple-800"> Me</span>
        </h2>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Profile Picture */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src={hello}
            alt="Profile"
            className="rounded-lg shadow-lg w-64 sm:w-72 md:w-80 object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-2/3 text-gray-700 text-md leading-relaxed flex flex-col gap-4 text-left">
          <div>
            <p>
              Hello! I'm <strong>Kasala Laalee Prakash</strong>, a passionate
              software developer focused on building impactful digital experiences.
              I specialize in full-stack development with a strong focus on clean
              UI, responsive design, and modern technologies like React, Tailwind,
              Node.js, and more.
            </p>
            <p className="mt-4">
              I'm constantly learning and exploring new ways to grow both as a
              developer and a creative problem solver. I enjoy collaborating on
              projects, solving real-world challenges, and contributing to
              open-source when I can.
            </p>
          </div>

          <div className="flex flex-col gap-4 mt-4">
            <div>
              <p className="font-bold">
                <span className="text-blue-600 font-extrabold">Email: </span>
                kasalalaleeprakash@gmail.com
              </p>
              <p className="font-bold">
                <span className="text-blue-600 font-extrabold">Place: </span>
                Chennai - 600039
              </p>
            </div>

            <div
              className="w-fit p-2 bg-violet-950 rounded-lg text-white flex items-center gap-2 hover:bg-violet-800 hover:gap-5 transition-all duration-500 cursor-pointer"
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1GvYIKU9mCXbilS2ZXhUdegPk8907gqCn/view?usp=drive_link",
                  "_blank"
                );
              }}
            >
              <span>Resume</span>
              <span>&gt;</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
