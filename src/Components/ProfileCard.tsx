/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardAction, CardContent } from "./ui/card";
import Icon from "@mdi/react";
import { Button } from "./ui/button";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProfileCard = ({
  data,
  setProfile,
  setShowProfile,
  isActive,
  onToggle,
}: {
  data: any;
  setProfile: any;
  setShowProfile: (value: boolean) => void;
  isActive: boolean;
  onToggle: () => void;
}) => {
  const { name, role, img, roleIcon } = data;

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
        <CardContent className="flex">
          <div className="flex gap-4">
            <img src={img} height="48px" width="48px" />
            <div>
              <p className="font-medium">{name}</p>
              <div className="text-gray-600 flex gap-1">
                <Icon path={roleIcon} size="20px" />
                <p className="text-sm">{role}</p>
              </div>
            </div>
          </div>
        </CardContent>
        <CardAction>
          <Button variant="outline" onClick={handleClick}>
            {!isActive && <img src="/expand.svg" height="20px" width="20px" />}
            <p>{isActive ? "Hide" : "Details"}</p>
            {isActive && <img src="/hide.svg" height="20px" width="20px" />}
          </Button>
        </CardAction>
      </div>
    </Card>
  );
};

export default ProfileCard;
