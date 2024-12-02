'use client'

import { FunctionComponent } from "react";
import Image from 'next/image';

interface CardProps {
  id: string;
  media: string;
  mediaAlt: string;
  className?: string;
}

const Card: FunctionComponent<CardProps> = ({ id, media, mediaAlt, className }) => {
  return (
    <div className={`card ${className}`} id={id}>
      <div className='card-wrapper'>
        <div className="card-media">
          <Image 
            priority
            src={media}
            width={400}
            height={600}
            alt={mediaAlt}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
