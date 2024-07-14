import React, { useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

interface componentProps{
  status:string;
}

const Timer: React.FC<componentProps> = ({status}) => {
  const endTime = React.useRef(dayjs().add(30, "minutes"));
  const [time, setTime] = useState<string>();
  useEffect(() => {
    const interval = 1000;
    const updateTimer = () => {
      const currentTime = dayjs();
      const diffTime = endTime.current.unix() - currentTime.unix();
      const duration = dayjs.duration(diffTime * 1000, "milliseconds");
      const twoDP = (n: number) => (n > 9 ? n : "0" + n);
      const timestamp = `${twoDP(duration.minutes())} : ${twoDP(duration.seconds())}`;
      setTime(timestamp);
      console.log(timestamp)
    };

    updateTimer(); // Initial call to set the time immediately

    const timerId = setInterval(updateTimer, interval);
    console.log(timerId)

    if(status === 'Pause'){
      clearInterval(timerId)
    }

    return () => clearInterval(timerId); // Clear interval on component unmount
  }, [endTime,status]);

  return (
    <div className="h-32" style={{fontSize:"6rem"}}>{time}</div>
  )
};

export default Timer;
