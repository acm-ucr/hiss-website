import React from "react";
import Image from "next/image";
import chart from "../../../public/assets/chart.svg";
import Button from "../about/Button.jsx";
const Landing = () => {
  return (
    <div className="w-full flex justify-center items-center h-[70vh] ">
      <div className="flex-row w-auto">
        <div className="h-auto flex sm:flex-row flex-col gap-8 items-center">
          <div className="flex w-1/2 justify-end items-center mr-2 sm:m-0">
            <Image src={chart} className="h-full w-auto m-0" alt="chart" />
          </div>
          <div className="px-2 flex w-full justify-center items-start">
            <div className="flex flex-col w-3/4 lg:w-auto">
              <p className="text-5xl text-center py-1.5 font-bold text-transparent bg-clip-text bg-gradient-to-r from-hiss-blue to-hiss-purple">
                Highlander Statistics Society
              </p>
              <p className="sm:m-0 mr-24 text-white px-0 py-2.5 font-bold text-center sm:text-3xl sm:h-14 sm:w-4/5 w-80 bg-gradient-to-r from-hiss-blue to-hiss-purple rounded-full">
                at Unversity of California Riverside
              </p>
              <p className="sm:my-1 py-1 h-10 sm:w-6/12 w-full">
                Lorem ipsum dolor sit amet, consectetur hadipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
            </div>
          </div>
        </div>
        <Button text={"JOIN US"} />
      </div>
    </div>
  );
};

export default Landing;
