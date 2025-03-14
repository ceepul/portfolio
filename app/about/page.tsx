import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTitle from '@/components/PageTitle';
import TextBox from '@/components/TextBox';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div>
      <Header />
      {/* Above the fold */}
      <div className="flex flex-col items-center bg-secondary">
        <div className="max-w-4xl w-full p-4">
          <div className='min-h-[calc(100svh-7rem)] flex flex-col justify-center items-start'>
            <div className='flex flex-col md:flex-row gap-4 md:gap-16'>
              <div>
                <PageTitle
                  bgText='RUSSELL FENTON'
                  headingText='ABOUT ME'
                  className='mt-4'
                />
                <TextBox
                  text="
                    Hi, I'm Russell! I'm a mechanical engineering graduate with a passion for building,
                    fixing, and understanding how things work. As a self-taught web developer,
                    I specialize in creating modern web apps using TypeScript, Next.js, Tailwind CSS, and Node.js.
                    I love bringing ideas to life through code and hands-on projects.
                  "
                  className='mt-4 p'
                />
                <TextBox
                  text="
                    When I'm not working on projects, you'll find me outdoors—whether it's boating, soaking up the summer sun,
                    or snowboarding in the winter. I'm always curious and driven to learn, constantly growing my skills by
                    tackling challenges and finding creative solutions.
                  "
                />
                <TextBox
                  text="
                    Let's build something amazing together!
                  "
                />
              </div>
              <div className='min-w-80 m-4'>
                <Image
                  src='/headshot-smiley-600-400.jpg'
                  alt='Photo of Russell Fenton'
                  width={400}
                  height={600}
                  priority
                  className='rounded-2xl justify-self-center'
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
