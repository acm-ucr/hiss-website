import React from "react";

const Header = ({ text }) => {
  return (
    <div className="flex-col items-center justify-center inline-flex gap-3">
      <div className="text-2xl md:text-4xl p-1 font-bold text-transparent bg-clip-text bg-gradient-to-r from-hiss-blue to-hiss-purple">
        {text}
      </div>
      <div className="w-24 h-1.5 md:h-2.5 bg-gradient-to-r from-hiss-blue to-hiss-purple rounded-lg" />
    </div>
  );
};

export default Header;
