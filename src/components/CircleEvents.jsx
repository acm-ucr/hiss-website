import React from "react";
import circle from "../../public/assets/circle.svg";
import Image from "next/image";

function EventLanding() {
  return (
    <div className="">
      <Image src={circle} alt="circle" className="w-[900px] h-[800px]" />
    </div>
  );
}

export default EventLanding;
