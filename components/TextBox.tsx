import { FunctionComponent } from 'react';

interface TextBoxProps {
  text: string;
  className?: string;
}

const TextBox: FunctionComponent<TextBoxProps> = ({ text, className }) => (

  <div className={`${className} p py-4`}>
    <p>{text}</p>
  </div>
);

export default TextBox;
