import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTitle from '@/components/PageTitle';
import ProjectSection from '@/components/ProjectSection';
import TextSkills from '@/components/TextSkills';
import ScrollCTA from '@/components/ScrollCTA';
import TextBox from '@/components/TextBox';

export default function EnginneringPage() {
  return (
    <div>
      <Header />
      {/* Above the fold */}
      <div className="flex flex-col items-center">
        <div className="max-w-4xl w-full p-4">
          <div className='min-h-[calc(100svh-12rem)] flex flex-col justify-center items-start'>
          <PageTitle
              bgText='ENGINEERING'
              headingText='MECHANICAL'
              className='mt-4'
            />
            <TextBox
              text='As a mechanical engineering student, I have developed expertise in designing
                and optimizing electromechanical systems, CAD modeling, and prototyping innovative solutions.
                I led the development of an animal tracking collar, leading the design and simulation of an
                electromagnetic harvester in COMSOL and integrating it into a reliable final system.
                My project experience includes maze-navigating robots, automated seed planters,
                and high-torque gear systems, leveraging tools like SolidWorks, MATLAB,
                and Arduino to create functional and innovative designs.'
              className='mt-4'
            />
            <TextSkills
              skills={['SolidWorks - Associate', 'COMSOL', 'MATLAB', 'Simulink', 'Design', '3D Printing', 'GD&T']}
              className='mt-12 mb-12'
            />
          </div>
        </div>
      </div>
      {/* Below the fold */}
      <div className="flex flex-col items-center bg-neutral-900">
        <div className="max-w-4xl w-full p-4">
          <ScrollCTA
            text='Experience'
            className='-mt-32'
          />
          <PageTitle
            bgText='EXPERIENCE'
            headingText='PROJECTS'
            className='mt-20 sm:mt-28 '
          />
          <ProjectSection
            id='electromechanical harvester'
            title='Electro-Mechanical Harvester'
            description='ShopMate is a lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.'
            details={[
              'Pinecone AWS to IDK you know.',
              'Automatically synced product and store data from Shopify GraphQL',
            ]}
            imgSrc='/headshot-smiley-600-400.jpg'
            imgAlt='temp'
            className='pt-12 sm:pt-20'
          />
          <div className="mt-8 border-t-2 border-neutral-600"></div>
          <ProjectSection
            id='compound planetary gearbox'
            title='Compound Planetary Gearbox'
            description='ShopMate is a lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.'
            details={[
              'Pinecone AWS to IDK you know.',
              'Automatically synced product and store data from Shopify GraphQL',
            ]}
            imgSrc='/headshot-smiley-600-400.jpg'
            imgAlt='temp'
            flip
            className='py-16'
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
