import React from "react";
import Link from "next/link";

const Button = ({ text }) => {
  return (
    <Link
      className="bg-hiss-yellow text-white font-bold py-2 px-7 text-2xl no-underline rounded-full "
      href="google.com"
    >
      {text}
    </Link>
  );
};

export default Button;
