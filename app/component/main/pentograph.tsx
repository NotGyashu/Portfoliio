import react from "react";
import SpiderChart from "../sub/spiderChart";

const Pentograph: React.FC = () => {
  const skillData = [80, 70, 90, 85, 75]; // Example skill levels
  const skillLabels = ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"]; // Example skill labels
  return (
    <div className=" flex  flex-col gap-2 justify-center items-center w-full h-full">
      <h1 className="md:text-5xl sm:text-3xl text-xl pt-[1rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#fdfcfe] to-[#d8d2de]">
        Skills & implimentation
      </h1>
      <div className="h-[75%] w-[50%]">
        <SpiderChart data={skillData} labels={skillLabels} />
      </div>
    </div>
  );
};

export default Pentograph;
