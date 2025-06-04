import { Button } from "./ui/button";
import Icon from "@mdi/react";
import { mdiAccountCogOutline, mdiShareVariantOutline } from "@mdi/js";
import BenchmarkDonutChart from "./BenchmarkDonutChart";
import SkillSection from "./SkillSection";
import DetailSection from "./DetailSection";
import SkillSetSection from "./SkillSetSection";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ProfileDetails = ({ data }: { data: any }) => {
  const {
    name,
    role,
    roleIcon,
    img,
    description,
    chartData,
    skills,
    details,
    skillSet,
  } = data;
  return (
    <div className="p-4 w-full flex flex-col gap-6 overflow-y-scroll">
      <div className="flex items-center gap-6">
        <img src={img} height="128px" width="128px" />
        <div>
          <p className="text-2xl font-bold">{name}</p>
          <p className="font-medium text-gray-500">{role}</p>
        </div>
      </div>
      <div className="flex items-center gap-2 justify-end">
        <Button variant="outline" className="text-gray-400">
          <Icon path={mdiShareVariantOutline} size="24px" />
        </Button>
        <Button className="bg-[#4E57EF]">
          <Icon path={mdiAccountCogOutline} />
          <span>Manage</span>
        </Button>
      </div>

      <div className=" flex flex-col p-6 gap-1 border-2 border-gray-200 rounded-lg">
        <p className="text-lg font-bold">Description</p>
        <p className="text-xs font-[400] text-gray-500">{description}</p>
      </div>
      <BenchmarkDonutChart data={chartData} />
      <SkillSection data={skills} />
      <SkillSetSection data={skillSet} />
      <DetailSection icon={roleIcon} details={details} />
    </div>
  );
};
