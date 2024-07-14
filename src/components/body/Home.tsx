import React from "react";
import NavbarHome from "../navbar/NavbarHome";
import TimerCard from "./timercard/TimerCard";

const Home: React.FC = () => {
  return (
    <div className="h-screen bg-gray-900">
      <NavbarHome />
      <TimerCard/>
    </div>
  );
};

export default Home;
