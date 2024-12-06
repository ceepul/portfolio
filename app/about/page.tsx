import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTitle from '@/components/PageTitle';
import TextSkills from '@/components/TextSkills';
import TextBox from '@/components/TextBox';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div>
      <Header />
      {/* Above the fold */}
      <div className="flex flex-col items-center">
        <div className="max-w-4xl w-full p-4">
          <div className='min-h-[calc(100svh-7rem)] flex flex-col justify-center items-start'>
            <div className='flex flex-col sm:flex-row gap-20'>
              <div>
                <PageTitle
                  bgText='RUSSELL FENTON'
                  headingText='ABOUT ME'
                  className='mt-4'
                />
                <TextBox
                  text="
                    Hi, I'm Russell! I'm a mechanical engineering student with a passion for building,
                    fixing, and understanding how things work. I specialize in web development using JavaScript,
                    TypeScript, React, and Next.js, and I love bringing ideas to life through code and hands-on projects.
                  "
                  className='mt-4 p'
                />
                <TextBox
                  text="
                    When I'm not working on projects, you'll find me outdoors—whether it's boating, soaking up the summer sun,
                    or snowboarding in the winter. I'm always curious and driven to learn, constantly growing my skills by
                    tackling challenges and finding creative solutions.
                  "
                  className='p'
                />
                <TextBox
                  text="
                    Let's build something amazing together!
                  "
                  className='p'
                />
                <TextSkills
                  skills={['SolidWorks - Associate', 'CAD', '3D Printing', 'Design', 'Soldering', 'GD&T',
                    'JavaScript', 'TypeScript', 'React', 'NextJS', 'NodeJS', 'AWS',
                  ]}
                  className='mt-12'
                />
              </div>
              <div className='min-w-80 h-[480px]'>
                <Image
                  src='/headshot-smiley-600-400.jpg'
                  alt='Photo of Russell Fenton'
                  width={400}
                  height={600}
                  priority
                  className='rounded-2xl'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
