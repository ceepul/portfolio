import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const myName = 'Russell Fenton';
  const linkedinURL = 'https://www.linkedin.com/in/russell-fenton-760a7a299/';
  const githubURL = 'https://github.com/ceepul';

  return (
    <header className="top-0 z-50 flex items-center h-20 p-4 sm:p-8 shadow-md">
      <nav className="w-full mx-auto flex justify-between items-center">
        <div className='mr-4'>
          <Link href="/">
            <div className="h2 heading-hover">{myName}</div>
          </Link>
        </div>
        <div className='flex items-center gap-8 sm:gap-12'>
          <ThemeToggle />
          <div>
            <a
              href={linkedinURL}
              target="_blank"
              className="h2 heading-hover"
            >
              LinkedIn
            </a>
          </div>
          <div>
            <a
              href={githubURL}
              target="_blank"
              className="h2 heading-hover"
            >
              GitHub
            </a>
          </div>
          <div>
            <Link href="/contact">
              <div className="h2 heading-hover">Contact</div>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
