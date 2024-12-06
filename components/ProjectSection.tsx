'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, FunctionComponent } from 'react';

interface ProjectProps {
  id?: string;
  title: string;
  description: string;
  details?: string[];
  imgSrc: string;
  imgAlt: string;
  imgLink?: string;
  flip?: boolean;
  className?: string;
}

const useScreenSize = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 640px)');
    const handleResize = () => setIsLargeScreen(mediaQuery.matches);

    // Set initial value
    handleResize();

    // Add listener
    mediaQuery.addEventListener('change', handleResize);

    // Cleanup listener on unmount
    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  return isLargeScreen;
};

const ProjectSection: FunctionComponent<ProjectProps> = ({
  id, title, description, details, imgSrc, imgAlt, imgLink, flip, className,
}) => {
  const isLargeScreen = useScreenSize();

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
  <div id={id} className={className}>
    <div className='flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4 sm:gap-12'>
      {(!flip || !isLargeScreen) && <div className='w-96 object-cover'>
        {imageJSX}
      </div>}
      <div>
        <div className='h1'>{title}</div>
        <div className='h3 mt-1'>{description}</div>
        {details && <div className='h2 mt-10'>Details</div>}
        {details?.map((detail, index) => (
          <div key={index} className='p mt-1'>{`- ${detail}`}</div>
        ))}
      </div>
      {flip && isLargeScreen && <div className='w-96 object-cover'>
        {imageJSX}
      </div>}
    </div>
  </div>
  );
};

export default ProjectSection;
