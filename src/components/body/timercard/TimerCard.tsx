import React,{useState} from "react";
import Timer from "./Timer"

const TimerCard : React.FC = ()=>{
    const [start,setstart] = useState<string>('Pause');
    const startPause = ()=>{
        setstart(prevState=>(prevState === 'Pause'?'Start':'Pause'));
    }
    return(
        <div className="text-white bg-gray-500 h-fit mx-2 mt-10 md:mx-[30%] rounded-md">
            {/* x-36 bg-green-700 h-[65%] flex flex-col justify-start items-start */}
            <div className="p-5">
                {/* text-white h-16 w-full bg-black flex justify-center items-center */}
                <div className="flex justify-center items-center h-8 ">
                    {/* px-4 py-1 bg-slate-700 */}
                    <div className="px-3 py-1 bg-slate-700 rounded-md">
                        Pomodoro
                    </div>
                    <div className="px-3 py-1 bg-slate-700 rounded-md">
                        Short Break
                    </div>
                    <div className="px-3 py-1 bg-slate-700 rounded-md">
                        Long Break
                    </div>
                </div>
                {/* <div className="h-44 w-full flex items-center justify-center">
                    <h1 style={{fontSize: "7rem"}}>25:00 </h1>
                </div> */}
                <div className="flex justify-center items-center">
                <Timer status={start}/>
                </div>

                <div className=" h-20 w-full flex justify-center items-center">
                    <button onClick={startPause} className="px-4 py-3 text-gray-700 bg-white h-16 w-48 text-3xl rounded-lg">
                    {start === 'Pause' ? 'START' : 'PAUSE'}
                    </button>
                </div>
            </div>
        </div>

    )
}

export default TimerCard;