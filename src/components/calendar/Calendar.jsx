"use client";
import { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CustomToolbar from "./CustomToolbar.jsx";
import CustomEvent from "./CustomEvents.jsx";
import CustomHeader from "./CustomHeader.jsx";
import Modal from "./Modal.jsx";
import axios from "axios";
const localizer = momentLocalizer(moment);

const CalendarEvent = () => {
  const [event, setEvent] = useState(null);
  const [events, setEvents] = useState(null);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}&singleEvents=true&orderBy=startTime`
      )
      .then((response) => {
        const items = response.data.items.map((item) => {
          item.start = new Date(item.start.dateTime);
          item.end = new Date(item.end.dateTime);
          item.hidden = false;
          return item;
        });
        setEvents(items);
      });
  }, []);
  console.log(events);
  return (
    events && (
      <section className="w-full flex justify-center items-center flex-col mt-[2vh] ">
        <div className="w-10/12 flex justify-center items-center">
          <div className="h-[90vh] w-full relative mb-24 ">
            <Calendar
              date={date}
              className=" w-full m-0 p-0 text-md md:text-2xl"
              allDayAccessor="allDay"
              showAllEvents={true}
              events={events}
              localizer={localizer}
              defaultView="month"
              views={["month"]}
              components={{
                event: CustomEvent,
                toolbar: CustomToolbar,
                header: CustomHeader,
              }}
              onNavigate={(newDate) => {
                return setDate(newDate);
              }}
              eventPropGetter={() => {
                return {
                  className: `p-0 !active:ring-0 !focus:outline-0 !bg-transparent`,
                };
              }}
              onSelectEvent={(event) => setEvent(event)}
              dayPropGetter={(event) => {
                return {
                  className: `${
                    new Date(event).toLocaleDateString() ===
                    new Date().toLocaleDateString()
                      ? "!bg-opacity-10 !bg-hiss-black"
                      : "!bg-transparent"
                  }`,
                  style: {
                    margin: 0,
                    padding: 0,
                  },
                };
              }}
            />
          </div>
          {event && <Modal event={event} setEvent={setEvent} />}
        </div>
      </section>
    )
  );
};

export default CalendarEvent;
