import Link from 'next/link';

export default function Header() {
  const myName = 'Russell Fenton';
  const linkedinURL = 'https://www.linkedin.com/in/russell-fenton-760a7a299/';
  const githubURL = 'https://github.com/ceepul';

  return (
    <header className="fixed top-0 w-full h-20 p-4 sm:p-8">
      <nav className="max-w-screen-2xl mx-auto flex justify-between items-center">
        <div>
          <Link href="/">
            <div className="text-lg font-extralight text-white hover:text-gray-200">{myName}</div>
          </Link>
        </div>
        <div className='flex gap-12'>
          <div>
            <a
              href={linkedinURL}
              target="_blank"
              className="text-lg font-extralight text-white hover:text-gray-200"
            >
              LinkedIn
            </a>
          </div>
          <div>
            <a
              href={githubURL}
              target="_blank"
              className="text-lg font-extralight text-white hover:text-gray-200"
            >
              GitHub
            </a>
          </div>
          <div>
            <Link href="/contact">
              <div className="text-lg font-extralight text-white hover:text-gray-200">Contact</div>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
