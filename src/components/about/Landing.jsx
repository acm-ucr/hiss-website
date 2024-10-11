"use client";
import React from "react";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import Button from "../about/Button.jsx";
import { motion } from "framer-motion";
const transition = {
  type: "tween",
  ease: "easeInOut",
  duration: 1,
};
const animation = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
  },
};

const Landing = () => {
  return (
    <div className="absolute top-0 min-h-full xl:min-h-[80%] flex flex-col justify-center items-center w-full">
      <div className="flex lg:flex-row flex-col justify-center items-center lg:w-5/6">
        <motion.div
          variants={animation}
          transition={{ delay: 0.3 }}
          initial="hidden"
          whileInView="show"
          className="w-1/5 lg:w-1/4 2xl:w-1/5 mr-8"
        >
          <Image src={logo} alt="logo" />
        </motion.div>
        <div className="flex flex-col w-fit items-center lg:items-start gap-2 lg:gap-0 lg:w-1/2 2xl:w-3/5">
          <motion.p
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-6xl' text-center whitespace-nowrap py-1.5 font-bold text-transparent bg-clip-text bg-gradient-to-r from-hiss-blue to-hiss-purple"
            variants={animation}
            transition={{ ...transition, delay: 0.3 }}
            initial="hidden"
            whileInView="show"
          >
            Highlander Statistics Society
          </motion.p>
          <motion.p
            className=" text-white lg:px-4 2xl:text-3xl py-2.5 px-2.5 font-bold text-center text-md md:text-2xl w-fit bg-gradient-to-r from-hiss-blue to-hiss-purple rounded-full whitespace-nowrap"
            variants={animation}
            transition={{ ...transition, delay: 0.6 }}
            initial="hidden"
            whileInView="show"
          >
            at University of California Riverside
          </motion.p>
          <motion.p
            className="lg:my-1 py-1 w-10/12 lg:w-2/3 lg:!text-left text-sm md:text-xl !text-center"
            variants={animation}
            transition={{ ...transition, delay: 0.9 }}
            initial="hidden"
            whileInView="show"
          >
            HiSS is the go-to club for statistics enthusiasts at UCR, fostering
            a dynamic community through workshops and socials.
          </motion.p>
        </div>
      </div>
      <motion.div
        className="flex flex-col lg:items-center items-center mt-[2%] "
        variants={animation}
        transition={{ ...transition, delay: 1.0 }}
        initial="hidden"
        whileInView="show"
      >
        <Button
          text="JOIN US"
          link="https://discord.gg/NrsJjtAQAE"
          target={"_blank"}
        />
      </motion.div>
    </div>
  );
};

export default Landing;
