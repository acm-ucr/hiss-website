import React from "react";

const Header = ({ text }) => {
  return (
    <div className="flex-col items-center justify-center inline-flex">
      <p className="text-4xl p-0.5 font-bold text-transparent bg-clip-text bg-gradient-to-r from-hiss-blue to-hiss-purple">
        {text}
      </p>
      <div className="w-24 h-2.5 bg-gradient-to-r from-hiss-blue to-hiss-purple rounded-lg" />
    </div>
  );
};

export default Header;
