import { FunctionComponent } from 'react';

interface SkillsProps {
  skills: string[];
  className?: string;
}

const TextSkills: FunctionComponent<SkillsProps> = ({ skills, className }) => (
  <div className={className}>
    <h3 className="text-xl tracking-normal">Skills Summary</h3>
    <div className="flex flex-wrap gap-4 p-4 mt-2 rounded-lg border-2 border-neutral-400">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center gap-2 rounded-lg text-white"
        >
          <div className='font-extralight bg-neutral-800 py-1 px-4 rounded-2xl'>{skill}</div>
        </div>
      ))}
    </div>
  </div>
);

export default TextSkills;
