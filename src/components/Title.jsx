import React from "react";

const Title = ({ title }) => {
  return (
    <div className="bg-red-200">
      <div className="bg-gradient-to-r from-hiss-blue to-hiss-purple mb-2.5 mt-14 h-5 w-1/4 rounded-r-full"></div>
      <div className="bg-gradient-to-r from-hiss-blue to-hiss-purple h-5 w-1/3 mb-2.5 rounded-r-full"></div>
      <div className="text-white text-right pr-7 pt-3 font-poppins font-bold text-3xl h-16 w-2/5 bg-gradient-to-r from-hiss-blue to-hiss-purple rounded-r-full">
        {title}
      </div>
    </div>
  );
};

export default Title;
