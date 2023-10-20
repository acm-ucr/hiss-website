import React from "react";

const Card = (props) => {
  const { name, title, year, major, pronouns, linkedIn } = props;

  return (
    <div className="cardContainer font-poppins m-4 bg-white w-72 h-96 rounded-md shadow flex flex-col items-center justify-center">
      <div className="contentContainer w-56 h-5/6 flex flex-col justify-center items-start">
        <div className="photoContainer bg-gray-500 w-full h-2/3 rounded-lg">
          <img src=".../public/images/judge.png" alt="" />
        </div>

        <div className="textContainer">
          <div className="name mt-2 font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-hiss-blue to-hiss-purple">
            {name}
          </div>

          <div className="title -mt-0 text-xl font-light">{title}</div>

          <div className="linkedinContainer ">
            <a href={linkedIn} className="no-underline">
              <div className="ml-1 font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-hiss-blue to-hiss-purple">
                in
              </div>
            </a>
          </div>

          <div className="education text-sm">
            {year} - {major}
          </div>
          <div className="pronouns text-sm">Pronouns: {pronouns}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
