import React from "react";
import { MdOutlineAssignmentInd } from "react-icons/md";
import TimeSettings from "./settings/TimeSettingOpener";
// import { PiDotsThreeOutlineVerticalThin } from "react-icons/pi";
import ViewReport from "./report/ViewReport";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const NavbarHome: React.FC = () => {
  const cookie = Cookies.get("accessToken");
  const removeCookie = () => {
    Cookies.remove("accessToken");
    window.location.reload();
  };
  return (
    <div className="text-white flex flex-row items-center p-4 justify-center gap-[15%] overflow-x-hidden">
      <div className="flex justify-center items-center gap-2">
        <img src="/icon-white2.png" alt="" className="w-5 h-5"/>
        <h1 className="text-2xl font-semibold">Pomofocus</h1>
      </div>
      <div className="flex gap-2 text-xl md:text-sm items-center justify-center">
        <ViewReport />
        <TimeSettings />
        {!cookie ? (
          <button className="bg-gray-600 items-center justify-center p-2 rounded-md h-16 w-16 md:h-fit md:w-fit">
          <Link
            to="/signup"
            className="flex gap-1"
          >
            <MdOutlineAssignmentInd className="text-2xl md:text-xl"/>
            <span className="hidden md:inline-block">Sign In </span>
          </Link>
          </button>
        ) :  <button className="bg-slate-600 p-1.5 rounded-md gap-1" onClick={removeCookie}><span className=" md:inline-block">Log Out </span></button>
      }
      </div>
    </div>
  );
};

export default NavbarHome;
