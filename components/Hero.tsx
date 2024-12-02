import { FunctionComponent } from "react";

interface HeroProps {
  state: 'hero' | 'content';
}

const Hero: FunctionComponent<HeroProps> = ({ state }) => {
  console.log(state)
  return (
    <div className={`hero-state ${state === 'hero' ? 'opacity-100' : 'opacity-0'}`}>
      <h1 className="text-4xl font-bold text-center text-white">Hi, I'm Russell</h1>
      <div className="flex justify-center gap-4">
        {/* Render Hero Image Cards */}
      </div>
    </div>
  );
}

export default Hero;