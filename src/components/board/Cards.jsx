import React from "react";
import { board } from "../../data/board.js";
import Card from "../board/Card.jsx";

const Cards = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {board.map((member, index) => (
          <Card
            key={index}
            name={member.name}
            position={member.position}
            year={member.year}
            major={member.major}
            pronouns={member.pronouns}
            linkedIn={member.linkedIn}
            email={member.email}
            image={member.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
