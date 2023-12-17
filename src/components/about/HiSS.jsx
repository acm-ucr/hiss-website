"use client";
import React from "react";
import Header from "../Header.jsx";
import Image from "next/image";
import About from "../../../public/images/about.webp";
import { motion } from "framer-motion";

const animation = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
  },
};

const HiSS = () => {
  return (
    <div className="flex-col items-center justify-center inline-flex gap-10 sm:w-2/3 lg:w-1/2 w-5/6 sm:text-xl text-base ">
      <motion.div
        variants={animation}
        transition={{ delay: 0.3 }}
        initial="hidden"
        whileInView="show"
      >
        <Header text={"About HiSS"} />
      </motion.div>
      <motion.p
        variants={animation}
        transition={{ delay: 0.5 }}
        initial="hidden"
        whileInView="show"
      >
        The Highlander Statistics Society (HiSS) is a student organization whose
        purpose is to form unity and friendship among students majoring or
        interested in statistics. HiSS works to promote scholarship and interest
        in statistics while informing people about opportunities and challenges
        that are present in the field. Through social, academic, and service
        events, HiSS strives to build a strong community among its club members
        in addition to encouraging involvement and success in statistics.
      </motion.p>
      <motion.div
        variants={animation}
        transition={{ delay: 0.7 }}
        initial="hidden"
        whileInView="show"
        className="flex justify-center"
      >
        <Image className="rounded-full w-5/6 " src={About} alt="HiSS Image" />
      </motion.div>
      <motion.p
        variants={animation}
        transition={{ delay: 0.9 }}
        initial="hidden"
        whileInView="show"
      >
        The Highlander Statistics Society (HiSS) aims to bring together students
        who are interested in statistics across various disciplines. The club
        was founded in Spring 2010 and has been a consistent source of
        assistance and opportunity for undergraduates. HiSS works to promote
        academic achievement by fostering a supportive environment where
        students can learn and collaborate together. Club activities include R
        and Python coding workshops, social events, community service, and
        participation in the annual Datafest competition.
      </motion.p>
    </div>
  );
};

export default HiSS;
