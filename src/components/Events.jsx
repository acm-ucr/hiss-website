"use client";
import Header from "../components/Header.jsx";
import Event from "../components/Event.jsx";
import eventsData from "../data/events.js";
import Button from "./about/Button.jsx";
import { motion } from "framer-motion";

const animation = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
  },
};

const Events = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full mt-6">
      <motion.div
        variants={animation}
        transition={{ delay: 0.3 }}
        initial="hidden"
        whileInView="show"
      >
        <Header text="Upcoming Events" />
      </motion.div>
      <motion.div
        className="space-y-7 mt-16 mb-16 justify-center items-center flex flex-col"
        variants={animation}
        transition={{ delay: 0.5 }}
        initial="hidden"
        whileInView="show"
      >
        {eventsData.map((event) => (
          <Event
            key={event.id}
            month={event.start
              .toLocaleString("default", { month: "short" })
              .toUpperCase()}
            day={event.start.getDate()}
            time={`${
              event.start.getHours() > 12
                ? event.start.getHours() - 12
                : event.start.getHours()
            }:${event.start.getMinutes().toString().padStart(2, "0")} ${
              event.start.getHours() >= 12 ? "PM" : "AM"
            }`}
            title={event.title}
            location={event.location}
            link={event.link}
            description={event.description}
            color={event.color}
          />
        ))}
      </motion.div>
      <motion.div
        variants={animation}
        transition={{ delay: 0.7 }}
        initial="hidden"
        whileInView="show"
      >
        <Button text={"See Calendar"} link={"events"} />
      </motion.div>
      <div className="mt-5"></div>
    </div>
  );
};

export default Events;
