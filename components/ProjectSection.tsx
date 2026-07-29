'use client';

import Image from 'next/image';
import {
  useEffect, useRef, useState, FunctionComponent, ReactNode,
} from 'react';
import useInView from '@/hooks/useInView';
import Reveal from './Reveal';

interface ProjectProps {
  id?: string;
  title: string;
  description: string;
  details?: string[];
  action?: ReactNode;
  images: { alt: string; src: string; video?: boolean }[];
  flip?: boolean;
  className?: string;
}

interface MediaProps {
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

/** Shared frame: clips the hover zoom and keeps every tile visually identical. */
const Frame: FunctionComponent<{ children: ReactNode }> = ({ children }) => (
  <div className="group/media relative h-full w-full overflow-hidden rounded-xl shadow-soft ring-1 ring-black/[0.06] transition-shadow duration-500 ease-out-expo hover:shadow-lifted dark:ring-white/[0.08]">
    {children}
  </div>
);

const ProjectImage: FunctionComponent<MediaProps> = ({ src, alt }) => (
  <Frame>
    <Image
      src={src}
      alt={alt ?? ''}
      className="h-full w-full object-cover transition-transform duration-700 ease-out-expo group-hover/media:scale-[1.06]"
      width={600}
      height={800}
      sizes="(max-width: 640px) calc(100vw - 2rem), 320px"
    />
  </Frame>
);

/** Only plays while on screen — a page of looping videos is otherwise costly. */
const ProjectVideo: FunctionComponent<MediaProps> = ({ src }) => {
  const [wrapRef, inView] = useInView<HTMLDivElement>({ threshold: 0.25, once: false });
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (inView) {
      const playback = video.play();
      if (playback) playback.catch(() => {});
    } else {
      video.pause();
    }
  }, [inView]);

  return (
    <div ref={wrapRef} className="h-full w-full">
      <Frame>
        <video
          ref={videoRef}
          className="h-full w-full object-cover transition-transform duration-700 ease-out-expo group-hover/media:scale-[1.06]"
          width={600}
          height={800}
          loop
          muted
          preload="metadata"
          playsInline
          poster={src}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Frame>
    </div>
  );
};

const ProjectSection: FunctionComponent<ProjectProps> = ({
  id, title, description, details, action, images, flip, className,
}) => {
  const isLargeScreen = useScreenSize();

  const renderMedia = (media: { src: string; alt: string; video?: boolean }) => (media.video
    ? <ProjectVideo src={media.src} alt={media.alt} />
    : <ProjectImage src={media.src} alt={media.alt} />);

  const renderGallery = () => {
    const imageCount = images.length;

    if (imageCount === 1) {
      return <div className="h-[480px]">{renderMedia(images[0])}</div>;
    } if (imageCount === 2) {
      return (
        <div className="grid h-[480px] grid-rows-2 gap-4">
          {images.map((media, index) => (
            <div key={index}>{renderMedia(media)}</div>
          ))}
        </div>
      );
    } if (imageCount === 3) {
      return (
        <div className="grid h-[480px] grid-cols-2 grid-rows-5 gap-4">
          <div className="col-span-2 row-span-2">{renderMedia(images[0])}</div>
          {images.slice(1).map((media, index) => (
            <div key={index} className="col-span-1 row-span-3">
              {renderMedia(media)}
            </div>
          ))}
        </div>
      );
    } if (imageCount === 4) {
      return (
        <div className="grid h-[480px] grid-cols-2 grid-rows-10 gap-4">
          <div className="col-span-2 row-span-4">{renderMedia(images[0])}</div>
          <div className="col-span-1 row-span-6">{renderMedia(images[1])}</div>
          <div className="col-span-1 row-span-3">{renderMedia(images[2])}</div>
          <div className="col-span-1 row-span-3">{renderMedia(images[3])}</div>
        </div>
      );
    } return <div></div>;
  };

  const gallery = (
    <Reveal
      y={34}
      scale={0.97}
      className="flex w-80 shrink-0"
      // Offset the gallery slightly so the two columns do not land in unison
      delay={flip && isLargeScreen ? 90 : 0}
    >
      {renderGallery()}
    </Reveal>
  );

  return (
    <div id={id} className={className}>
      <div className="flex flex-col items-center justify-between gap-8 sm:flex-row sm:items-start sm:gap-12">
        {(!flip || !isLargeScreen) && gallery}

        <Reveal y={26} delay={flip && isLargeScreen ? 0 : 90}>
          <h3 className="h1">{title}</h3>
          <h4 className="h4 mt-1">{description}</h4>
          {action && <div className="mt-4">{action}</div>}
          {details && (
            <h2 className="h2 mt-10 text-sm uppercase tracking-[0.2em]">Details</h2>
          )}
          {details && (
            <ul className="mt-3 space-y-2">
              {details.map((detail, index) => (
                <li key={index} className="flex items-start gap-2.5">
                  <span
                    aria-hidden
                    className="mt-[0.7rem] h-px w-2.5 shrink-0 bg-fg-subtle"
                  />
                  <p className="p">{detail}</p>
                </li>
              ))}
            </ul>
          )}
        </Reveal>

        {flip && isLargeScreen && gallery}
      </div>
    </div>
  );
};

export default ProjectSection;
