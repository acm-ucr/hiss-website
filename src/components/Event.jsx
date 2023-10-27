import React from "react";

const Event = (props) => {
  return (
    <div className="font-poppins m-4 p-4 bg-white w-64 h-96 rounded-3xl shadow flex flex-col items-start justify-center">
      <div className="mt-2 font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-hiss-blue to-hiss-purple">
          {props.date.getMonth()}
          {props.date.getDate()}
          {props.date.getHours() + ":" + props.date.getMinutes()}
        </div>
        <div className="mt-2 font-bold text-2xl">
          {props.title}
          {"zoom: " + props.link}
          {props.description}
        </div>
    </div>
  );
};

export default Event;
