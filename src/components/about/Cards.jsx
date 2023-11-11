import React from "react";
import Card from "./Card";
import { FaDiscord, FaInstagram, FaEnvelope } from "react-icons/fa";
import Header from "../Header";

const Cards = () => {
  return (
    <div className="rounded-xl flex flex-col p-8 sm:w-full lg:w-10/12 space-y-20">
      <Header text={"Join Us"} />
      <div className="flex flex-row items-center justify-center space-x-3 md:space-x-10 w-full">
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
