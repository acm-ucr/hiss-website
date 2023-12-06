import React from "react";
import circle from "../../../public/assets/circle.svg";
import pie from "../../../public/assets/pie.svg";
import Image from "next/image";
import Landing from "./Landing";
import landing from "../../../public/assets/landing.svg";

const CircleLanding = () => {
  return (
    <div className="w-full relative h-[90vh] lg:h-[40vh] xl:h-[110vh]">
      <div className="relative xl:-translate-y-[15%] z-1 hidden lg:block">
        <Image src={landing} alt="landing" width={4000} height={4000} />
      </div>
      <div className="absolute lg:hidden z-2 top-0 md:scale-125 right-[10%] -translate-y-[30%] translate-x-[30%] sm:translate-x-[40%]">
        <Image src={circle} alt="circle" width={400} height={400} />
      </div>
      <div className="absolute lg:hidden z-2 top-0 scale-75 md:scale-100 right-[10%] -translate-y-[30%] translate-x-[30%] sm:translate-x-[40%]">
        <Image src={pie} alt="pie" width={400} height={400} />
      </div>
      <div className="absolute z-2 lg:hidden scale-100 md:scale-125 md:translate-x-[70%] lg:-left-[30%] lg:bottom-[40%]  bottom-[5%] -left-[40%] -translate-y-[30%] translate-x-[30%] ">
        <Image src={circle} alt="circle" width={300} height={300} />
      </div>
      <div className="absolute z-2 lg:hidden rotate-90 scale-75 md:scale-100 md:translate-x-[70%] bottom-[5%] -left-[40%] -translate-y-[30%] translate-x-[30%]">
        <Image src={pie} alt="pie" width={300} height={300} />
      </div>
      <div className="absolute z-3 lg:-top-[50%] xl:top-0 w-full">
        <Landing />
      </div>
    </div>
  );
};

export default CircleLanding;
