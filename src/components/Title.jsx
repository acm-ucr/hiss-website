import React from "react";

const Title = ({ title }) => {
  return (
    <div>
      <div className="bg-gradient-to-r from-hiss-blue to-hiss-purple mb-2.5 mt-14 rounded-r-full h-3 sm:h-5 w-1/4 "></div>
      <div className="bg-gradient-to-r from-hiss-blue to-hiss-purple mb-2.5 rounded-r-full h-3 sm:h-5 w-1/3"></div>
      <div
        className="text-white text-right  font-poppins font-bold bg-gradient-to-r from-hiss-blue to-hiss-purple rounded-r-full 
      text-sm h-8 sm:text-3xl sm:h-16 w-2/5 pr-5 sm:pr-7 pt-1"
      >
        {title}
      </div>
    </div>
  );
};

export default Title;
