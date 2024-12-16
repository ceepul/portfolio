import { FunctionComponent } from 'react';
import Link from 'next/link';

const Footer: FunctionComponent = () => (

  <footer className="shadow-md p-10 w-full">
    <div className="flex flex-col items-center text-center space-y-6">
      <div>
        <h1 className="h1">{'I\'m currently looking for work.'}</h1>
        <h3 className='h3 mt-2'>Feel free to reach out!</h3>
      </div>
      <Link
        href="/contact"
        className="h2 button px-5 py-3 border-2 rounded-2xl shadow-lg transition duration-300"
      >
        Contact Me
      </Link>
    </div>
  </footer>
);

export default Footer;
