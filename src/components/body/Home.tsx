import React from "react";
import NavbarHome from "../navbar/NavbarHome";
import Timer from "./Timer";

const Home: React.FC = () => {
  return (
    <div className="h-screen bg-gray-900">
      <NavbarHome />
      <Timer/>
    </div>
  );
};

export default Home;
