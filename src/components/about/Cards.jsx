"use client";
import React from "react";
import Card from "./Card";
import { FaDiscord, FaInstagram, FaEnvelope } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
import Header from "../Header";
import { motion } from "framer-motion";

const animation = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
  },
};

const Cards = () => {
  return (
    <div className="rounded-xl flex flex-col justify-center items-center p-1 w-7/12 lg:w-10/12 2xl:w-7/12 space-y-20 mb-6">
      <motion.div
        variants={animation}
        transition={{ delay: 0.3 }}
        initial="hidden"
        whileInView="show"
      >
        <Header text={"Join Us"} />
      </motion.div>

      <div className="flex flex-col md:flex-row md:grid md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-4 w-full">
        <motion.div
          variants={animation}
          transition={{ delay: 0.4 }}
          initial="hidden"
          whileInView="show"
          className="w-full flex flex-row justify-center"
        >
          <Card
            text={"Discord"}
            link={"https://discord.gg/NrsJjtAQAE"}
            icon={<FaDiscord className="text-7xl text-hiss-purple" />}
          />
        </motion.div>
        <motion.div
          variants={animation}
          transition={{ delay: 0.6 }}
          initial="hidden"
          whileInView="show"
          className="w-full flex flex-row justify-center"
        >
          <Card
            text={"Instagram"}
            link={"https://www.instagram.com/highlanderstatistics/"}
            icon={<FaInstagram className="text-7xl text-hiss-purple" />}
          />
        </motion.div>
        <motion.div
          variants={animation}
          transition={{ delay: 0.8 }}
          initial="hidden"
          whileInView="show"
          className="w-full flex flex-row justify-center"
        >
          <Card
            text={"Email"}
            link={"mailto:highlanderstat@ucr.edu"}
            icon={<FaEnvelope className="text-7xl text-hiss-purple" />}
          />
        </motion.div>
        <motion.div
          variants={animation}
          transition={{ delay: 0.9 }}
          initial="hidden"
          whileInView="show"
          className="w-full flex flex-row justify-center"
        >
          <Card
            text={"Linktree"}
            link={"https://linktr.ee/highlanderstatsociety"}
            icon={<SiLinktree className="text-7xl text-hiss-purple" />}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Cards;
