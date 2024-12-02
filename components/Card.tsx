import { forwardRef } from "react";
import Image from 'next/image';

interface CardProps {
  id: string;
  media: string;
  mediaAlt: string;
}

const Card = forwardRef<HTMLDivElement, CardProps>(({ id, media, mediaAlt }, ref) => {
  return (
    <div className='card' id={id} ref={ref}>
      <div className="card-wrapper">
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
});

export default Card;
