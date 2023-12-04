import React from "react";
import Image from "next/image";
import chart from "../../../public/assets/chart.svg";
import Button from "../about/Button.jsx";
const Landing = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[90vh] lg:h-[80vh] w-full ">
      <div className="h-auto flex lg:flex-row flex-col gap-8 justify-center items-center lg:w-5/6 ">
        <Image
          src={chart}
          className="w-1/2 md:w-1/3 lg:w-1/4 2xl:w-1/5"
          alt="chart"
        />
        <div className="flex flex-col w-3/4 2xl:w-1/2 items-center lg:items-start gap-2 lg:gap-0">
          <p className="text-5xl !text-center lg:!text-left py-1.5 font-bold text-transparent bg-clip-text bg-gradient-to-r from-hiss-blue to-hiss-purple">
            Highlander Statistics Society
          </p>
          <p className=" text-white lg:px-4 py-2.5 px-2.5 font-bold text-center text-md md:text-2xl w-fit bg-gradient-to-r from-hiss-blue to-hiss-purple rounded-full">
            at University of California Riverside
          </p>
          <p className="lg:my-1 py-1 lg:w-2/3 lg:!text-left text-base md:text-xl !text-center">
            HiSS is the go-to club for statistics enthusiasts at UCR, fostering
            a dynamic community through workshops and socials.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:items-center items-center mt-[2%] ">
        <Button text={"JOIN US"} link={"https://discord.gg/NrsJjtAQAE"} />
      </div>
    </div>
  );
};

export default Landing;
