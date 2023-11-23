import React from "react";
import Image from "next/image";
import chart from "../../../public/assets/chart.svg";
import Button from "../about/Button.jsx";
const Landing = () => {
  return (
    <div className="flex justify-center items-center h-[90vh] md:h-[70vh] w-full">
      <div className="h-auto flex sm:flex-row flex-col gap-8 justify-center items-center md:w-2/3">
        <Image src={chart} className="w-1/2 md:w-1/4" alt="chart" />
        <div className="flex flex-col w-3/4">
          <p className="text-5xl !text-center md:!text-left py-1.5 font-bold text-transparent bg-clip-text bg-gradient-to-r from-hiss-blue to-hiss-purple">
            Highlander Statistics Society
          </p>
          <div className=" md:w-5/6 ">
            <p className=" text-white md:px-4 py-2.5 px-2.5 font-bold text-center md:text-3xl w-fit bg-gradient-to-r from-hiss-blue to-hiss-purple rounded-full">
              at University of California Riverside
            </p>
            <p className="md:my-1 py-1 md:w-2/3 md:!text-left text-base md:text-xl !text-center">
              HiSS is the go-to club for statistics enthusiasts at UCR,
              fostering a dynamic community through workshops and socials.
            </p>
            <div className="flex flex-col md:items-end items-center mt-[2%] md:mr-[10%]">
              <Button text={"JOIN US"} link={"https://discord.gg/NrsJjtAQAE"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
