import Image from 'next/image';
import Link from 'next/link';
import { FunctionComponent } from 'react';

interface ProjectProps {
  title: string;
  description: string;
  details?: string[];
  imgSrc: string;
  imgAlt: string;
  imgLink?: string;
  className?: string;
}

const ProjectSection: FunctionComponent<ProjectProps> = ({
  title, description, details, imgSrc, imgAlt, imgLink, className,
}) => {
  const imageJSX = (
    imgLink ? <Link href={imgLink}>
      <Image
        src={imgSrc}
        alt={imgAlt}
        width={400}
        height={600}
      />
    </Link>
      : <Image
        src={imgSrc}
        alt={imgAlt}
        width={400}
        height={600}
      />
  );

  return (
  <div className={className}>
    <div className='flex flex-col sm:flex-row justify-between gap-4 sm:gap-12'>
      <div className=''>
        {imageJSX}
      </div>
      <div>
        <div className='text-2xl sm:text-3xl font-light'>{title}</div>
        <div className='mt-1 text-neutral-400 text-sm sm:text-md'>{description}</div>
        {details && <div
          className='mt-6 text-sm sm:text-md'
        >Details</div>}
        {details?.map((detail, index) => (
          <div key={index} className='text-sm sm:text-md mt-1 text-neutral-400'>{`- ${detail}`}</div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default ProjectSection;
