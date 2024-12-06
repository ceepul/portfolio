import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTitle from '@/components/PageTitle';
import ProjectSection from '@/components/ProjectSection';
import TextBox from '@/components/TextBox';
import TextSkills from '@/components/TextSkills';
import ScrollCTA from '@/components/ScrollCTA';

export default function DevPage() {
  return (
    <div>
      <Header />
      {/* Above the fold */}
      <div className="flex flex-col items-center">
        <div className="max-w-4xl w-full p-4">
          <div className='h-[calc(100svh-7rem)] flex flex-col justify-center items-start'>
          <PageTitle
              bgText='FULL-STACK'
              headingText='DEV'
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
              skills={['JavaScript', 'TypeScript', 'React', 'NextJS', 'Tailwind', 'ThreeJS', 'NodeJS',
                'AWS', 'Eslint', 'Fly.io', 'Pinecone DB', 'NPM', 'OpenAI', 'PostgreSQL',
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
            text='Experience'
            className='-mt-32'
          />
          <PageTitle
            bgText='EXPERIENCE'
            headingText='PROJECTS'
            className='mt-20 sm:mt-28 '
          />
          <ProjectSection
            id='shopmate ai'
            title='ShopMate AI'
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
            id='3d virtual try-on'
            title='3D Virtual Try-On'
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
            id='solana pay'
            title='Solana Pay'
            description='ShopMate is a lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.'
            details={[
              'Pinecone AWS to IDK you know.',
              'Automatically synced product and store data from Shopify GraphQL',
            ]}
            imgSrc='/headshot-smiley-600-400.jpg'
            imgAlt='temp'
            className='py-16'
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
