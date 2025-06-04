/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  mdiAccountMultipleOutline,
  mdiAccountOutline,
  mdiShapePlusOutline,
} from "@mdi/js";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import Icon from "@mdi/react";
import ProfileCard from "./ProfileCard";
import { profiles } from "@/constant";
import { useState } from "react";

const tabItems = [
  { value: "individual", label: "Individual", icon: mdiAccountOutline },
  {
    value: "teams",
    label: "Teams",
    icon: mdiAccountMultipleOutline,
  },
  {
    value: "plugins",
    label: "Plugins",
    icon: mdiShapePlusOutline,
  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const MidSection = ({
  setProfile,
  setShowProfile,
  showProfile,
}: {
  setProfile: any;
  setShowProfile: (value: boolean) => void;
  showProfile: boolean;
}) => {
  const [activeProfileIndex, setActiveProfileIndex] = useState<number | null>(
    null
  );

  return (
    <div>
      <Tabs
        defaultValue="individual"
        className="w-full border-b-2 border-t-2 border-gray-300"
      >
        <TabsList className="bg-white space-x-2">
          {tabItems.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="group relative  rounded-md px-4 py-4 text-sm font-medium cursor-pointer text-gray-500 data-[state=active]:shadow-none rounded-"
            >
              <Icon
                className="group-data-[state=active]:text-blue-700"
                path={tab.icon}
                size="20px"
              />
              <span className="group-data-[state=active]:text-black">
                {tab.label}
              </span>
              <span className="absolute -bottom-[2px] left-1/2 -translate-x-1/2 w-[70%]  h-[4px] bg-blue-700 rounded-t-lg opacity-0 group-data-[state=active]:opacity-100 transition-opacity"></span>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      <div className="flex flex-col gap-4 p-6 ">
        {profiles.map((data, index) => (
          <ProfileCard
            key={index}
            setProfile={setProfile}
            data={data}
            showProfile={showProfile}
            setShowProfile={setShowProfile}
            isActive={activeProfileIndex === index}
            onToggle={() =>
              setActiveProfileIndex((prev) => (prev === index ? null : index))
            }
          />
        ))}
      </div>
    </div>
  );
};
