import React from "react";
import Card from "./Card";
import { FaDiscord, FaInstagram, FaEnvelope } from "react-icons/fa";

const Cards = () => {
  return (
    <div className="bg-white flex flex-col">
      <p>Title</p>
      <div className="flex flex-row">
        <Card
          text={"Discord"}
          link={"www.discord.com"}
          icon={<FaDiscord className="text-7xl text-hiss-purple" />}
        />
        <Card
          text={"Instagram"}
          link={"www.instagram.com"}
          icon={<FaInstagram className="text-7xl text-hiss-purple" />}
        />
        <Card
          text={"Email"}
          link={"www.gmail.com"}
          icon={<FaEnvelope className="text-7xl text-hiss-purple" />}
        />
      </div>
    </div>
  );
};

export default Cards;
