import React from "react";
import edulogo from "../components/pics/education-1.png";

const Education = () => {
  return (
    <div className="space-y-3">
      <h2 className="text-xl font-bold text-red-700">Education</h2>
      <div className="flex items-center gap-5">
        <div className="flex items-center justify-between flex-1">
          <div className="flex flex-col">
            <h3 className="font-semibold ">
              I am a 3rd year BSIT student at Filamer Christian University
              (FCU). I am learning about computers, programming, and technology.
              This helps me improve my skills in design and development.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
