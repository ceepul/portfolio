import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTitle from '@/components/PageTitle';
import ProjectSection from '@/components/ProjectSection';
import TextSkills from '@/components/TextSkills';

export default function HobbiesPage() {
  return (
    <div>
      <Header />
      <div className="m-4 flex flex-col items-center min-h-screen">
        <div className="m-4 max-w-4xl w-full">
          <PageTitle
            bgText='HOBBIES'
            className='mt-4'
          />
          <TextSkills
            skills={['SMD Soldering', 'Circuit Design', 'Arduino', 'LED', '3D Printing', 'CAD', 'Marine Navigation', 'FPV']}
          />
          <PageTitle
            bgText='EXPERIENCE'
            headingText='PROJECTS'
            className='mt-32'
          />
          <ProjectSection
            id='faux-nanoleaf'
            title='Faux Nanoleaf LED Panels'
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
            id='3d printing'
            title='3D Printing'
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
            id='diy fpv drone'
            title='DIY FPV Drone'
            description='ShopMate is a lorem ipsum who cares idk one sec ill fix this later okay? Sounds good.'
            details={[
              'Pinecone AWS to IDK you know.',
              'Automatically synced product and store data from Shopify GraphQL',
            ]}
            imgSrc='/Headshot-1200-800.jpg'
            imgAlt='temp'
            className='pt-16'
          />
          <ProjectSection
            id='boat upholstery'
            title='Boat Upholstery'
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
        </div>
      </div>
      <Footer />
    </div>
  );
}
