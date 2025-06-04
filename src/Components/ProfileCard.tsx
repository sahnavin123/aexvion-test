/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardAction, CardContent } from "./ui/card";
import Icon from "@mdi/react";
import { Button } from "./ui/button";
import { BASE_PATH } from "@/constant";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const MAX_VISIBLE = 3;

const SkillAvatarGroup = ({
  skills,
}: {
  skills: { name: string; img: string }[];
}) => {
  const visible = skills.slice(0, MAX_VISIBLE);
  const remaining = skills.length - MAX_VISIBLE;

  return (
    <div className="flex -space-x-1 w-[208px] justify-center items-center">
      {visible.map((skill, index) => (
        <Avatar key={index} className="w-6 h-6 border  border-white shadow-sm">
          <AvatarImage src={skill.img} alt={skill.name} />
          <AvatarFallback className="text-xs">{skill.name[0]}</AvatarFallback>
        </Avatar>
      ))}

      {remaining > 0 && (
        <div className="w-6 h-6 z-40 flex items-center justify-center rounded-full bg-white border border-white shadow-sm text-xs font-medium text-gray-700">
          +{remaining}
        </div>
      )}
    </div>
  );
};

const ProfileCard = ({
  data,
  setProfile,
  setShowProfile,
  isActive,
  onToggle,
  showProfile,
}: {
  data: any;
  setProfile: any;
  setShowProfile: (value: boolean) => void;
  isActive: boolean;
  onToggle: () => void;
  showProfile: boolean;
}) => {
  const { name, role, img, roleIcon, details, badge, description, skillSet } =
    data;

  const handleClick = () => {
    if (isActive) {
      setShowProfile(false);
    } else {
      setProfile(data);
      setShowProfile(true);
    }
    onToggle();
  };
  return (
    <Card className="p-3">
      <div className="flex items-center justify-between">
        <CardContent className="flex p-0 w-full justify-between">
          <div className="flex gap-4 w-[180px]">
            <img src={img} height="48px" width="48px" />
            <div>
              <p className="font-medium">{name}</p>
              <div className="text-gray-600 flex gap-1">
                <Icon path={roleIcon} size="20px" />
                <p className="text-sm">{role}</p>
              </div>
            </div>
          </div>
          <div
            className={`flex items-center  gap-[26px] 
              ${!showProfile ? "w-[480px]" : ""} `}
          >
            <div className="w-[44px] flex items-center justify-evenly gap-1">
              {details.orgLogo && (
                <img src={details.orgLogo} height="20" width="20" />
              )}
              {badge && <img src={badge} height="20" width="20" />}
            </div>

            <div className="w-full">
              {!showProfile && (
                <p className="text-sm text-[#666D80] font-[400] max-w-[376px] leading-[150%]">
                  {description.split(".")[0]}.
                </p>
              )}
            </div>
          </div>
          <SkillAvatarGroup skills={skillSet} />
        </CardContent>
        <CardAction>
          <Button
            variant="outline"
            className="text-sm font-[600]"
            onClick={handleClick}
          >
            {!isActive && (
              <img src={`${BASE_PATH}/expand.svg`} height="20px" width="20px" />
            )}
            <p>{isActive ? "Hide" : "Details"}</p>
            {isActive && (
              <img src={`${BASE_PATH}/hide.svg`} height="20px" width="20px" />
            )}
          </Button>
        </CardAction>
      </div>
    </Card>
  );
};

export default ProfileCard;
