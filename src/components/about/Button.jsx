import React from "react";
import Link from "next/link";

const Button = ({ text, link }) => {
  return (
    <Link
      className="bg-hiss-yellow hover:scale-105 duration-300 text-white font-bold py-2 px-7 text-3xl no-underline rounded-full "
      href={link}
    >
      {text}
    </Link>
  );
};

export default Button;
