import { mdiAccountMultipleOutline, mdiCreditCardOutline } from "@mdi/js";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import Icon from "@mdi/react";

const tabItems = [
  { value: "team", label: "Team", icon: mdiAccountMultipleOutline },
  {
    value: "billing",
    label: "Billing & Subscription",
    icon: mdiCreditCardOutline,
  },
];

const Header = () => {
  return (
    <div className="flex items-center border-b-2 border-gray-300 ">
      <div className="w-[217.5px] flex items-center justify-center space-x-2 px-3 py-3 gap-2 border-x-2">
        <img
          className="cursor-pointer"
          src="/logo.svg"
          height={24}
          width={24}
          alt="logo"
        />
        <p className="text-black font-bold">Aexvion</p>
        <img className="cursor-pointer" src="/side-bar.svg" alt="side-bar" />
      </div>
      <div className="flex items-center gap-6 px-4">
        <p className="font-bold">Management</p>
        <Tabs defaultValue="team" className="w-full">
          <TabsList className="bg-white space-x-2">
            {tabItems.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="group relative  data-[state=active]:bg-gray-50 rounded-md px-4 py-4 text-sm font-medium cursor-pointer text-gray-500 data-[state=active]:shadow-none rounded-"
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
      </div>
    </div>
  );
};

export default Header;
