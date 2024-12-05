import { FunctionComponent, ReactNode } from 'react';

interface Skill {
  label: string;
  symbol?: ReactNode;
}

interface SkillsProps {
  skills: Skill[];
  className?: string;
}

const IconSkills: FunctionComponent<SkillsProps> = ({ skills, className }) => (
  <div className={className}>
   {/*  <h3 className="text-xl tracking-normal">Skills Summary</h3> */}
    <div className="flex flex-wrap gap-8 p-4 mt-2 rounded-lg shadow-lg bg-neutral-800">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex flex-col w-16 items-center justify-center gap-2 rounded-lg text-white"
        >
          {skill.symbol && (
            <div className="flex items-center justify-center h-12 w-12">{skill.symbol}</div>
          )}
          <div className='font-extralight'>{skill.label}</div>
        </div>
      ))}
    </div>
  </div>
);

export default IconSkills;
