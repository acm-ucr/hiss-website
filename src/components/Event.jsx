import React from "react";

const Event = (props) => {
  return (
    <div className="mt-4 ml-4 font-poppins bg-white rounded-xl w-8/12 h-30 min-h-full gap-x-3  shadow flex flex-row items-start justify-center">
      <div className="w-fit h-fit  rounded-l-xl  bg-gradient-to-r from-hiss-blue to-hiss-purple">
          <div className="w-32 h-36 font-bold text-4xl text-white flex flex-col gap-y-1 items-center justify-center">
            <div>{/* {props.date.getMonth()} */ "OCT"}</div>
            <div> {/* {props.date.getDate()} */ "27"}</div>
            <div className="font-extralight text-sm"> {/* {props.date.getHours() + ":" + props.date.getMinutes()} */ "2:07AM"}</div>
          </div>
        </div>
        <div className=" h-36 font-bold text-4xl flex flex-col gap-y-1 items-start justify-center">
        <div className="font-bold text-4xl">
          {/* {props.title} */ "Test Event"}
          <div className="mt-2 font-light text-sm">
              {/* {"zoom: " + props.link} */ "zoom: link"}<br></br>
          </div>
        </div>
        <div className="mt-2 font-light text-sm">
          {/* {props.description} */ "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation "}
        </div>
        </div>
    </div>);
};

export default Event;
