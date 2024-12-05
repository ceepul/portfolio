import Link from 'next/link';

export default function Header() {
  const myName = 'Russell Fenton';
  const linkedinURL = 'https://www.linkedin.com/in/russell-fenton-760a7a299/';
  const githubURL = 'https://github.com/ceepul';

  return (
    <header className="top-0 z-50 flex items-center h-20 p-4 sm:p-8 shadow-lg">
      <nav className="w-full mx-auto flex justify-between items-start">
        <div className='mr-4'>
          <Link href="/">
            <div className="h2 hover:text-gray-200">{myName}</div>
          </Link>
        </div>
        <div className='flex gap-8 sm:gap-12'>
          <div>
            <a
              href={linkedinURL}
              target="_blank"
              className="h2 hover:text-gray-200"
            >
              LinkedIn
            </a>
          </div>
          <div>
            <a
              href={githubURL}
              target="_blank"
              className="h2 hover:text-gray-200"
            >
              GitHub
            </a>
          </div>
          <div>
            <Link href="/contact">
              <div className="h2 hover:text-gray-200">Contact</div>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
