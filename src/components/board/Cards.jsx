"use client";
import React from "react";
import { board } from "../../data/board.js";
import Card from "../board/Card.jsx";
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
    <motion.div
      variants={animation}
      transition={{ delay: 0.3 }}
      initial="hidden"
      whileInView="show"
    >
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
    </motion.div>
  );
};

export default Cards;
