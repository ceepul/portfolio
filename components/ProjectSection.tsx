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
    imgLink
      ? <Link href={imgLink}>
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={480}
          height={600}
          className='mt-1 rounded-lg object-cover'
        />
      </Link>
      : <Image
        src={imgSrc}
        alt={imgAlt}
        width={480}
        height={600}
        className='mt-1 rounded-lg object-cover'
      />
  );

  return (
  <div id={id} className={className}>
    <div className='flex flex-col sm:flex-row justify-between items-center sm:items-start gap-8 sm:gap-12'>
      {(!flip || !isLargeScreen) && <div className='w-80 h-[400px] shrink-0 flex'>
        {imageJSX}
      </div>}
      <div>
        <div className='h1'>{title}</div>
        <div className='h3 mt-1'>{description}</div>
        {details && <div className='h2 mt-10'>Details</div>}
        {details?.map((detail, index) => (
          <div key={index} className='flex items-start gap-1'>
            <p className='mt-[0.4rem]'>-</p>
            <div className='p mt-2'>{detail}</div>
          </div>
        ))}
      </div>
      {flip && isLargeScreen && <div className='w-80 h-[400px] shrink-0 flex'>
        {imageJSX}
      </div>}
    </div>
  </div>
  );
};

export default ProjectSection;
