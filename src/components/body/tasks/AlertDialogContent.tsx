import { useState } from "react"

const AlertContent = () => {
  const [no,setNo] = useState<number>(1);
  const handleIncrease =()=>{
    setNo(no+1)
  }
  const handleDecrease =()=>{
    setNo(no-1)
  }

  return (
    <>
    <input className="focus:outline-none focus:border-none text-2xl" type="text" autoFocus placeholder="What are you working on?"/>
    <h2 className="font-medium">Estimated Pomodoros</h2>
    <div className="">
      <input  className="bg-slate-300  px-2 py-1 text-lg rounded" min="1" max="20" value={no} type="number"></input>
      <button className="mx-4 border px-2 py-1 text-lg rounded" onClick={handleIncrease}>up</button>
      <button className="border px-2 py-1 text-lg rounded" onClick={handleDecrease}>down</button>
    </div>
    </>
  )
}

export default AlertContent
