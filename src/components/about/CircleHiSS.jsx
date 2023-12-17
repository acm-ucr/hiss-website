import React from "react";
import circle from "../../../public/assets/circle.svg";
import Image from "next/image";
import HiSS from "./HiSS";

const CircleHiss = () => {
  return (
    <div className="w-full relative flex flex-row justify-center items-center">
      <Image
        src={circle}
        className="hidden xl:block -left-[30%] absolute scale-150"
      />
      <HiSS />
      <Image
        src={circle}
        className="hidden xl:block -right-[30%] absolute scale-150"
      />
    </div>
  );
};

export default CircleHiss;
