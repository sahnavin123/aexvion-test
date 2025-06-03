import SideBar from "./SideBar";
import Header from "./Header";
import FilterTab from "./FilterTab";
import { MidSection } from "./MidSection";
import { useState } from "react";
import { profiles } from "@/constant";
import { ProfileDetails } from "./ProfileDetails";

const TeamManagement = () => {
  const [profile, setProfile] = useState(profiles[0]);
  const [showProfile, setShowProfile] = useState<boolean>(false);
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex h-full">
        <SideBar />
        {/* center screen */}
        <div
          className={`${
            showProfile ? "min-w-[636px] border-r-2 border-gray-300" : "w-full"
          }`}
        >
          <FilterTab />
          <MidSection setProfile={setProfile} setShowProfile={setShowProfile} />
        </div>
        {showProfile && <ProfileDetails data={profile} />}
      </div>
    </div>
  );
};

export default TeamManagement;
