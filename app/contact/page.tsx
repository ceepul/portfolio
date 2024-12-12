import Header from '@/components/Header';
import PageTitle from '@/components/PageTitle';
import Image from 'next/image';

export default function ContactPage() {
  const linkedinURL = 'https://www.linkedin.com/in/russell-fenton-760a7a299/';
  const githubURL = 'https://github.com/ceepul';
  const instagramURL = 'https://www.instagram.com/russell_fenton/';

  return (
    <div>
      <Header />
      {/* Above the fold */}
      <div className="flex flex-col items-center">
        <div className="max-w-5xl w-full p-4 min-h-[calc(100svh-7rem)] flex items-center justify-center">
          <div className='flex flex-col sm:flex-row items-start gap-10 sm:gap-20'>
            <div className='max-w-lg'>
              <PageTitle
                bgText='GET IN TOUCH'
                headingText='CONTACT INFO'
                className='mt-4'
              />
              <p className='mt-10 text-2xl font-light text-neutral-400'>
                I am currently seeking employment and would love to hear from you!
                Please feel free to reach out on any of my platforms.
              </p>
            </div>
            <div>
              <h2 className='h2 mt-4'>CONTACT</h2>
              <div className='mt-6 flex items-center gap-4'>
                <div className="w-5 h-5">
                  <Image src="/email-icon.svg" alt="Email Icon" width={64} height={64} />
                </div>
                <a href="mailto:Russell1837@gmail.com" className="p hover:text-gray-200">
                  Russell1837@gmail.com
                </a>
              </div>
              <div className='mt-4 flex items-center gap-4'>
                <div className="w-6 h-6">
                  <Image src="/phone-icon.svg" alt="Phone Icon" width={64} height={64} />
                </div>
                <a href="tel:+16475758203" className='p hover:text-gray-200'>
                  +1 (647) 575-8203
                </a>
              </div>
              <h2 className='h2 mt-14'>SOCIALS</h2>
              <div className='mt-4'>
                <a
                  href={linkedinURL}
                  target="_blank"
                  className="p hover:text-gray-200"
                >
                  LinkedIn
                </a>
              </div>
              <div className='mt-2'>
                <a
                  href={githubURL}
                  target="_blank"
                  className="p hover:text-gray-200"
                >
                  Github
                </a>
              </div>
              <div className='mt-2'>
                <a
                  href={instagramURL}
                  target="_blank"
                  className="p hover:text-gray-200"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
