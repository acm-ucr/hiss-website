import React from "react";
import Image from "next/image";
import Landing from "./Landing";
import landing from "../../../public/assets/landing.svg";

const CircleLanding = () => {
  return (
    <div className="w-full relative h-[60vh] lg:h-fit">
      <Image src={landing} alt="landing" className="w-full" />
      <Landing />
    </div>
  );
};

export default CircleLanding;
