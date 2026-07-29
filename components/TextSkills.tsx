'use client';

import { FunctionComponent } from 'react';
import useInView from '@/hooks/useInView';

interface SkillsProps {
  skills: string[];
  className?: string;
}

const TextSkills: FunctionComponent<SkillsProps> = ({ skills, className }) => {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <div ref={ref} className={className}>
      <h3 className="h2 text-sm uppercase tracking-[0.2em]">Skills Summary</h3>
      <div className="mt-4 flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          // The wrapper owns the staggered entrance so the chip's own hover
          // transition is never delayed by it
          <div
            key={skill}
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0) scale(1)' : 'translateY(10px) scale(0.94)',
              transition:
                'opacity 0.55s cubic-bezier(0.22,1,0.36,1), transform 0.55s cubic-bezier(0.34,1.4,0.64,1)',
              transitionDelay: `${index * 45}ms`,
            }}
          >
            <span className="text-bubble inline-block rounded-full px-4 py-1.5 text-sm">
              {skill}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextSkills;
