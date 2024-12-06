import Header from '@/components/Header';
import PageTitle from '@/components/PageTitle';
import ProjectSection from '@/components/ProjectSection';

export default function ContactPage() {
  return (
    <div>
      <Header />
      <div className="m-4 flex justify-center min-h-screen">
        <div className="m-4 max-w-4xl w-full">
          <PageTitle
              bgText='GET IN TOUCH'
              headingText='CONTACT'
              className='mt-4'
            />
          <ProjectSection
            title='Contact Information'
            description='I am currently looking for work and would love to hear from you! Please feel free to reach out.'
            imgSrc='/headshot-smiley-600-400.jpg'
            imgAlt='Photo of Russell Fenton'
            details={['✉ Russell1837@gmail.com', '+1 (647) 575-8203', 'Linkedin', 'Instagram']}
            className="mt-12"
          />
        </div>
      </div>
    </div>
  );
}
