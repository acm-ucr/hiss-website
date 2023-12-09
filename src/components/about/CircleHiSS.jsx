import React from "react";
import circle from "../../../public/assets/circle.svg";
import Image from "next/image";
import HiSS from "./HiSS";

const CircleHiss = () => {
  return (
    <div className="w-full relative flex flex-col justify-center items-center">
      <HiSS />
      <div className="absolute xl:translate-y-[15%] -right-[45%] scale-0 md:scale-150">
        <Image src={circle} alt="landing" width={800} height={800} />
      </div>
      <div className="absolute xl:translate-y-[15%] -left-[45%] scale-0 md:scale-150">
        <Image src={circle} alt="landing" width={800} height={800} />
      </div>
    </div>
  );
};

export default CircleHiss;
