import React from "react";
import Link from "next/link";

const Button = ({ text, link, target }) => {
  return (
    <Link
      className="bg-hiss-yellow hover:scale-105 duration-300 inline-block text-white font-bold py-2 px-7 text-lg md:text-3xl no-underline rounded-full "
      href={link}
      target={target}
    >
      {text}
    </Link>
  );
};

export default Button;
