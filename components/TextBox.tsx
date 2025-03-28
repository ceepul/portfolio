import { FunctionComponent } from 'react';

interface TextBoxProps {
  text: string;
  className?: string;
}

const TextBox: FunctionComponent<TextBoxProps> = ({ text, className }) => (

  <div className={`${className} py-4`}>
    <p className='p'>{text}</p>
  </div>
);

export default TextBox;
