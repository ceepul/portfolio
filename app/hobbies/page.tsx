import Link from 'next/link';
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
      <div className="relative flex flex-col items-center overflow-hidden">
        <div
          aria-hidden
          className="ambient-glow -left-24 top-20 h-72 w-72 bg-accent"
        />
        <div className="w-full max-w-4xl p-4 sm:p-6">
          <div className="min-h-[calc(100svh-7rem)] flex flex-col justify-center items-start">
            <PageTitle
              bgText="HOBBIES"
              headingText="MISC PROJECTS"
              className="mt-4"
            />
            <TextBox
              text="I enjoy working on hands-on projects that challenge me to learn new skills and
                solve problems creatively. From designing faux Nanoleaf-style LED panels to add character
                to my room without breaking the bank, to building DIY FPV drones, 3D printing custom parts,
                and tackling boat upholstery, I thrive on projects that keep me experimenting and improving.
                Beyond the shop, I love spending time with friends, balancing social outings with side
                projects that keep me learning and growing."
              className="mt-4"
            />
            <TextSkills
              skills={[
                'SMD Soldering',
                'Circuit Design',
                'PCB Design',
                'LEDs',
                'Prototyping',
                '3D Printing',
                'Vacuum Forming',
                'Arduino',
                'FPV',
                'Sewing',
                'Material Patterning',
                'Wood Working',
              ]}
              className="my-12"
            />
            <div className="w-full hidden md:flex justify-center">
              <ScrollCTA text="Projects" className="mt-10" />
            </div>
          </div>
        </div>
      </div>
      {/* Below the fold */}
      <div className="flex flex-col items-center bg-secondary">
        <div className="w-full max-w-4xl p-4 sm:p-6">
          <PageTitle
            bgText="PROJECTS"
            headingText="HOBBIES"
            className="mt-12 sm:mt-20"
          />
          <ProjectSection
            id="bluetooth ipod classic"
            title="Bluetooth iPod Classic"
            description="World's first iPod Classic Bluetooth mod that maintains hold switch functionality through a custom aesthetic button."
            action={
              <Link
                href="/hobbies/bluetooth-ipod-mod"
                className="button group inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm"
              >
                Full Tutorial
                <span
                  aria-hidden
                  className="transition-transform duration-400 ease-out-expo group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            }
            details={[
              'Designed a 3D printed mount and switch that integrate with existing iPod screws,  no additional hardware needed.',
              'Mount includes a clasp that connects to the existing clip on the iPod frame. Installation of this switch does not sacrifice connection between the frame and backplate.',
              'Preserves the hold switch by adding an external aesthetic button matching the original hold button design.',
              'Requires only minimal modding of the backplate; the iPod frame is untouched.',
              'Uses a standard Mini 7-Pin SMD Toggle Slide Switch.',
            ]}
            images={[
              {
                src: '/hobbies/ipod-3.jpg',
                alt: 'Bluetooth iPod Classic mod — backplate and mount',
              },
              {
                src: '/hobbies/ipod-1.png',
                alt: 'Bluetooth iPod Classic mod — front view',
              },
              {
                src: '/hobbies/ipod-2.png',
                alt: 'Bluetooth iPod Classic mod — detail of custom switch',
              },
            ]}
            className="pt-12 sm:pt-20"
          />
          <div className="divider mt-16"></div>
          <ProjectSection
            id="faux nanoleaf"
            title="Faux Nanoleaf LED Panels"
            description="3D-printed LED panels with segmented WS2811 LED control for customizable patterns and effects."
            details={[
              'Designed modular 3D-printed bases with diffusers for a sleek appearance and flexible configurations.',
              'Implemented Arduino Nano with custom software for precise segmented control of individual panels.',
              'Created patterns like firework effects, selectable using physical dimmers and buttons.',
              'Mounted securely with 3M double-sided tape for easy installation.',
            ]}
            images={[
              {
                src: '/hobbies/leds-4.jpg',
                alt: 'Image of triangular LED panels lit up in red and white',
              },
              {
                src: '/hobbies/leds-video.mp4',
                alt: 'Video of LED panels showing a moving rainbow effect',
                video: true,
              },
              {
                src: '/hobbies/leds-7.jpg',
                alt: 'Image of triangular LED panels lit up in purple and white',
              },
              {
                src: '/hobbies/leds-3.jpg',
                alt: 'Close up image of LED panels lit up in red and white',
              },
            ]}
            className="pt-12 sm:pt-20"
          />
          <div className="divider mt-16"></div>
          <ProjectSection
            id="3d printing"
            title="3D Printing"
            description="Extensive experience designing functional and aesthetic components for 3D printing."
            details={[
              '5+ years of experience using an Ender 3 Pro with a focus on material efficient, support-free designs.',
              'Examples: boat stereo mount, outboard shifter handle, planetary gearbox, Nanoleaf frames',
              'Optimized tolerances for precise mating parts and minimized print time while maintaining strength.',
            ]}
            images={[
              {
                src: '/hobbies/3dprint-1.jpg',
                alt: 'Image showing CAD model of outboard motor shifter handle in SolidWorks',
              },
              {
                src: '/hobbies/3dprint-3.jpg',
                alt: 'Image of printed outboard motor shifter handle installed on engine',
              },
            ]}
            flip
            className="pt-16"
          />
          <div className="divider mt-16"></div>
          <ProjectSection
            id="diy fpv drone"
            title="DIY FPV Drone"
            description="
              Built a custom racing drone from sourced components
              with fully soldered and configured electronics."
            details={[
              'Assembled a 210mm frame with brushless motors, ESCs, FPV transmitter, antenna, and flight controller.',
              'Soldered and wired components, including PDB and flight controller, ensuring clean connections and optimal layout.',
              'Configured flight software (Betaflight) and tuned PID values for improved flight stability and responsiveness.',
              'Developed proficiency in FPV drone piloting, maintenance, and tuning.',
            ]}
            images={[
              {
                src: '/hobbies/fpv.jpg',
                alt: 'Image of an FPV drone with orange propellers.',
              },
            ]}
            className="pt-16"
          />
          <div className="divider mt-16"></div>
          <ProjectSection
            id="marine upholstery"
            title="Marine Upholstery"
            description="Completed a marine upholstery project involving fabric selection, patterning, and installation."
            details={[
              'Learned to cut and sew complex patterns with decorative stitching and fabric pulls for a professional finish.',
              'Refurbished and shaped plywood bases, stretched and stapled fabric for durability.',
              'Installed completed upholstery into boat.',
            ]}
            images={[
              {
                src: '/hobbies/upholstery-6a.jpg',
                alt: 'Image showing stern of inboard outboard boat with new upholstery',
              },
              {
                src: '/hobbies/upholstery-video.mp4',
                alt: 'three-sixty video showing a completed L-shaped bow cusion',
                video: true,
              },
              {
                src: '/hobbies/upholstery-1a.jpg',
                alt: 'Image of in-progress replacement of bow cushions, showing one new cushion amongst the old cushions',
              },
              {
                src: '/hobbies/upholstery-14a.jpg',
                alt: 'Image of completed upholstery in the bow of a bowrider boat',
              },
            ]}
            flip
            className="py-16"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
