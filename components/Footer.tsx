import { FunctionComponent } from 'react';
import Link from 'next/link';
import Reveal from './Reveal';

const Footer: FunctionComponent = () => (
  <footer className="w-full border-t border-line px-6 py-20">
    <Reveal className="flex flex-col items-center space-y-7 text-center">
      <div>
        <h2 className="h1">{'I\'m currently looking for work.'}</h2>
        <h3 className="h3 mt-2 text-fg-muted">Feel free to reach out!</h3>
      </div>
      <Link
        href="/contact"
        className="button group inline-flex items-center gap-2 rounded-full border px-6 py-3"
      >
        Contact Me
        <span
          aria-hidden
          className="transition-transform duration-400 ease-out-expo group-hover:translate-x-1"
        >
          →
        </span>
      </Link>
    </Reveal>
  </footer>
);

export default Footer;
