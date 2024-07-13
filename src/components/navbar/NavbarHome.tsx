import React from "react";
import { TbReportAnalytics  } from "react-icons/tb";
import { MdOutlineAssignmentInd } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { PiDotsThreeOutlineVerticalThin } from "react-icons/pi";

const NavbarHome : React.FC = () =>{
    return(
    <div className="text-white flex flex-row items-center p-4 justify-center gap-[15%] overflow-x-hidden">
        <div>
        <h1 className="text-2xl">Pomofocus</h1>
        </div>
        <div className="flex gap-2 text-xl md:text-sm">
            <button className="bg-gray-600 flex flex-row items-center p-2 rounded-md  gap-1">
            <TbReportAnalytics/>
            <span className="hidden md:inline-block ">Report</span>
                </button>
            <button className="bg-gray-600 flex flex-row items-center p-2 rounded-md  gap-1">
            <IoSettingsOutline />
            <span className="hidden md:inline-block">Settings</span>
                </button>
            <button className="bg-gray-600 flex flex-row items-center p-2 rounded-md  gap-1">
            <MdOutlineAssignmentInd />
            <span className="hidden md:inline-block">Sign In </span>
            </button>
            <button className="bg-gray-600 flex flex-row items-center rounded-md  p-2 ">
            <PiDotsThreeOutlineVerticalThin />
            </button>
        </div>
    </div>
    )}

export default NavbarHome;