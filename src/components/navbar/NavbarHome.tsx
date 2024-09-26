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
      <div>
        <h1 className="text-2xl">Pomofocus</h1>
      </div>
      <div className="flex gap-2 text-xl md:text-sm">
        <ViewReport />
        <TimeSettings />
        {!cookie ? (
          <button>
          <Link
            to="/signup"
            className="bg-gray-600 flex flex-row items-center p-2 rounded-md  gap-1"
          >
            <MdOutlineAssignmentInd />
            <span className=" md:inline-block">Sign In </span>
          </Link>
          </button>
        ) :  <button className="bg-slate-600 p-1.5 rounded-md gap-1" onClick={removeCookie}><span className=" md:inline-block">Log Out </span></button>
      }
      </div>
    </div>
  );
};

export default NavbarHome;
