import React from "react";
import Image from "next/image";
import chart from "../../../public/assets/chart.svg";
const Landing = () => {
  return (
    <div className="w-full relative top-40 flex h-[50vh] md:h-screen">
      <div className="h-auto flex gap-0 relative left-1/4">
        <div className="flex-2 relative right-32">
          <Image src={chart} className="h-1/2 w-auto m-0" alt="chart" />
        </div>
        <div className="flex-1 relative right-24">
          <div className="text-5xl  py-1 font-bold text-transparent bg-clip-text bg-gradient-to-r from-hiss-blue to-hiss-purple">
            Highlander Statistics Society
          </div>
          <div className=" my-1 text-white px-0 py-2.5 font-bold text-center text-3xl h-14 w-[77vh] bg-gradient-to-r from-hiss-blue to-hiss-purple rounded-full">
            at Unversity of Calirfornia Riverside
          </div>
          <div className="my-1 h-10 w-6/12">
            Lorem ipsum dolor sit amet, consectetur hadipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
