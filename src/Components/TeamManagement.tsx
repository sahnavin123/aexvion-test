import React from "react";
import SideBar from "./SideBar";
import Header from "./Header";

const TeamManagement = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <SideBar />
      </div>
    </div>
  );
};

export default TeamManagement;
