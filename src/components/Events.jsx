import Header from "../components/Header.jsx";
import Event from "../components/Event.jsx";
import eventsData from "../data/events.js";
import Button from "./about/Button.jsx";

const Events = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Header text="Upcoming Events" />
      <div className="space-y-7 mt-16 mb-16">
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
      </div>
      <div className="hover:invert">
        <Button text={"See Calendar"} />
      </div>
    </div>
  );
};

export default Events;
