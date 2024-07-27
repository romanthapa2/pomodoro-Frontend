import React from "react";
import NavbarHome from "../navbar/NavbarHome";
import Timer from "./timercard/Timer"
import Task from "./tasks/Task";

const Home: React.FC = () => {
  return (
    <>
    <div className="h-fit bg-gray-900">
      <NavbarHome />
      <Timer/>
      <Task/>
    </div>
    </>
  );
};

export default Home;
