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
          <div className='min-h-[calc(100svh-7rem)] flex flex-col justify-center items-start'>
          <PageTitle
              bgText='ENGINEERING'
              headingText='MECHANICAL'
              className='mt-4'
            />
            <TextBox
              text='As a mechanical engineering student, I have practical experience in designing
                and optimizing electromechanical systems, CAD modeling, and prototyping innovative solutions.
                With an engineering team, I developed a movement-powered animal tracking collar, leading the design and simulation of an
                electromagnetic harvester in COMSOL and integrating it into a reliable final system.
                My project experience includes maze-navigating robots, automated seed planters,
                and high-torque gear systems, leveraging tools like SolidWorks, MATLAB,
                and Arduino to create functional and innovative designs.'
              className='mt-4'
            />
            <TextSkills
              skills={['SolidWorks - Associate', 'COMSOL', 'MATLAB', 'Simulink', 'Design', 'Prototyping', '3D Printing', 'GD&T']}
              className='my-12'
            />
            <div className='w-full hidden md:flex justify-center'>
              <ScrollCTA
                text='Course Projects'
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
            headingText='COURSE PROJECTS'
            className='mt-12 sm:mt-20 '
          />
          <ProjectSection
            id="electromechanical harvester"
            title="Electro-Mechanical Harvester"
            description="Led the development of an energy harvester for an animal tracking collar, enabling sustainable power generation from animal movement."
            details={[
              'Developed an electromagnetic energy harvester capable of generating 19.3mW under simulated animal motion.',
              'Performed simulations in COMSOL to optimize coil windings and dimensions for maximum energy output.',
              'Integrated a magnetic spring mechanism to enhance durability and reliability under repeated motion.',
              'Designed a test rig to validate real-world performance, ensuring the system met durability requirements.',
            ]}
            images={[
              { src: '/engineering/harvester-2.png', alt: 'Image of "InfiniTrack" prototype' },
              { src: '/engineering/harvester-3.png', alt: 'Image of "InfiniTrack" prototype on dog collar' },
              { src: '/engineering/harvester-1.png', alt: 'Image of a COMSOL simulation showcasing the magnetic field of a magnet in a copper coil' },
              { src: '/engineering/harvester-4.png', alt: 'Block diagram of component interactions' },
            ]}
            className="pt-12 sm:pt-20"
          />
          <div className="mt-16 divider"></div>
          <ProjectSection
            id="compound planetary gearbox"
            title="Compound Planetary Gearbox"
            description="Designed and prototyped a 3D printed high-torque compound planetary gearbox for a bucket elevator prototype, achieving precise speed reduction using only the materials availble."
            details={[
              'Created a 148:1 compound planetary gearbox using SolidWorks, ensuring efficient and reliable power transmission.',
              'Applied precise tolerancing techniques to eliminate play while maintaining smooth operation under load.',
              'Fabricated and tested the prototype to validate the design, demonstrating excellent performance and durability.',
              'Optimized gear dimensions and material selection to meet high torque requirements within compact constraints.',
            ]}
            images={[
              { src: '/engineering/gearbox-1.jpg', alt: 'Image of assembled 3D printed gearbox' },
              { src: '/engineering/gearbox-animation.mp4', alt: 'Animation of gearbox in operation', video: true },
              { src: '/engineering/gearbox-5.jpg', alt: 'Image of diassembled gearbox compoenents' },
            ]}
            flip
            className="pt-16"
          />
          <div className="mt-16 divider"></div>
          <ProjectSection
            id="maze-navigating-robot"
            title="Maze-Navigating Robot"
            description="Developed a high-performance robot capable of autonomously navigating complex mazes using advanced sensor calibration and control algorithms."
            details={[
              'Designed the robot’s layout, including 3D-printed components, wiring diagrams, and sensor integration for efficient navigation.',
              'Programmed motor control algorithms in Arduino, enabling precise and responsive movement for optimal maze traversal.',
              'Calibrated sensors to detect walls and turns, ensuring the fastest pathfinding and completion time in competition.',
              'Integrated mechanical and electrical systems to create a cohesive and reliable final design.',
            ]}
            images={[
              { src: '/engineering/robot-1.jpg', alt: 'Image of completed, four wheeled robot' },
              { src: '/engineering/robot-2.jpg', alt: 'Image of wiring and soldered circuit board' },
              { src: '/engineering/robot-video.mp4', alt: 'Video of robot completing maze autonomously', video: true },
            ]}
            className="py-16"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
