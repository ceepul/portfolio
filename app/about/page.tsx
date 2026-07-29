import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTitle from '@/components/PageTitle';
import Reveal from '@/components/Reveal';
import TextBox from '@/components/TextBox';

export default function AboutPage() {
  return (
    <div>
      <Header />
      {/* Above the fold */}
      <div className="flex flex-col items-center bg-secondary">
        <div className="w-full max-w-4xl p-4 sm:p-6">
          <div className="flex min-h-[calc(100svh-7rem)] flex-col items-start justify-center py-10">
            <PageTitle
              bgText="RUSSELL FENTON"
              headingText="ABOUT ME"
              className="mt-4"
            />

            <div className="mt-8 flex w-full flex-col gap-8 md:mt-10 md:flex-row md:gap-16">
              {/* Portrait leads on narrow screens, sits alongside on desktop */}
              <Reveal
                y={30}
                scale={0.97}
                className="relative order-first w-full shrink-0 md:order-last md:w-80"
              >
                <div
                  aria-hidden
                  className="ambient-glow -right-8 -top-8 h-40 w-40 bg-accent"
                />
                <Image
                  src="/headshot-smiley-600-400.jpg"
                  alt="Photo of Russell Fenton"
                  width={400}
                  height={600}
                  priority
                  className="relative w-full rounded-2xl shadow-lifted transition-transform duration-700 ease-out-expo hover:scale-[1.02]"
                  sizes="(max-width: 768px) calc(100vw - 2rem), 320px"
                />
              </Reveal>

              <div className="order-last md:order-first">
                <TextBox text="Hi, I'm Russell!" className="pt-0" />
                <TextBox
                  delay={60}
                  text="
    I'm a mechanical engineering graduate with a passion for building,
    fixing, and understanding how things work. As a self taught developer, I've shipped a number of AI powered software projects,
    including an AI sales assistant for Shopify merchants,
    as well as an internal RAG tool during my internship at i4 Product Design. I thrive on the design process,
    taking ideas from concept to execution, and love bringing projects to life through both code and hands on engineering.
  "
                />
                <TextBox
                  delay={120}
                  text="
    When I'm not working on projects, you'll find me outdoors, whether it's boating, soaking up the summer sun,
    or snowboarding in the winter. I'm always curious and driven to learn, constantly growing my skills by
    tackling challenges, exploring new technologies, and finding creative solutions.
  "
                />
                <TextBox
                  delay={180}
                  text="
    Let's build something amazing together!
  "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Below the fold */}
      <Footer />
    </div>
  );
}
