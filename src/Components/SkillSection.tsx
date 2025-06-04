/* eslint-disable @typescript-eslint/no-explicit-any */

const SkillSection = ({ data }: { data: any }) => {
  return (
    <div className="flex flex-col p-6 gap-1 border-2 border-gray-200 rounded-lg">
      <p className="text-lg font-bold">Skills</p>
      <ul className="list-disc list-outside px-6 text-sm text-gray-500">
        {data.map((skill: any, index: number) => (
          <li key={index}>
            <span className=" text-sm font-semibold text-gray-500">
              {skill.title}
            </span>
            <span className=" text-sm text-gray-500">
              {" "}
              – {skill.description}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillSection;
