import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTitle from '@/components/PageTitle';
import ProjectSection from '@/components/ProjectSection';
import TextSkills from '@/components/TextSkills';
import TextBox from '@/components/TextBox';
import ScrollCTA from '@/components/ScrollCTA';

export default function HobbiesPage() {
  return (
    <div>
      <Header />
      {/* Above the fold */}
      <div className="flex flex-col items-center">
        <div className="max-w-4xl w-full p-4">
          <div className='min-h-[calc(100svh-7rem)] flex flex-col justify-center items-start'>
          <PageTitle
              bgText='HOBBIES'
              headingText='MISC PROJECTS'
              className='mt-4'
            />
            <TextBox
              text='[Your Name] has a strong background in mechanical engineering,
              with a focus on designing and developing innovative solutions for complex systems.
              With experience spanning areas such as thermal systems, structural design,
              and precision manufacturing,Your Name has honed skills in both analytical
              problem-solving and hands-on prototyping. They are proficient in using advanced
              CAD tools, simulation software, and project management techniques to bring concepts
              to life efficiently and effectively.'
              className='mt-4'
            />
            <TextSkills
              skills={['SMD Soldering', 'Circuit Design', '3D Printing', 'Arduino', 'LEDs', 'Sewing..', 'FPV',
                'Wood Working',
              ]}
              className='mt-12 mb-12'
            />
          </div>
        </div>
      </div>
      {/* Below the fold */}
      <div className="flex flex-col items-center bg-neutral-900">
        <div className="max-w-4xl w-full p-4">
          <ScrollCTA
            text='Projects'
            className='-mt-32'
          />
          <PageTitle
            bgText='PROJECTS'
            headingText='HOBBIES'
            className='mt-20 sm:mt-28 '
          />
          <ProjectSection
            id='faux-nanoleaf'
            title='Faux Nanoleaf LED Panels'
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
            id='3d printing'
            title='3D Printing'
            description='ShopMate is a lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.'
            details={[
              'Pinecone AWS to IDK you know.',
              'Automatically synced product and store data from Shopify GraphQL',
            ]}
            imgSrc='/headshot-smiley-600-400.jpg'
            imgAlt='temp'
            flip
            className='pt-16'
          />
          <div className="mt-8 border-t-2 border-neutral-600"></div>
          <ProjectSection
            id='diy fpv drone'
            title='DIY FPV Drone'
            description='ShopMate is a lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.'
            details={[
              'Pinecone AWS to IDK you know.',
              'Automatically synced product and store data from Shopify GraphQL',
            ]}
            imgSrc='/headshot-smiley-600-400.jpg'
            imgAlt='temp'
            className='pt-16'
          />
          <div className="mt-8 border-t-2 border-neutral-600"></div>
          <ProjectSection
            id='boat upholstery'
            title='Boat Upholstery'
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
