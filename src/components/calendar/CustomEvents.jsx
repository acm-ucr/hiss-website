const CustomEvent = ({ start, summary, allDay, color }) => {
  return (
    <div className={`font-playfair ${color} text-sm flex justify-start`}>
      <p className="whitespace-nowrap m-0">
        {!allDay &&
          new Date(start).toLocaleTimeString(navigator.language, {
            hour: "2-digit",
            minute: "2-digit",
          })}
        &nbsp;
        {summary}
      </p>
    </div>
  );
};

export default CustomEvent;
