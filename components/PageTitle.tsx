import { FunctionComponent } from 'react';
import Reveal from './Reveal';

interface PageProps {
  headingText?: string;
  bgText: string;
  className?: string;
}

const PageTitle: FunctionComponent<PageProps> = ({ headingText, bgText, className }) => (
  <div className={className}>
    <Reveal y={30}>
      <h1 className="bg-text text-[3.25rem] leading-[0.95] tracking-tighter sm:text-8xl sm:leading-none lg:text-9xl font-semibold">
        {bgText}
      </h1>
    </Reveal>
    {headingText && (
      <Reveal delay={140} y={14}>
        {/* Tucks into the empty space under the ghost word's baseline rather
            than striking through its letterforms */}
        <h2 className="h2 -mt-4 text-lg tracking-[0.12em] sm:-mt-7 sm:text-xl lg:-mt-9 lg:text-2xl">
          {headingText}
        </h2>
      </Reveal>
    )}
  </div>
);

export default PageTitle;
