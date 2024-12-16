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
          <div className='min-h-[calc(100svh-7rem)] flex flex-col justify-center items-start'>
            <PageTitle
              bgText='FULL-STACK'
              headingText='DEV'
              className='mt-4'
            />
            <TextBox
              text='As a self-taught web developer, I have built full-stack applications that integrate
                seamless frontends with reliable backend systems. I developed a Shopify app for an AI
                virtual sales assistant, leveraging vector encoding and semantic search with the
                Pinecone vector database, an AWS backend, PostgreSQL for data storage, and REST APIs
                for efficient communication. The app integrates into the Shopify admin panel and embeds
                as a storefront widget. I also explored 3D web development with Three.js, creating a
                proof-of-concept virtual try-on tool. My experience spans building scalable systems,
                RESTful APIs, and interactive interfaces using tools like React, Next.js, and PostgreSQL.'
              className='mt-4'
            />
            <TextSkills
              skills={['JavaScript', 'TypeScript', 'React', 'NextJS', 'Tailwind', 'ThreeJS', 'NodeJS',
                'AWS', 'Eslint', 'Fly.io', 'Pinecone DB', 'NPM', 'OpenAI', 'PostgreSQL',
              ]}
              className='mt-12 mb-12'
            />
            <div className='w-full flex justify-center'>
              <ScrollCTA
                text='Experience'
                className='mt-10'
              />
            </div>
          </div>
        </div>
      </div>
      {/* Below the fold */}
      <div className="flex flex-col items-center bg-secondary">
        <div className="max-w-4xl w-full p-4">
          <PageTitle
            bgText='EXPERIENCE'
            headingText='PROJECTS'
            className='mt-20 sm:mt-28 '
          />
          <ProjectSection
            id="shopmate ai"
            title="ShopMate AI"
            description="A Shopify app utilizing AI for intelligent product recommendations and automated customer support, designed to enhance e-commerce stores."
            details={[
              'Developed a virtual sales assistant embedded within Shopify admin and integrated as a storefront widget.',
              'Backend infrastructure hosted on AWS, leveraging Lambda functions, REST APIs, and PostgreSQL (Aurora Serverless).',
              'Implemented vector storage and semantic search using Pinecone for accurate product recommendations and policy/FAQ retrieval.',
              'Used OpenAI for vector embeddings and intelligent response generation, enabling natural language interactions.',
              'Synced entire Shopify catalogs, FAQs, and policies into vectorized storage for efficient semantic search.',
              'Streamed AI responses using custom Lambda functions and buffers to reduce perceived response time.',
              'Built with Node.js and hosted the admin app on Fly.io, offering a seamless user experience through Shopify Polaris.',
              'Enabled UI customization for the widget to align with store branding, enhancing integration and usability.',
              'Provided scalable solutions for cross-selling and improved customer engagement through real-time recommendations.',
            ]}
            images={[
              { src: '/dev/shopmate-4.png', alt: 'Image of ShopMate AI poster with ShopMate as a header and three chat boxes overlapping' },
              { src: '/dev/shopmate-6.png', alt: 'Image of a blue chat box' },
              { src: '/dev/shopmate-3.png', alt: 'Image of the payment plan page' },
            ]}
            className="pt-12 sm:pt-20"
          />
          <div className="mt-16 divider"></div>
          <ProjectSection
            id="solana pay storefront"
            title="Solana Pay Storefront"
            description="A decentralized storefront built on the Solana blockchain using Solana Pay for cryptocurrency payments."
            details={[
              'Completed the Buildspace Solana Pay program, learning to develop decentralized applications on the Solana blockchain.',
              'Integrated Phantom wallet for user authentication and secure transaction signing using Solana SDKs.',
              "Implemented real-time cryptocurrency payments through Solana Pay, leveraging the blockchain's low fees and fast transaction speeds.",
              'Queried blockchain data for transaction confirmations and built a React-based storefront for an interactive user experience.',
            ]}
            images={[
              { src: '/dev/solana-2.png', alt: 'Image of solana music store website with prompt to connect wallet' },
              /* { src: '/dev/solana-3.png', alt: 'three' },
              { src: '/dev/solana-video.mp4', alt: 'three', video: true }, */
            ]}
            flip
            className="pt-16"
          />
          <div className="mt-16 divider"></div>
          <ProjectSection
            id="3d virtual try-on"
            title="3D Virtual Try-On"
            description="A proof-of-concept application using Three.js for interactive 3D clothing visualization on avatars."
            details={[
              'Built a custom Three.js viewer integrated with Shopify Hydrogen to display clothing on 3D avatars.',
              'Mapped 2D images to texture maps applied to 3D models, enabling real-time updates for color and style changes.',
              'Implemented interactive controls for rotating avatars and viewing outfit combinations.',
            ]}
            images={[
              { src: '/dev/vto-1.png', alt: 'Image of eccomerce product page with 3D virtual try-on viewer' },
              { src: '/dev/vto-2.png', alt: 'Image of eccomerce product page with 3D virtual try-on viewer' },
            ]}
            className="py-16"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
