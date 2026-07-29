export interface DropDownItem {
  heading: string;
  body: string[];
}

export interface CardDatum {
  id: string;
  media: string;
  mediaHover: string;
  isVideo?: boolean;
  mediaAlt: string;
  addBg?: boolean;
  title: string;
  subtitle: string;
  dropDownItems: DropDownItem[];
}

const CARD_DATA: CardDatum[] = [
  {
    id: 'about',
    media: '/headshot.png',
    mediaHover: '/headshot-smiley.png',
    mediaAlt:
      'Image of Russell Fenton, transitions to smiling when hovering cursor',
    addBg: true,
    title: 'ABOUT',
    subtitle: 'ME',
    dropDownItems: [
      {
        heading: 'EDUCATION',
        body: [
          'BE, Mechanical Engineering, University of Guelph\nSep 19 - Apr 24',
          'Exchange, Australian National University\nFeb 23 - Jun 23',
        ],
      },
      {
        heading: 'EXPERIENCE',
        body: [
          'Mechanical Design Engineer, i4 Product Design\nJul 25 - Present',
          'Captain, Galcon Marine Ltd\nApr 25 - Jun 25',
          'AI Trainer, DataAnnotation\nDec 24 - Apr 25',
          'Captain, TDot Water Taxi\nJul 20 - Jun 25',
          'Self-Employed, Fenton Lawn Care\nMay 17 - Sep 20',
        ],
      },
    ],
  },
  {
    id: 'engineering',
    media: '/engineering/gearbox-thumbnail.jpg',
    mediaHover: '/engineering/gearbox-animation.mp4',
    isVideo: true,
    mediaAlt:
      'Image showing CAD model of compound planetary gearbox, animated when hovering cursor',
    title: 'ENGINEERING',
    subtitle: 'MECHANICAL',
    dropDownItems: [
      {
        heading: 'ELECTROMECHANICAL HARVESTER',
        body: [
          'Harness energy from animal movement to perpetually power GPS tracker.',
          'Design team of 4. Built prototype. Presented to industry professionals.',
        ],
      },
      {
        heading: 'COMPOUND PLANETARY GEARBOX',
        body: [
          '3D printed gearbox for use in a bucket elevator prototype.',
          'Designed in SolidWorks with regard for 3D printing tolerances.',
        ],
      },
      {
        heading: 'NOTABLE COURSES',
        body: [
          'Adv Mechatronic System Design',
          'Mechanical Vibration',
          'Machine Design',
          'Material Science',
          'Thermodynamics',
          'Heat and Mass Transfer',
          'Electromechanical Devices',
          'Fluid Mechanics',
        ],
      },
    ],
  },
  {
    id: 'dev',
    media: '/dev/three-concept-photo.png',
    mediaHover: '/dev/three-concept-video-md.mp4',
    isVideo: true,
    mediaAlt:
      '3D avatar wearing a t-shirt on an e-commerce page, with a video showcasing a 360-degree spin when hovered over with the cursor.',
    title: 'DEV',
    subtitle: 'FULL-STACK',
    dropDownItems: [
      {
        heading: 'SHOPMATE AI',
        body: [
          'Virtual sales assistant for Shopify stores.',
          'JS, React, AWS, PineconeDB, OpenAI',
        ],
      },
      {
        heading: 'SOLANA PAY STOREFRONT',
        body: [
          'Developed an online store using blockchain transactions on Solana.',
          'Buildspace project.',
        ],
      },
      {
        heading: '3D VIRTUAL TRY-ON',
        body: [
          'Virtual try-on system for ecommerce, using avatars.',
          'Hobby project incorporating Three.js for 3D web graphics.',
        ],
      },
    ],
  },
  {
    id: 'hobbies',
    media: '/hobbies/led-panels.jpg',
    mediaHover: '/hobbies/led-panels-video.mp4',
    isVideo: true,
    mediaAlt:
      'Image of triangular LED panels on wall, changes color when hovering cursor.',
    title: 'HOBBIES',
    subtitle: 'MISC PROJECTS',
    dropDownItems: [
      {
        heading: 'BLUETOOTH IPOD CLASSIC',
        body: [
          "World's first iPod Classic Bluetooth mod maintaining hold switch functionality.",
          'Custom 3D printed mount and switch. No frame modifications required.',
        ],
      },
      {
        heading: 'FAUX NANOLEAF',
        body: [
          'Designed, built, and coded interactive LED wall panels.',
          'Arduino hardware / software',
        ],
      },
      {
        heading: '3D PRINTING',
        body: [
          '5+ years designing and printing parts on Ender 3 Pro and Bambu printers.',
          'Commisioned by clients for small manufacturing runs.',
        ],
      },
      {
        heading: 'DIY FPV DRONE',
        body: [
          "Spec'd, built, and tuned a 210mm quadcopter.",
          'Configured Betaflight and tuned PID settings.',
        ],
      },
      {
        heading: 'MARINE UPHOLSTERY',
        body: [
          'Fast learner, able to design and sew custom boat cushions.',
          'Complex patterns with piping and fabric pulls.',
        ],
      },
    ],
  },
];

export default CARD_DATA;
