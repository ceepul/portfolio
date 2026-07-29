import {
  FiGithub, FiLinkedin, FiMail, FiPhone,
} from 'react-icons/fi';
import Header from '@/components/Header';
import PageTitle from '@/components/PageTitle';
import Reveal from '@/components/Reveal';

const LINKEDIN_URL = 'https://www.linkedin.com/in/russell-fenton-760a7a299/';
const GITHUB_URL = 'https://github.com/ceepul';

export default function ContactPage() {
  return (
    <div>
      <Header />
      {/* Above the fold */}
      <div className="relative flex flex-col items-center overflow-hidden">
        <div
          aria-hidden
          className="ambient-glow -left-20 top-24 h-72 w-72 bg-accent"
        />
        <div className="flex min-h-[calc(100svh-7rem)] w-full max-w-5xl items-center justify-center p-4 sm:p-6">
          <div className="flex w-full flex-col items-start gap-12 sm:flex-row sm:gap-20">
            <div className="max-w-lg">
              <PageTitle
                bgText="GET IN TOUCH"
                headingText="CONTACT INFO"
                className="mt-4"
              />
              <Reveal delay={200} y={18}>
                <p className="large-body-text mt-10">
                  I am currently seeking employment and would love to hear from
                  you! Please feel free to reach out on any of my platforms.
                </p>
              </Reveal>
            </div>

            <Reveal delay={140} y={22} className="shrink-0">
              <h2 className="h2 mt-4 text-sm uppercase tracking-[0.2em]">CONTACT</h2>

              <a
                href="mailto:Russell1837@gmail.com"
                className="group mt-6 flex items-center gap-4"
              >
                <span className="grid h-9 w-9 place-items-center rounded-full border border-line text-fg-muted transition-all duration-400 ease-out-expo group-hover:-translate-y-0.5 group-hover:border-accent group-hover:text-accent">
                  <FiMail className="h-4 w-4" />
                </span>
                <span className="p body-hover">Russell1837@gmail.com</span>
              </a>

              <a href="tel:+16475758203" className="group mt-4 flex items-center gap-4">
                <span className="grid h-9 w-9 place-items-center rounded-full border border-line text-fg-muted transition-all duration-400 ease-out-expo group-hover:-translate-y-0.5 group-hover:border-accent group-hover:text-accent">
                  <FiPhone className="h-4 w-4" />
                </span>
                <span className="p body-hover">+1 (647) 575-8203</span>
              </a>

              <h2 className="h2 mt-14 text-sm uppercase tracking-[0.2em]">SOCIALS</h2>

              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 flex items-center gap-4"
              >
                <span className="grid h-9 w-9 place-items-center rounded-full border border-line text-fg-muted transition-all duration-400 ease-out-expo group-hover:-translate-y-0.5 group-hover:border-accent group-hover:text-accent">
                  <FiLinkedin className="h-4 w-4" />
                </span>
                <span className="p body-hover">LinkedIn</span>
              </a>

              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-4 flex items-center gap-4"
              >
                <span className="grid h-9 w-9 place-items-center rounded-full border border-line text-fg-muted transition-all duration-400 ease-out-expo group-hover:-translate-y-0.5 group-hover:border-accent group-hover:text-accent">
                  <FiGithub className="h-4 w-4" />
                </span>
                <span className="p body-hover">Github</span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}
