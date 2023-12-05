"use client";
import React from "react";
import Image from "next/image";
import chart from "../../../public/assets/chart.svg";
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
    <div className="flex flex-col justify-center items-center h-[90vh] lg:h-[80vh] w-full">
      <div className="h-auto flex lg:flex-row flex-col gap-8 justify-center items-center lg:w-5/6 ">
        <motion.div
          variants={animation}
          transition={{ delay: 0.3 }}
          initial="hidden"
          whileInView="show"
          className="w-1/2 md:w-1/3 lg:w-1/4 2xl:w-1/5"
        >
          <Image src={chart} alt="chart" />
        </motion.div>
        <div className="flex flex-col w-3/4 2xl:w-1/2 items-center lg:items-start gap-2 lg:gap-0">
          <motion.p
            className="text-5xl !text-center lg:!text-left py-1.5 font-bold text-transparent bg-clip-text bg-gradient-to-r from-hiss-blue to-hiss-purple animate-fade-up animate-delay-[500ms"
            variants={animation}
            transition={{ ...transition, delay: 0.3 }}
            initial="hidden"
            whileInView="show"
          >
            Highlander Statistics Society
          </motion.p>
          <motion.p
            className=" text-white lg:px-4 py-2.5 px-2.5 font-bold text-center text-md md:text-2xl w-fit bg-gradient-to-r from-hiss-blue to-hiss-purple rounded-full"
            variants={animation}
            transition={{ ...transition, delay: 0.6 }}
            initial="hidden"
            whileInView="show"
          >
            at University of California Riverside
          </motion.p>
          <motion.p
            className="lg:my-1 py-1 lg:w-2/3 lg:!text-left text-base md:text-xl !text-center"
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
        <Button text={"JOIN US"} link={"https://discord.gg/NrsJjtAQAE"} />
      </motion.div>
    </div>
  );
};

export default Landing;
