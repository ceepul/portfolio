import Header from '@/components/Header';
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
      <Header />
      <div className="m-4 flex flex-col items-center min-h-screen">
        <div className="m-4 max-w-4xl w-full">
          <PageTitle
            bgText='FULL-STACK'
            headingText='DEV'
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
            id='shopmate ai'
            title='ShopMate AI'
            description='ShopMate is a lorem ipsum who cares idk one sec ill fix this later okay? Sounds good.'
            details={[
              'Pinecone AWS to IDK you know.',
              'Automatically synced product and store data from Shopify GraphQL',
            ]}
            imgSrc='/Headshot-1200-800.jpg'
            imgAlt='temp'
            className='pt-12'
          />
          <div className="mt-8 border-t-2 border-neutral-600"></div>
          <ProjectSection
            id='3d virtual try-on'
            title='3D Virtual Try-On'
            description='ShopMate is a lorem ipsum who cares idk one sec ill fix this later okay? Sounds good.'
            details={[
              'Pinecone AWS to IDK you know.',
              'Automatically synced product and store data from Shopify GraphQL',
            ]}
            imgSrc='/Headshot-1200-800.jpg'
            imgAlt='temp'
            flip
            className='pt-16'
          />
          <ProjectSection
            id='solana pay'
            title='Solana Pay'
            description='ShopMate is a lorem ipsum who cares idk one sec ill fix this later okay? Sounds good.'
            details={[
              'Pinecone AWS to IDK you know.',
              'Automatically synced product and store data from Shopify GraphQL',
            ]}
            imgSrc='/Headshot-1200-800.jpg'
            imgAlt='temp'
            className='pt-16'
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
