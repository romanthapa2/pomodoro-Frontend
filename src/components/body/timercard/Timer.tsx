import React, { useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);
const Timer: React.FC = () => {
  const endTime: Dayjs = dayjs().add(30, "minutes");
  const [time, setTime] = useState<string>();
  useEffect(() => {
    const interval = 1000;
    const updateTimer = () => {
      const currentTime = dayjs();
      const diffTime = endTime.unix() - currentTime.unix();
      const duration = dayjs.duration(diffTime * 1000, "milliseconds");

      const twoDP = (n: number) => (n > 9 ? n : "0" + n);
      const timestamp = `${twoDP(duration.minutes())} : ${twoDP(duration.seconds())}`;

      setTime(timestamp);
    };

    const timerId = setInterval(updateTimer, interval);
    updateTimer(); // Initial call to set the time immediately

    return () => clearInterval(timerId); // Clear interval on component unmount
  }, [endTime]);

  return (
    <div className="h-32">{time}</div>
  )
};

export default Timer;
