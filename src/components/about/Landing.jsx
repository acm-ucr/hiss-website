import React from "react";
import Image from "next/image";
import chart from "../../../public/assets/chart.svg";
import Button from "../about/Button.jsx";
const Landing = () => {
  return (
    <div className="flex justify-center items-center h-[90vh] md:h-[70vh] w-full">
      <div className="h-auto flex sm:flex-row flex-col gap-8 items-center md:w-2/3">
        <div className="  flex  items-center mr-2 md:m-0">
          <Image src={chart} className="h-full w-auto m-0" alt="chart" />
        </div>
        <div className="flex flex-col w-2/3">
          <p className="text-5xl !text-center md:!text-left py-1.5 font-bold text-transparent bg-clip-text bg-gradient-to-r from-hiss-blue to-hiss-purple">
            Highlander Statistics Society
          </p>
          <div className="flex flex-col">
            <p className="md:m-0 text-white px-0 py-2.5 font-bold  text-center sm:text-3xl md:h-14 md:w-4/5 bg-gradient-to-r from-hiss-blue to-hiss-purple rounded-full items-start">
              at Unversity of California Riverside
            </p>

            <p className="md:my-1 py-1 md:w-2/3 md:!text-left text-base md:text-xl !text-center ">
              HiSS is the go-to club for statistics enthusiasts at UCR,
              fostering a dynamic community through workshops and socials.
            </p>
            <div className="flex flex-col md:items-end items-center md:mt-[10%] md:mr-[20%]">
              <Button text={"JOIN US"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
