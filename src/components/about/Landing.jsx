import React from "react";
import Image from "next/image";
import chart from "../../../public/assets/chart.svg";
const Landing = () => {
  return (
    <div className="w-full flex justify-center items-end h-[70vh]">
      <div className="flex-row w-auto">
        <div className="h-auto flex gap-8 ">
          <div className="flex w-1/2 justify-end items-center">
            <Image src={chart} className="h-full w-auto m-0" alt="chart" />
          </div>
          <div className="px-1 flex w-full justify-center items-start">
            <div className="flex flex-col w-3/4 lg:w-auto">
              <p className="text-5xl py-1 font-bold text-transparent bg-clip-text bg-gradient-to-r from-hiss-blue to-hiss-purple">
                Highlander Statistics Society
              </p>
              <p className="mt-0 my-0 text-white px-0 py-2.5 font-bold text-center text-3xl h-14 w-[83vh] bg-gradient-to-r from-hiss-blue to-hiss-purple rounded-full">
                at Unversity of Calirfornia Riverside
              </p>
              <p className="my-1 py-1 h-10 w-6/12">
                Lorem ipsum dolor sit amet, consectetur hadipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
