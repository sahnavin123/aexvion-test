import React from "react";
import { Input } from "./ui/input";
import { mdiChevronDown, mdiFilterOutline, mdiMagnify } from "@mdi/js";
import Icon from "@mdi/react";
import { Button } from "./ui/button";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

const FilterTab = () => {
  return (
    <div className="py-3">
      <div className="flex gap-3 items-center w-full px-4 justify-between ">
        <div className="flex justify-start gap-3 items-center">
          <div className="relative">
            <Icon
              path={mdiMagnify}
              size="20px"
              className="absolute top-1.5 left-1 text-gray-400 pointer-events-none"
            />
            <Input
              type="text"
              placeholder="Search"
              className="pl-8 h-8 w-[280px]"
            />
          </div>
          <div className="w-px h-6 bg-gray-300" />
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className=" text-gray-400 text-xs"
            >
              <img src="/arrow.svg" alt="arrow" height="16px" width="16px" />
              <span>Recent</span>
              <Icon path={mdiChevronDown} size="16px" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              className=" text-gray-400 text-xs"
            >
              <span>Recent</span>
              <Icon path={mdiFilterOutline} size="16px" />
            </Button>
          </div>
        </div>
        <Tabs defaultValue="menue">
          <TabsList className="h-[34px]">
            <TabsTrigger value="tab" className="cursor-pointer">
              <img src="/tab.svg" height="16px" width="16px" />
            </TabsTrigger>
            <TabsTrigger value="menue" className="cursor-pointer">
              <img src="/menue.svg" height="16px" width="16px" />
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};

export default FilterTab;
