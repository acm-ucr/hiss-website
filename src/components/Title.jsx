import React from "react";

const Title = ({ title }) => {
  return (
    <div>
      <div className="bg-gradient-to-r from-hiss-blue to-hiss-purple mb-2.5 mt-14 rounded-r-full h-5 sm:h-5 w-1/4 sm:w-1/4 "></div>
      <div className="bg-gradient-to-r from-hiss-blue to-hiss-purple mb-2.5 rounded-r-full h-5 sm:h-5 w-2/5 sm:w-1/3"></div>
      <div
        className="text-white text-right font-poppins font-bold bg-gradient-to-r from-hiss-blue to-hiss-purple rounded-r-full 
        h-10 text-2xl sm:text-3xl sm:h-14 w-7/12 sm:w-2/5 pr-6 sm:pr-12 flex items-center justify-end"
      >
        {title}
      </div>
    </div>
  );
};

export default Title;
