import { skillData } from "@/data/StaticData";

import { FC } from "react";

export type skillProps = {
  skillName: string;
  imgPath?: string;
  percentage?: number;
};

export const Skill: FC<skillProps> = ({ imgPath, skillName }) => {
  return (
    <div className="w-52 h-52 bg-secondary rounded-2xl m-4 p-10 flex flex-col justify-between items-center shadow-lg">
      <img className="w-16" src={imgPath}></img>
      <h1 className="font-bold text-lg text-slate-100">{skillName}</h1>
    </div>
  );
};

export const SkillPercentageBar: FC<skillProps> = ({
  skillName,
  percentage,
}) => {
  return (
    <div className="my-4 flex items-center justify-between font-bold max-lg:flex-col">
      <span className="">{skillName}</span>
      <div className="w-10/12 h-2.5 bg-accent">
        <div
          className="bg-action h-2.5"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

const SkillList = () => {
  // const [checked, setChecked] = useState(true);
  skillData.sort((a, b) => (b.percentage || 0) - (a.percentage || 0));
  return (
    <div id="skills" className="pt-7 pb-16 shadow-inner">
      <div className="flex flex-col items-center">
        <div className="flex justify-center">
          <h1 className="text-5xl font-medium m-6">Skills</h1>
          {/* <ToggleSwitch
            checked={checked}
            setChecked={(checked) => setChecked(checked)}
          /> */}
        </div>
        {/* {!checked && (
          <div className="flex justify-center flex-wrap">
            {skillData.map((skill, index) => (
              <Skill
                key={index}
                imgPath={skill.imgPath}
                skillName={skill.skillName}
              ></Skill>
            ))}
          </div>
        )} */}

        <div className="w-3/4 flex flex-col gap-3">
          {skillData.map((skill, index) => (
            <SkillPercentageBar
              key={index}
              percentage={skill.percentage}
              skillName={skill.skillName}
            ></SkillPercentageBar>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillList;