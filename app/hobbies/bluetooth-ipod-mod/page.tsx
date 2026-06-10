import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'iPod Classic Bluetooth Mod | Russell Fenton',
  description:
    'Step-by-step guide to adding Bluetooth to an iPod Classic 6th Gen while preserving the hold switch.',
};

const TOOLS = [
  '3D Printer with 0.2mm nozzle',
  'Phillips screwdriver',
  'Side cutters',
  'Soldering iron',
  'Super glue or epoxy',
  'Electrical tape',
];

const PARTS = [
  'Mini 7-pin SMD Slide Switch (Part: SPDT MSK-12C02)',
  'Push Button (Part: B3F-1020)',
  'PETG filament (preffered, but PLA works too)',
];

const STEPS = [
  {
    stepNumber: 1,
    title: 'Print the components',
    description:
      "For this mod you'll need:\n1x Mounting Bracket (Print colour determines switch accent colour... I used white)\n1x Bluetooth Switch\n1x Alignment Jig\n1x Button Holder\n\nPart files can be found at https://makerworld.com/en/models/2914465-ipod-classic-bluetooth-switch\nThe button holder was created by Joseph Yunecko and can be found at https://www.thingiverse.com/thing:7091713",
    note: 'A 0.2mm nozzle is required for printing the switch and mounting bracket.',
    images: [
      '/hobbies/ipod-tutorial/step1.png',
      '/hobbies/ipod-tutorial/step1.1.jpg',
    ],
  },
  {
    stepNumber: 2,
    title: 'Remove the Backplate',
    description:
      'Tutorial from ifixit:\nhttps://www.ifixit.com/Guide/iPod+Classic+Rear+Panel+Replacement/563',
    images: [],
  },
  {
    stepNumber: 3,
    title: 'Prepare the Backplate',
    description:
      "You'll need to remove the rail from between the headphone jack screw mount and the hold switch mount. Don't worry about keeping the center clip, this will need to be removed too. Alternatively you could skip to step 4 and remove the rail after drilling the holes.",
    portrait: true,
    images: [
      '/hobbies/ipod-tutorial/step2.jpg',
      '/hobbies/ipod-tutorial/step2.1.jpg',
    ],
  },
  {
    stepNumber: 4,
    title: 'Drill Holes for Opening',
    description:
      'Use the hole alignment jig to mark the location for the new slot. Drill two holes at either end of the marked slot as shown.',
    caution:
      "It's easy to misalign the holes. Be careful to drill in the correct location. It's better to start with a smaller bit and use a file to enlarge the holes later.",
    images: [
      '/hobbies/ipod-tutorial/step3.jpg',
      '/hobbies/ipod-tutorial/step3.1.jpg',
      '/hobbies/ipod-tutorial/step3.2.jpg',
      '/hobbies/ipod-tutorial/step3.3.jpg',
    ],
  },
  {
    stepNumber: 5,
    title: 'Cut Slot Between Holes',
    description:
      'Using a hacksaw, cut between the drilled holes to create the opening. Make sure to use a metal hack saw blade (The picture shows a wood blade, but a metal blade will have finer teeth).',
    images: [
      '/hobbies/ipod-tutorial/step4.jpg',
      '/hobbies/ipod-tutorial/step4.1.jpg',
    ],
  },
  {
    stepNumber: 6,
    title: 'Use a File to Finish the Slot',
    description:
      'Use a file to smooth the edges of the cut slot, and enlarge the opening until it aligns with the hole alignment jig. You can use the switch to test the fit.',
    images: [
      '/hobbies/ipod-tutorial/step5.jpg',
      '/hobbies/ipod-tutorial/step5.1.jpg',
    ],
  },
  {
    stepNumber: 7,
    title: 'Prepare the Hold Switch',
    description:
      "The pairing button will sit behind the hold switch. We'll need to modify the hold switch to remove the top mounting point. This will allow the hold switch to flex and press the bluetooth pairing button we install behind. Removing this plastic will also allow room for the bluetooth switch to be screwed in.",
    images: [
      '/hobbies/ipod-tutorial/step6.jpg',
      '/hobbies/ipod-tutorial/step6.1.jpg',
      '/hobbies/ipod-tutorial/step6.2.jpg',
    ],
  },
  {
    stepNumber: 8,
    title: 'Prepare the Hold Switch',
    description:
      'A portion of the metal backing from the hold switch will also need to be removed to allow the hold switch to flex properly. Use side cutters to carefully cut the metal as shown in the pictures.',
    images: [
      '/hobbies/ipod-tutorial/step7.jpg',
      '/hobbies/ipod-tutorial/step7.1.jpg',
    ],
  },
  {
    stepNumber: 9,
    title: 'Reinstall Hold Switch and Headphone Jack Assembly',
    description:
      'Secure the headphone jack and hold switch assemblies back into the case.',
    images: ['/hobbies/ipod-tutorial/step8.jpg'],
  },
  {
    stepNumber: 10,
    title: 'Prepare the Switch Mount',
    description:
      'The supports can leave some exess material on the mounting bracket. Use some sandpaper or a file to clean up the top surface as shown.',
    images: [
      '/hobbies/ipod-tutorial/step10.jpg',
      '/hobbies/ipod-tutorial/step10.1.jpg',
    ],
  },
  {
    stepNumber: 11,
    title: 'Paint the Switch Mount',
    description:
      'Next use a Sharpie to paint half the switch mount black. This will give the switch a two-tone look that matches the original hold switch. The part of the mount that should be painted is shown in the pictures.',
    images: [
      '/hobbies/ipod-tutorial/step11.jpg',
      '/hobbies/ipod-tutorial/step11.1.jpg',
    ],
  },
  {
    stepNumber: 12,
    title: 'Install Switch in Slot',
    description:
      'The switch element should be installed before the mounting bracket with the arm pointing downwards. It will rest in the slot until the mount is secured behind it.',
    images: [
      '/hobbies/ipod-tutorial/step9.jpg',
      '/hobbies/ipod-tutorial/step9.1.jpg',
      '/hobbies/ipod-tutorial/step9.2.jpg',
    ],
  },
  {
    stepNumber: 13,
    title: 'Install the Switch Mount',
    description:
      'Carefully install the painted switch mount while ensuring the switch is properly aligned in the slot.\n\n1. The tab on the right side of the mount will slide behind the metal clip where the headphone jack screws into.\n2. The left side can be pressed into position and secured with the screw that was removed from the hold switch earlier.',
    images: [
      '/hobbies/ipod-tutorial/step12.jpg',
      '/hobbies/ipod-tutorial/step12.1.jpg',
      '/hobbies/ipod-tutorial/step12.2.jpg',
    ],
  },
  {
    stepNumber: 14,
    title: 'Check Alignment',
    description:
      'Verify that the switch is properly aligned in the slot and that all components are securely in place. The switch may be a bit stiff at first, but should slide back and forth.',
    images: [
      '/hobbies/ipod-tutorial/step13.jpg',
      '/hobbies/ipod-tutorial/step13.1.jpg',
    ],
  },
  {
    stepNumber: 15,
    title: 'Prepare Pairing Button',
    description:
      'The button is installed in the printed button holder by removing two of the legs on the button and securing it with super glue.\n\nOptionally, I marked where the button holder overlapped the hold switch rippon cable and cut a small notch to allow it to sit flat above the ribbon cable.',
    note: 'Make sure the two remaining legs of the button still close the circuit when presssed.',
    images: [
      '/hobbies/ipod-tutorial/step14.jpg',
      '/hobbies/ipod-tutorial/step14.1.jpg',
    ],
  },
  {
    stepNumber: 16,
    title: 'Install Pairing Button',
    description:
      'Install the pairing button in the case just below the hold switch as shown in the pictures. I used super glue to secure the button holder. Make sure to test the button clicks when the hold switch is pressed.',
    note: 'Scratch the surface of the case using a hobby knife or sandpaper before applying glue to ensure a strong bond.',
    images: [
      '/hobbies/ipod-tutorial/step15.jpg',
      '/hobbies/ipod-tutorial/step15.1.jpg',
    ],
  },
  {
    stepNumber: 17,
    title: 'Prepare MicroSwitch',
    description:
      'The microswitch has 4 metal tabs on the sides, these need to be trimmed flush using side cutters to fit inside the mouunting bracket. The black nubs on the back of the switch may also need to be removed.\n\nOptionally, you can also remove on of the legs as shown in the pictures, as it will not be used.',
    images: [
      '/hobbies/ipod-tutorial/step16.jpg',
      '/hobbies/ipod-tutorial/step16.1.jpg',
    ],
  },
  {
    stepNumber: 18,
    title: 'Install MicroSwitch',
    description:
      'The microswitch is installed facedown in the mounting bracket. Make sure the toggle on the micro switch is aligned with the switch in the slow of the case (both are toward the right side in the photo).',
    note: 'I found it was easier to solder the wires before installing the switch.',
    images: [
      '/hobbies/ipod-tutorial/step18.jpg',
      '/hobbies/ipod-tutorial/step18.1.jpg',
    ],
  },
  {
    stepNumber: 19,
    title: 'Install the Other Components',
    description:
      'Install all your other components. I have not gone into detail on this step as there are many good tutorials online that cover this.\n\nFor my build, I used the following components:\n- Bluetooth board: KCX_BT_EMITTER\n- iPhone 7 Plus Taptic Engine\n- 504045 Size 2000mAh LiPo Battery\n- iFlash uDual w Samsung 128gb SD Card',
    images: ['/hobbies/ipod-tutorial/step17.jpg'],
  },
  {
    stepNumber: 20,
    title: 'Test and Close Case',
    description:
      'Once your done installing all the other components, test the iPod to make sure everything is working before closing up the case.',
    portrait: true,
    images: [
      '/hobbies/ipod-tutorial/step19.jpg',
      '/hobbies/ipod-tutorial/step19.1.jpg',
      '/hobbies/ipod-tutorial/step19.2.jpg',
    ],
  },
  {
    stepNumber: 21,
    title: 'Finished',
    description:
      "If everything went to plan, you've got a fully functioning bluetooth iPod with hold switch functionality while looking exactly like the day it left Apple. Congratulations!",
    images: [
      '/hobbies/ipod-tutorial/step20.jpg',
      '/hobbies/ipod-tutorial/step20.1.jpg',
      '/hobbies/ipod-tutorial/step20.2.jpg',
    ],
  },
];

const URL_REGEX = /(https?:\/\/[^\s]+)/g;

function renderWithLinks(text: string) {
  return text.split('\n').map((line, lineIdx) => {
    const parts = line.split(URL_REGEX);
    return (
      <span key={lineIdx}>
        {parts.map((part, i) =>
          URL_REGEX.test(part) ? (
            <a
              key={i}
              href={part}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-70 transition-opacity break-all"
            >
              {part}
            </a>
          ) : (
            part
          ),
        )}
        {lineIdx < text.split('\n').length - 1 && '\n'}
      </span>
    );
  });
}

interface StepProps {
  stepNumber: number;
  title: string;
  description: string;
  note?: string;
  caution?: string;
  portrait?: boolean;
  images: string[];
}

function GuideStep({
  stepNumber,
  title,
  description,
  note,
  caution,
  portrait = false,
  images,
}: StepProps) {
  const textBlock = (
    <div>
      <div className="flex items-baseline gap-4 mb-3">
        <span className="bg-text text-5xl font-light leading-none select-none">
          {String(stepNumber).padStart(2, '0')}
        </span>
        <h3 className="h1">{title}</h3>
      </div>
      <p className="p leading-relaxed whitespace-pre-line">
        {renderWithLinks(description)}
      </p>
      {note && (
        <div className="mt-4 bg-secondary border-l-4 border-[#525252] px-4 py-3">
          <span className="h3 text-xs font-semibold tracking-widest uppercase mr-2">
            Note
          </span>
          <span className="p text-sm">{note}</span>
        </div>
      )}
      {caution && (
        <div className="mt-4 bg-secondary border-l-4 border-foreground px-4 py-3">
          <span className="h3 text-xs font-semibold tracking-widest uppercase mr-2">
            Caution
          </span>
          <span className="p text-sm font-semibold">{caution}</span>
        </div>
      )}
    </div>
  );

  if (images.length === 0) {
    return (
      <div className="py-10 border-b border-[#d4d4d4] last:border-b-0">
        {textBlock}
      </div>
    );
  }

  if (images.length === 1) {
    return (
      <div className="py-10 border-b border-[#d4d4d4] last:border-b-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start">
          {textBlock}
          <div className="relative w-full aspect-video">
            <Image
              src={images[0]}
              alt={`Step ${stepNumber}`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-10 border-b border-[#d4d4d4] last:border-b-0">
      {textBlock}
      <div className="mt-6 grid grid-cols-2 gap-4">
        {images.map((src, i) => (
          <div
            key={i}
            className={`relative w-full ${portrait ? 'aspect-[3/4]' : 'aspect-video'}`}
          >
            <Image
              src={src}
              alt={`Step ${stepNumber} — image ${i + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) calc(50vw - 1rem), calc(min(896px, 100vw) / 2 - 1rem)"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function IpodBluetoothMod() {
  return (
    <div>
      <Header />

      {/* Hero */}
      <section
        className="py-24"
        style={{
          background:
            'linear-gradient(150deg, #dc2626 0%, #f87171 50%, #7f1d1d 100%)',
        }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-[8vw] sm:text-6xl font-light leading-none text-white tracking-wide">
            iPod Classic
            <br />
            Bluetooth Mod
          </h1>
          <div className="flex flex-wrap gap-8 mt-8 text-sm">
            <div className="flex flex-col gap-1">
              <span className="text-xs tracking-widest uppercase text-white/50">
                Difficulty
              </span>
              <span className="text-white/80">Hard</span>
            </div>
            <div className="w-px bg-white/20 self-stretch" />
            <div className="flex flex-col gap-1">
              <span className="text-xs tracking-widest uppercase text-white/50">
                Time
              </span>
              <span className="text-white/80">~4 hours</span>
            </div>
            <div className="w-px bg-white/20 self-stretch" />
            <div className="flex flex-col gap-1">
              <span className="text-xs tracking-widest uppercase text-white/50">
                Steps
              </span>
              <span className="text-white/80">21</span>
            </div>
            <div className="w-px bg-white/20 self-stretch" />
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="h2 tracking-widest uppercase mb-6">
            About This Build
          </h2>
          <p className="p leading-relaxed max-w-2xl">
            This is the first iPod classic bluetooth mod (that I know of) that
            preserves hold switch functionality. I didn't want want to sacrifice
            the ability to use the hold switch, so I designed this custom mount
            and switch that integrates with the existing mounting hardware
            inside the body of the iPod. I made sure to keep the clip that holds
            the backplate in place, so the installation of this mod doesn't
            affect the connection between the backplate and the body.
          </p>
          <p className="p leading-relaxed max-w-2xl mt-6">
            This mod requires drilling an additional slot in the backplate to
            allow the new switch to protrude through. This is the only difficult
            part of the installation. After installing the switch, the rest of
            the bluetooth mod follows what is already well documented online,
            such as the tutorial by Parts Plus Mods.
          </p>
        </div>
      </section>

      {/* What You'll Need */}
      <div className="divider max-w-4xl mx-auto px-6" />
      <section className="py-16 bg-secondary">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="h2 tracking-widest uppercase mb-10">
            What You'll Need
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div>
              <h3 className="h3 uppercase tracking-widest mb-6">Tools</h3>
              <ul className="space-y-3">
                {TOOLS.map((tool) => (
                  <li key={tool} className="flex items-start gap-3">
                    <span className="text-[#525252] mt-1 text-xs select-none">
                      ▸
                    </span>
                    <span className="p text-sm leading-relaxed">{tool}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="h3 uppercase tracking-widest mb-6">Parts</h3>
              <ul className="space-y-3">
                {PARTS.map((part) => (
                  <li key={part} className="flex items-start gap-3">
                    <span className="text-[#525252] mt-1 text-xs select-none">
                      ▸
                    </span>
                    <span className="p text-sm leading-relaxed">{part}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Build */}
      <div className="divider max-w-4xl mx-auto px-6" />
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="h2 tracking-widest uppercase mb-10">The Build</h2>
          {STEPS.map((step) => (
            <GuideStep
              key={step.stepNumber}
              stepNumber={step.stepNumber}
              title={step.title}
              description={step.description}
              note={
                'note' in step ? (step as { note?: string }).note : undefined
              }
              caution={
                'caution' in step
                  ? (step as { caution?: string }).caution
                  : undefined
              }
              portrait={
                'portrait' in step
                  ? (step as { portrait?: boolean }).portrait
                  : undefined
              }
              images={step.images}
            />
          ))}
        </div>
      </section>

      {/* That's It */}
      <div className="divider max-w-4xl mx-auto px-6" />
      <section className="py-16 bg-secondary">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="h2 tracking-widest uppercase mb-6">That's It</h2>
          <p className="p leading-relaxed max-w-2xl mb-8">
            I hope you found this tutorial helpful! You can check out some of my
            other projects on my portfolio.
          </p>
          <Link href="/" className="p text-sm heading-hover transition-colors">
            ← Back to Portfolio
          </Link>
        </div>
      </section>
    </div>
  );
}
