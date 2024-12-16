'use client';

import Image from 'next/image';
import { useState, useEffect, FunctionComponent } from 'react';

interface ProjectProps {
  id?: string;
  title: string;
  description: string;
  details?: string[];
  images: { alt: string; src: string; video?: boolean }[];
  flip?: boolean;
  className?: string;
}

interface ImageProps {
  src: string;
  alt: string;
}

interface VideoProps {
  src: string;
  alt?: string;
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
  id, title, description, details, images, flip, className,
}) => {
  const isLargeScreen = useScreenSize();

  const renderImage = (image: ImageProps) => (
    <Image
      src={image.src}
      alt={image.alt}
      className="object-cover h-full rounded-lg shadow-md"
      width={600}
      height={800}
    />
  );

  const renderVideo = (video: VideoProps) => (
    <video
      className="object-cover h-full rounded-lg shadow-md"
      width={600}
      height={800}
      autoPlay
      loop
      muted
      preload="auto"
      playsInline
      poster={video.src}
    >
      <source src={video.src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );

  const renderGallery = () => {
    const imageCount = images.length;

    if (imageCount === 1) {
      return (
        <div className="h-[480px]">
          {images[0].video ? renderVideo(images[0]) : renderImage(images[0])}
        </div>
      );
    } if (imageCount === 2) {
      return (
        <div className="grid grid-rows-2 gap-4 h-[480px]">
          {images.map((media, index) => (media.video ? (
            <div key={index}>{renderVideo(media)}</div>
          ) : (
            <div key={index}>{renderImage(media)}</div>
          )))}
        </div>
      );
    } if (imageCount === 3) {
      return (
        <div className="grid grid-rows-5 grid-cols-2 gap-4 h-[480px]">
          <div className="row-span-2 col-span-2">
            {images[0].video ? renderVideo(images[0]) : renderImage(images[0])}
          </div>
          {images.slice(1).map((media, index) => (
            <div key={index} className="row-span-3 col-span-1">
              {media.video ? renderVideo(media) : renderImage(media)}
            </div>
          ))}
        </div>
      );
    } if (imageCount === 4) {
      return (
        <div className="grid grid-rows-10 grid-cols-2 gap-4 h-[480px]">
          <div className="row-span-4 col-span-2">
            {images[0].video ? renderVideo(images[0]) : renderImage(images[0])}
          </div>
          <div className="row-span-6 col-span-1">
            {images[1].video ? renderVideo(images[1]) : renderImage(images[1])}
          </div>
          <div className="row-span-3 col-span-1">
            {images[2].video ? renderVideo(images[2]) : renderImage(images[2])}
          </div>
          <div className="row-span-3 col-span-1">
            {images[3].video ? renderVideo(images[3]) : renderImage(images[3])}
          </div>
        </div>
      );
    } return <div></div>;
  };

  return (
  <div id={id} className={className}>
    <div className='flex flex-col sm:flex-row justify-between items-center sm:items-start gap-8 sm:gap-12'>
      {(!flip || !isLargeScreen) && <div className='w-80 shrink-0 flex'>
        {renderGallery()}
      </div>}
      <div>
        <div className='h1'>{title}</div>
        <h4 className='h4 mt-1'>{description}</h4>
        {details && <h2 className='h2 mt-10'>Details</h2>}
        {details?.map((detail, index) => (
          <div key={index} className='flex items-start gap-1'>
            <p className='p mt-[0.4rem]'>-</p>
            <div className='p mt-2'>{detail}</div>
          </div>
        ))}
      </div>
      {flip && isLargeScreen && <div className='w-80 shrink-0 flex'>
        {renderGallery()}
      </div>}
    </div>
  </div>
  );
};

export default ProjectSection;
