import React from "react";
import NavbarHome from "../navbar/NavbarHome";
import Timer from "./timercard/Timer"
import Task from "./tasks/Task";

const Home: React.FC = () => {
  return (
    <>
    <div className="min-h-screen bg-gray-900 overflow-hidden">
      <NavbarHome />
      <Timer/>
      <Task/>
    </div>
    </>
  );
};

export default Home;
