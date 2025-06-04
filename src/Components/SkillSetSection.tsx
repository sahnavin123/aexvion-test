/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "./ui/button";

const SkillSetSection = ({ data }: any) => {
  return (
    <div className=" flex flex-col p-6 gap-1 border-2 border-gray-200 rounded-lg">
      <p className="text-lg font-semibold mb-4">Skillsets</p>
      <div className="grid grid-cols-3 gap-x-40 gap-y-4 overflow-hidden">
        {data.map(({ name, img }: any, index: number) => (
          <div key={index} className="flex w-[150px]  items-center gap-2">
            <img src={img} alt={name} height="24px" width="24px" />
            <span className="text-sm font-medium">{name}</span>
          </div>
        ))}
        <div className="flex items-center justify-end">
          <Button
            variant={"outline"}
            size={"sm"}
            className="text-xs font-semibold"
          >
            <span className="text-lg">+</span> Addons
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SkillSetSection;
