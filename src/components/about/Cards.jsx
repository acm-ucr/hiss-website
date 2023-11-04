import React from "react";
import Card from "./Card";
import { FaDiscord, FaInstagram, FaEnvelope } from "react-icons/fa";
import Header from "../Header";

const Cards = () => {
  return (
    <div className="rounded-lg flex flex-col p-8 w-5/12 space-y-20">
      <Header text={"Join Us"} className="" />
      <div className="flex flex-row items-center justify-evenly">
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
