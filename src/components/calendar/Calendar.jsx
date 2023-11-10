"use client";
import { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CustomToolbar from "./CustomToolbar.jsx";
import CustomEvent from "./CustomEvents.jsx";
import CustomHeader from "./CustomHeader.jsx";

const localizer = momentLocalizer(moment);

const CalendarEvent = ({ events }) => {
  // const [event, setEvent] = useState(null);
  const [date, setDate] = useState(new Date());

  return (
    <section className="w-full flex justify-center items-center flex-col mt-[2vh] ">
      <div className="w-10/12 flex justify-center items-center ">
        <div className="h-[80vh] w-full relative mb-24 rounded-lg">
          <Calendar
            date={date}
            className=" w-full m-0 p-0 text-md md:text-2xl rounded-b-xl overflow-hidden  "
            allDayAccessor="allDay"
            showAllEvents={true}
            events={events}
            localizer={localizer}
            defaultView="month"
            views={["month"]}
            components={{
              event: CustomEvent,
              toolbar: CustomToolbar,
              month: {
                header: CustomHeader,
              },
            }}
            onNavigate={(newDate) => {
              setDate(newDate);
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
                  new Date(event).toLocaleDateString() ==
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
        {/* {event && <Modal event={event} setEvent={setEvent} />} */}
      </div>
    </section>
  );
};

export default CalendarEvent;
