import { FunctionComponent } from 'react';

interface PageProps {
  headingText?: string;
  bgText: string;
  className?: string;
}

const PageTitle: FunctionComponent<PageProps> = ({ headingText, bgText, className }) => (
  <div className={className}>
    <h1 className="text-[3.25rem] sm:text-8xl lg:text-9xl leading-none text-neutral-700 font-semibold tracking-tighter">{bgText}</h1>
    {headingText && <h2 className='-mt-8 text-lg sm:-mt-12 sm:text-xl lg:-mt-14 lg:text-2xl'>{headingText}</h2>}
  </div>
);

export default PageTitle;
