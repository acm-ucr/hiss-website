"use client";
import Header from "../components/Header.jsx";
import Event from "../components/Event.jsx";
import Button from "./about/Button.jsx";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const animation = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
  },
};

const Events = ({ button = true }) => {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/calendar/v3/calendars/${
            process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL
          }/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}
          &singleEvents=true&orderBy=startTime&timeMin=${new Date(
            new Date().getTime() - 60 * 60 * 24 * 7 * 10 * 1000
          ).toISOString()}&timeMax=${new Date(
            new Date().getTime() + 60 * 60 * 24 * 7 * 10 * 1000
          ).toISOString()}`
        );

        const data = await response.json();
        const items = data.items.map((item) => {
          item.start = new Date(item.start.dateTime);
          item.end = new Date(item.end.dateTime);
          item.hidden = false;
          return item;
        });

        setEvents(items);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full my-5">
      <motion.div
        variants={animation}
        transition={{ delay: 0.2 }}
        initial="hidden"
        whileInView="show"
      >
        <Header text="Upcoming Events" />
      </motion.div>
      <motion.div
        className="space-y-7 mt-16 mb-16 justify-center items-center flex flex-col"
        variants={animation}
        transition={{ delay: 0.4 }}
        initial="hidden"
        whileInView="show"
      >
        {events !== null &&
          events
            .sort((a, b) => a.start - b.start)
            .slice(-4, -1)
            .reverse()
            .map((event) => (
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
                summary={event.summary}
                location={event.location}
                link={event.link}
                description={event.description}
                color={event.color}
              />
            ))}
      </motion.div>
      {button && (
        <motion.div
          variants={animation}
          transition={{ delay: 0.4 }}
          initial="hidden"
          whileInView="show"
        >
          <Button text={"See Calendar"} link={"events"} />
        </motion.div>
      )}
    </div>
  );
};

export default Events;
