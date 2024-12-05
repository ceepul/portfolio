import { FunctionComponent } from 'react';
import Link from 'next/link';

const Footer: FunctionComponent = () => (

  <footer className="bg-neutral-900 shadow-inner p-10 mt-20 w-full">
    <div className="flex flex-col items-center text-center space-y-6">
      <div>
        <p className="h1">{'I\'m currently looking for work.'}</p>
        <p className='h3 mt-2'>Feel free to reach out!</p>
      </div>
      <Link
        href="/contact"
        className="h2 px-5 py-3 border-2 border-neutral-800 rounded-2xl shadow-lg hover:bg-neutral-800 transition duration-300"
      >
        Contact Me
      </Link>
    </div>
  </footer>
);

export default Footer;
