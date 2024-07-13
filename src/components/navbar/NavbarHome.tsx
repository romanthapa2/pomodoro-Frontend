import React from "react";
const NavbarHome : React.FC = () =>{
    return(
    <div className="flex justify-center gap-52 p-1 h-16 bg-gray-400 items-center mx-96">
        <div>
        <h1>Pomofocus</h1>
        </div>
        <div className="flex space-x-5">
            <button className="px-4 py-1 bg-slate-400">Report</button>
            <button className="">Settings</button>
            <button className="">Sign In</button>
            <button className=""></button>
        </div>
    </div>
    )}

export default NavbarHome;