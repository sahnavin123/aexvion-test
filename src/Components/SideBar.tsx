import { BASE_PATH } from "@/constant";
import {
  mdiPlus,
  mdiHomeOutline,
  mdiWeb,
  mdiShieldAccountOutline,
  mdiCog,
  mdiFaceAgent,
  mdiChevronDown,
  mdiChevronUp,
} from "@mdi/js";
import Icon from "@mdi/react";
import { useState } from "react";

interface CustomTabProps {
  iconPath: string;
  label: string;
  size?: string | number;
  className?: string;
  isActive?: boolean;
  onClick?: () => void;
}

const CustomTab: React.FC<CustomTabProps> = ({
  iconPath,
  label,
  size = 20,
  className = "",
  isActive = false,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`flex rounded-lg items-center gap-2 cursor-pointer font-medium ${
        isActive ? "bg-[#F8F9FB] text-gray-900 " : "text-gray-500"
      } p-2 rounded ${className} relative`}
    >
      {isActive && (
        <div
          style={{ borderRadius: "50%" }}
          className="h-5 w-0.5 bg-[#4E57EF]  absolute left-0"
        />
      )}
      <Icon
        path={iconPath}
        size={`${size}px`}
        style={{ ...(isActive && { color: "#4E57EF" }) }}
      />
      <span>{label}</span>
    </div>
  );
};

const SideBar = () => {
  const [activeTopIndex, setActiveTopIndex] = useState<number>(0);
  const [activeBottomIndex, setActiveBottomIndex] = useState<number | null>(
    null
  );

  const tabs = [
    { iconPath: mdiHomeOutline, label: "Home" },
    { iconPath: mdiWeb, label: "Discover" },
    { iconPath: mdiShieldAccountOutline, label: "Management" },
  ];

  const bottomTabs = [
    { iconPath: mdiCog, label: "Settings" },
    { iconPath: mdiFaceAgent, label: "Help & Guide" },
  ];

  return (
    <div className="max-w-[224px]  border-x-2 border-gray-300">
      <div className="w-[217.5px] h-[48px] border-y-2 border-gray-300 flex items-center justify-center space-x-2 px-3 py-3 gap-2">
        <img
          className="cursor-pointer"
          src={`${BASE_PATH}/logo.svg`}
          height={24}
          width={24}
          alt="logo"
        />
        <p className="text-black font-bold">Aexvion</p>
        <img
          className="cursor-pointer"
          src={`${BASE_PATH}/side-bar.svg`}
          alt="side-bar"
        />
      </div>

      <div
        style={{ height: "calc(100% - 48px)" }}
        className="flex flex-col justify-between "
      >
        <div className="p-4">
          <button className="bg-[#F8F9FB] flex items-center justify-center cursor-pointer gap-2 font-semibold text-sm text-gray-800 rounded-xl border border-gray-200 shadow-sm px-14 py-2  mb-4 ">
            <Icon path={mdiPlus} size="20px" />
            <span>Create</span>
          </button>
          <div className="space-y-2">
            {tabs.map((tab, index) => (
              <CustomTab
                key={index}
                iconPath={tab.iconPath}
                label={tab.label}
                isActive={activeTopIndex === index}
                onClick={() => setActiveTopIndex(index)}
              />
            ))}
          </div>
        </div>
        {/* bottom div */}
        <div className="flex flex-col ">
          <div className="border-b-2 border-gray-300">
            <div className="space-y-2 p-4 ">
              {bottomTabs.map((tab, index) => (
                <CustomTab
                  key={index}
                  iconPath={tab.iconPath}
                  label={tab.label}
                  isActive={activeBottomIndex === index}
                  onClick={() => setActiveBottomIndex(index)}
                />
              ))}
            </div>
          </div>
          {/* profile */}
          <div className="flex justify-between p-4">
            <div className="flex gap-2">
              <img src={`${BASE_PATH}/profile.svg`} height={32} width={32} />
              <div>
                <p className="text-black font-medium text-sm">Harry Potter</p>
                <p className="text-xs text-gray-500 font-medium">Free</p>
              </div>
            </div>
            <div>
              <Icon
                path={mdiChevronUp}
                size="16px"
                style={{ color: "#808897" }}
              />
              <Icon
                path={mdiChevronDown}
                size="16px"
                style={{ color: "#808897" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
