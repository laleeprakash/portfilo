import srm_image from "../assets/srm_college.jpeg";
import Nri from "../assets/Nri.jpeg";
import ssvm from "../assets/ssvm.jpg";

function Education() {
  return (
    <div className="px-4 py-8">
      {/* Header */}
      <div className="flex flex-col justify-center items-center gap-2 text-center">
        <div className="flex flex-row justify-center items-center gap-4">
          <img
            src="https://cdn-icons-png.flaticon.com/128/5404/5404967.png"
            className="w-12 sm:w-16"
            alt="Education Icon"
          />
          <h2 className="font-extrabold text-2xl sm:text-3xl">
            <span>My </span>
            <span className="text-violet-800">Education.</span>
          </h2>
        </div>
        <p className="text-black text-sm sm:text-base max-w-xl">
          Education is not the learning of facts, but the training of the mind to think.
        </p>
      </div>

      {/* Education Cards */}
      <div className="w-full flex flex-col justify-center items-center pt-7 gap-6">
        {/* Card 1 */}
        <div className="w-full max-w-5xl bg-white rounded-lg shadow-md p-4">
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center">
            <img src={srm_image} className="rounded-lg w-full md:w-56 h-40 object-cover" alt="SRM" />
            <div className="flex flex-col text-lg sm:text-xl gap-2 sm:gap-3 text-center md:text-left">
              <p className="font-bold text-sky-600">Bachelor of Computer Applications</p>
              <p className="text-gray-800">SRM Institute of Science and Technology</p>
              <p className="font-bold text-green-700">2022 - 2025 | Completed</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full max-w-5xl bg-white rounded-lg shadow-md p-4">
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center">
            <img src={Nri} className="rounded-lg w-full md:w-56 h-40 object-contain" alt="NRI College" />
            <div className="flex flex-col text-lg sm:text-xl gap-2 sm:gap-3 text-center md:text-left">
              <p className="font-bold text-sky-600">Mathematics, Physics, and Chemistry (MPC)</p>
              <p className="text-gray-800">NRI Co-educational Junior College</p>
              <p className="font-bold text-green-700">2020 - 2022 | Completed</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full max-w-5xl bg-white rounded-lg shadow-md p-4">
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center">
            <img src={ssvm} className="rounded-lg w-full md:w-56 h-40 object-cover" alt="SSVM" />
            <div className="flex flex-col text-lg sm:text-xl gap-2 sm:gap-3 text-center md:text-left">
              <p className="font-bold text-sky-600">Secondary School Certificate</p>
              <p className="text-gray-800">Sri Saraswathi Vignana Mandir</p>
              <p className="font-bold text-green-700">2019 - 2020 | Completed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
