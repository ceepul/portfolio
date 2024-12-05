import Footer from '@/components/Footer';
import IconSkills from '@/components/IconSkills';
import PageTitle from '@/components/PageTitle';
import ProjectSection from '@/components/ProjectSection';
import StackIcon from 'tech-stack-icons';

export default function DevPage() {
  const skills = [
    { label: 'JavaScript', symbol: <StackIcon name="js" /> },
    { label: 'TypeScript', symbol: <StackIcon name="typescript" /> },
    { label: 'React', symbol: <StackIcon name="reactjs" /> },
    { label: 'NextJS', symbol: <StackIcon name="nextjs2" /> },
    { label: 'Tailwind', symbol: <StackIcon name="tailwindcss" /> },
    { label: 'ThreeJS', symbol: <StackIcon name="threejs" /> },
    { label: 'NodeJS', symbol: <StackIcon name="nodejs" /> },
    { label: 'AWS', symbol: <StackIcon name="aws" /> },
    { label: 'Eslint', symbol: <StackIcon name="eslint" /> },
    { label: 'Fly.io', symbol: <StackIcon name="flyio" /> },
    { label: 'NPM', symbol: <StackIcon name="npm2" /> },
    { label: 'OpenAI', symbol: <StackIcon name="openai" /> },
    { label: 'PostgreSQL', symbol: <StackIcon name="postgresql" /> },
  ];

  return (
    <div>
      <div className="m-4 flex flex-col items-center min-h-screen">
        <div className="m-4 max-w-4xl w-full">
          <PageTitle
            bgText='SKILLS'
            headingText='MECHANICAL ENGINEERING'
            className='mt-4'
          />
          <IconSkills
            skills={skills}
            className='mt-12'
          />
          <PageTitle
            bgText='EXPERIENCE'
            headingText='PROJECTS'
            className='mt-32'
          />
          <ProjectSection
            title='ShopMate AI'
            description='ShopMate is a lorem ipsum who cares idk one sec ill fix this later okay? Sounds good.'
            details={[
              'Pinecone AWS to IDK you know.',
              'Automatically synced product and store data from Shopify GraphQL',
            ]}
            imgSrc='/Headshot-1200-800.jpg'
            imgAlt='temp'
            className='mt-12'
          />
          <div className="mt-8 border-t-2 border-neutral-600"></div>
          <ProjectSection
            title='ShopMate AI'
            description='ShopMate is a lorem ipsum who cares idk one sec ill fix this later okay? Sounds good.'
            details={[
              'Pinecone AWS to IDK you know.',
              'Automatically synced product and store data from Shopify GraphQL',
            ]}
            imgSrc='/Headshot-1200-800.jpg'
            imgAlt='temp'
            flip
            className='mt-16'
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
