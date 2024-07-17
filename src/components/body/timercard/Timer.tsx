import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

interface componentProps{
  status:string;
}

const Timer: React.FC<componentProps> = ({status}) => {
  let endTime = React.useRef(dayjs().add(30, "minutes"));
  let endTimeSeconds = endTime.current.unix();
  console.log(endTimeSeconds);
  const [time, setTime] = useState<string>();
  let diffTime : number;
  useEffect(() => {
    const interval = 1000;
    const updateTimer = () => {
      const currentTime = dayjs();
      diffTime = endTimeSeconds - currentTime.unix();
      console.log(diffTime);
      const duration = dayjs.duration(diffTime * 1000, "milliseconds");
      const twoDP = (n: number) => (n > 9 ? n : "0" + n);
      const timestamp = `${twoDP(duration.minutes())} : ${twoDP(duration.seconds())}`;
      setTime(timestamp);
      
    };

    updateTimer();
    const timerId = setInterval(updateTimer, interval);


    let timeLeft:number = 0;
    if(status === 'Pause'){
      clearInterval(timerId);
      timeLeft = diffTime;
    }else if(status === 'Resume'){
      endTimeSeconds = timeLeft;
    }


    return () => clearInterval(timerId); // Clear interval on component unmount
  }, [endTime,status]);

  return (
    <div className="h-32" style={{fontSize:"6rem"}}>{time}</div>
  )
};

export default Timer;
