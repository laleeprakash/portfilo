function Skills() {
  const skillList = [
    { name: "ReactJs", icon: "https://cdn-icons-png.flaticon.com/128/1126/1126012.png" },
    { name: "ExpressJs", icon: "https://cdn-icons-png.flaticon.com/128/1126/1126012.png" },
    { name: "NodeJs", icon: "https://cdn-icons-png.flaticon.com/128/5968/5968322.png" },
    { name: "Tailwind CSS", icon: "https://cdn-icons-png.flaticon.com/128/732/732190.png" },
    { name: "MongoDB", icon: "https://cdn-icons-png.flaticon.com/128/919/919836.png" },
    { name: "HTML", icon: "https://cdn-icons-png.flaticon.com/128/732/732212.png" },
    { name: "CSS", icon: "https://cdn-icons-png.flaticon.com/128/732/732190.png" },
    { name: "JavaScript", icon: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png" },
    { name: "C++", icon: "https://cdn-icons-png.flaticon.com/128/6132/6132222.png" },
    { name: "C", icon: "https://cdn-icons-png.flaticon.com/128/6132/6132221.png" },
    { name: "Python", icon: "https://cdn-icons-png.flaticon.com/128/5968/5968350.png" },
    { name: "SQL", icon: "https://cdn-icons-png.flaticon.com/128/4248/4248443.png" },
    { name: "PostgreSQL", icon: "https://cdn-icons-png.flaticon.com/128/5968/5968342.png" },
    { name: "GitHub", icon: "https://cdn-icons-png.flaticon.com/128/733/733553.png" },
    { name: "AWS", icon: "https://cdn-icons-png.flaticon.com/128/873/873120.png" },
  ];

  return (
    <div className="pt-14 pb-10 flex flex-col items-center gap-8 text-white">
      {/* Header */}
      <div className="flex flex-row justify-center items-center text-center font-extrabold text-2xl sm:text-3xl gap-3">
        <img
          src="https://cdn-icons-png.flaticon.com/128/3474/3474360.png"
          alt="Skills icon"
          className="w-10 sm:w-12"
        />
        <h2>
          <span>Skills & </span>
          <span className="text-yellow-400">Ability</span>
        </h2>
      </div>

      {/* Skills Grid */}
      <div className="w-11/12 md:w-4/5 bg-violet-900 rounded-lg p-4 sm:p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
        {skillList.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-violet-950 p-3 sm:p-4 rounded-xl cursor-pointer hover:bg-black transition-all duration-500"
          >
            <img
              src={skill.icon}
              alt={`${skill.name} icon`}
              className="w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 object-contain mb-2"
            />
            <p className="text-center text-sm sm:text-base">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
