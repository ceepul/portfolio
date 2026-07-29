import { FunctionComponent } from 'react';
import Reveal from './Reveal';

interface TextBoxProps {
  text: string;
  /** Stagger offset when several boxes sit in the same column. */
  delay?: number;
  className?: string;
}

const TextBox: FunctionComponent<TextBoxProps> = ({ text, delay = 0, className }) => (
  <Reveal delay={delay} y={16} className={`${className ?? ''} py-4`}>
    <p className="p max-w-prose">{text}</p>
  </Reveal>
);

export default TextBox;
