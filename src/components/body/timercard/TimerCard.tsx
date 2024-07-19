// import React, { useState } from "react";
// import Timer from "./Timer";

// const TimerCard: React.FC = () => {
//   const [start, setstart] = useState<string>("Pause");
//   const startPause = () => {
//     setstart((prevState) => (prevState === "Pause" ? "Start" : "Pause"));
//   };


  
//   return (
//     <div className="text-white bg-gray-500 h-fit mx-2 mt-10 md:mx-[30%] rounded-md">
//       <div className="p-5">

//         <div className="flex justify-center items-center h-8 ">
//           <button  className="px-3 py-1 bg-slate-700 rounded-md">Pomodoro</button>
//           <button className="px-3 py-1 bg-slate-700 rounded-md">Short Break</button>
//           <button className="px-3 py-1 bg-slate-700 rounded-md">Long Break</button>
//         </div>

//         {/* time showing div */}
//         <div className="flex justify-center items-center">
//           <Timer status={start} />
//         </div>

//         {/* start or pause div */}
//         <div className=" h-20 w-full flex justify-center items-center">
//           <button
//             onClick={startPause}
//             className="px-4 py-3 text-gray-700 bg-white h-16 w-48 text-3xl rounded-lg">
//             {start === "Pause" ? "START" : "PAUSE"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TimerCard;
