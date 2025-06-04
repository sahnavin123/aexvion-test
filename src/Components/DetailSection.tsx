/* eslint-disable @typescript-eslint/no-explicit-any */
import Icon from "@mdi/react";

const DetailSection = ({ icon, details }: any) => {
  const { workedAt, teamType, lastUpdatedAt, orgLogo } = details;
  return (
    <div className="flex flex-col p-6 gap-1 border-2 border-gray-200 rounded-lg">
      <p className="text-lg font-bold text-black">Details</p>
      <div className="grid grid-cols-2 gap-y-4 text-sm text-gray-700">
        <div className="flex flex-col gap-1">
          <span className="text-black font-semibold">Worked at</span>{" "}
          <span className="flex items-center gap-1">
            {details.orgLogo && (
              <img height="20px" width="20px" src={orgLogo} />
            )}
            {workedAt}
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-black font-semibold">Team Type</span>
          <span className="flex items-center gap-1 text-gray-500">
            <Icon path={icon} size="20px" /> {teamType}
          </span>
        </div>

        <div className="flex flex-col col-span-2">
          <span className="text-black font-semibold gap-1">Last Updated</span>
          <span className="text-gray-500">{lastUpdatedAt}</span>
        </div>
      </div>
    </div>
  );
};

export default DetailSection;
