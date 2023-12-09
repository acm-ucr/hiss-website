import React from "react";
import Card from "./Card";
import { FaDiscord, FaInstagram, FaEnvelope } from "react-icons/fa";
import Header from "../Header";

const Cards = () => {
  return (
    <div className="rounded-xl flex flex-col justify-center items-center p-1 w-7/12 lg:w-10/12 space-y-20">
      <Header text={"Join Us"} />
      <div className="flex flex-col md:flex-row items-center justify-center w-full gap-3">
        <Card
          text={"Discord"}
          link={"https://discord.gg/NrsJjtAQAE"}
          icon={<FaDiscord className="text-7xl text-hiss-purple" />}
        />
        <Card
          text={"Instagram"}
          link={"https://www.instagram.com/highlanderstatistics/"}
          icon={<FaInstagram className="text-7xl text-hiss-purple" />}
        />
        <Card
          text={"Email"}
          link={"mailto:highlanderstat@ucr.edu"}
          icon={<FaEnvelope className="text-7xl text-hiss-purple" />}
        />
      </div>
    </div>
  );
};

export default Cards;
