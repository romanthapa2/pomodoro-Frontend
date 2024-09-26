import React from "react";

interface TimerDisplayProps {
  time: string;
}

const TimerDisplay: React.FC<TimerDisplayProps> = ({ time }) => {
  return (
    <div
      className="flex justify-center items-center h-32 font-semibold"
      style={{ fontSize: "8rem" }}
    >
      {time}
    </div>
  );
};

export default TimerDisplay;
