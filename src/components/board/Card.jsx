import React from "react";
import Image from "next/image";
import Judge from "../../../public/images/judge.png";
import { GrMail } from "react-icons/gr";

const Card = (props) => {
  const { name, title, year, major, pronouns, linkedIn, email } = props;

  return (
    <div className="cardContainer font-poppins m-4 bg-white w-[265px] h-[400px] rounded-3xl shadow flex flex-col items-center justify-center">
      <div className="contentContainer w-56 h-5/6 flex flex-col justify-center items-start">
        <div className="photoContainer flex w-full h-[198px]">
          <Image
            src={Judge}
            width={500}
            height={500}
            alt="Picture of the author"
            className="w-full h-full rounded-2xl"
          />
        </div>

        <div className="textContainer">
          <div className="name mt-2 font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-hiss-blue to-hiss-purple">
            {name}
          </div>

          <div className="title -mt-0 text-2xl font-light">{title}</div>

          <div className="linkedinContainer">
            <a
              href={linkedIn}
              className="no-underline ml-1.5 font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-hiss-blue to-hiss-purple"
            >
              in
            </a>

            <a href={email}>
              <GrMail className="inline h-6 w-6 ml-2 mb-1 rounded-xl" />
            </a>
          </div>

          <div className="education text-base">
            {year} - {major}
          </div>
          <div className="pronouns text-base">Pronouns: {pronouns}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
