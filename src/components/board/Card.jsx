import React from "react";

const Card = () => {
  return (
    <div className="cardContainer font-poppins m-4 bg-white w-32 h-52 rounded-md shadow p-3">
      <div className="photoContainer bg-gray-500 w-24 h-24 rounded-lg"></div>

      <div className="textContainer">
        <div className="name mt-1 font-bold text-md text-transparent bg-clip-text bg-gradient-to-r from-hiss-blue to-hiss-purple">
          Jennie Kim
        </div>

        <div className="title text-sm font-light">President</div>

        <div className="linkedinContainer text-xs text-transparent bg-clip-text bg-gradient-to-r from-hiss-blue to-hiss-purple">
          <div>in-logo image</div>
        </div>

        <div className="education text-xxs">3rd year - Comp Sci</div>
        <div className="pronouns text-xxs">Pronouns: She/Her/Hers</div>
      </div>
    </div>
  );
};

export default Card;
