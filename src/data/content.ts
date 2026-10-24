import { ServiceItem, PortfolioItem, ShowreelCategory } from '../types';

export const BRAND_INFO = {
  name: '2KMotion',
  subtitle: 'Photography · Cinematography · Video Editing · Creative Production',
  tagline: 'We Capture Moments. We Create Stories.',
  supportingText:
    'From unforgettable Tamil weddings to creative brand advertisements, professional photography, and engaging social media content, 2KMotion brings your vision to life through stunning visuals and cinematic storytelling.',
  heroEyebrow: "TAMIL NADU'S CREATIVE VISUAL STUDIO",
  heroDescription:
    'From beautiful weddings and memorable events to professional advertisements and creative digital content, we turn your ideas into extraordinary visual experiences.',
  serviceIntro: 'Photography. Cinematography. Editing. Everything Your Story Needs.',
  phone: '78450 05919',
  phoneTel: 'tel:7845005919',
  email: 'twokmotion@gmail.com',
  emailMailto: 'mailto:twokmotion@gmail.com',
  whatsappUrl: 'https://wa.me/917845005919',
  instagramUrl: 'https://instagram.com/twokmotion',
  youtubeUrl: 'https://www.youtube.com/channel/UCLRtSDneQPxy-Hcz_0bDaFw',
  locations: ['Chennai', 'Madurai', 'Coimbatore', 'Tiruchirappalli', 'Thanjavur', 'Across Tamil Nadu']
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'video-editing',
    category: 'video_editing',
    title: 'Video Editing',
    subtitle: 'Post-Production & Motion Graphics',
    description:
      'Professional video editing using Adobe Premiere Pro and Adobe After Effects, including cinematic edits, motion graphics, transitions, visual effects, and color grading.',
    deliverables: [
      'Cinematic color grading & film emulation',
      'Adobe Premiere Pro & After Effects workflow',
      'Dynamic transitions & custom motion graphics',
      'High-fidelity sound design & dialogue mastering',
      'Formats optimized for 4K YouTube & vertical reels'
    ],
    tools: ['Adobe Premiere Pro', 'Adobe After Effects', 'DaVinci Resolve'],
    image: '/src/assets/images/editing_suite_workstation_1792823029064.jpg',
    imageAlt: 'Modern video editing suite with color grading scopes and dual monitors'
  },
  {
    id: 'photo-editing',
    category: 'photo_editing',
    title: 'Photo Editing',
    subtitle: 'High-End Retouching & Grading',
    description:
      'Professional photo retouching, Adobe Photoshop editing, Lightroom color correction, portrait enhancement, skin retouching, and creative photo manipulation.',
    deliverables: [
      'Natural skin tone preservation & frequency separation',
      'Adobe Lightroom tonal balancing & color science',
      'High-fashion & traditional bridal portrait enhancement',
      'Jewellery highlight & silk fabric texture detailing',
      'Print-ready high-resolution TIFF & web deliverables'
    ],
    tools: ['Adobe Photoshop', 'Adobe Lightroom Classic'],
    image: '/src/assets/images/tamil_bride_portrait_1792822989407.jpg',
    imageAlt: 'High-end portrait retouching of Tamil bride with Kanchipuram silk and temple jewelry'
  },
  {
    id: 'photography-videography',
    category: 'event_coverage',
    title: 'Photography & Videography',
    subtitle: 'Comprehensive Event Coverage',
    description:
      'Professional photo and video coverage for weddings, engagements, birthdays, corporate events, family functions, and all special occasions.',
    deliverables: [
      'Multi-camera coverage with cinema rigs & prime lenses',
      'Gimbal-stabilized footage & aerial drone perspectives',
      'Comprehensive candid moments & traditional group portraits',
      'High-resolution raw capture & archival storage',
      'Fast sneak-peek delivery within 48 hours'
    ],
    tools: ['Sony FX3 / A7 IV', 'G-Master Lenses', 'DJI Ronin RS3'],
    image: '/src/assets/images/tamil_cinematographer_camera_1792823010108.jpg',
    imageAlt: 'Professional Tamil cinematographer operating camera on gimbal at wedding ceremony'
  },
  {
    id: 'wedding-photography',
    category: 'wedding_photography',
    title: 'Wedding Photography',
    subtitle: 'Authentic Tamil Rituals & Emotion',
    description:
      'Traditional Tamil wedding photography, candid photography, cinematic wedding films, wedding highlights, reception coverage, and emotional storytelling.',
    deliverables: [
      'Sacred Thaali tying, Oonjal, and Kasi Yatra rituals',
      'Emotional parent blessings & candid joy moments',
      'Cinematic 4K wedding highlight film (3-5 minutes)',
      'Full ceremony extended documentary film',
      'Curated heirloom fine-art wedding album'
    ],
    tools: ['Dual Cinema Cameras', '35mm & 85mm Prime Glass'],
    image: '/src/assets/images/hero_tamil_wedding_1792822987914.jpg',
    imageAlt: 'Authentic Tamil wedding couple in traditional silk attire smiling inside stone mandapam'
  },
  {
    id: 'pre-wedding-shoots',
    category: 'pre_wedding',
    title: 'Pre-Wedding Shoots',
    subtitle: 'Cinematic Couple Storytelling',
    description:
      'Creative pre-wedding photography and cinematic films featuring Tamil couples in beautiful outdoor, heritage, urban, and natural locations.',
    deliverables: [
      'Curated Tamil Nadu location scouting (beaches, temples, estates)',
      'Styling & color palette consultation',
      'Artistic couple portraiture & motion teaser video',
      'Concept-driven narrative moodboard',
      'High-resolution photos for save-the-date invites'
    ],
    tools: ['Cinema Drones', 'Natural Light & Diffusers'],
    image: '/src/assets/images/pre_wedding_tamil_couple_1792822988972.jpg',
    imageAlt: 'Tamil pre-wedding couple at sunrise in front of historic coastal temple in Tamil Nadu'
  },
  {
    id: 'advertisement-production',
    category: 'advertisement',
    title: 'Advertisement Production',
    subtitle: 'Commercial Brand Campaigns',
    description:
      'Professional advertising shoots, product photography, business promotional videos, brand campaigns, and commercial content for local businesses and growing brands.',
    deliverables: [
      'Commercial brand storyboarding & art direction',
      'Studio & on-location lighting setups',
      'Product hero photography for e-commerce & print',
      'High-impact video ads for Meta, Google & OTT',
      'Authentic regional South Indian casting & props'
    ],
    tools: ['Studio Strobe Lighting', 'Macro Cinema Optics'],
    image: '/src/assets/images/commercial_product_ad_tamil_1792823009033.jpg',
    imageAlt: 'Commercial product photography shoot for artisanal brass filter coffee in modern studio'
  },
  {
    id: 'social-media-content',
    category: 'social_media',
    title: 'Social Media Content Creation',
    subtitle: 'Reels, Shorts & Viral Aesthetics',
    description:
      'Instagram Reels, YouTube Shorts, promotional videos, influencer content, business reels, and engaging digital content for social media platforms.',
    deliverables: [
      '9:16 vertical video production tailored for Instagram & YouTube',
      'Hook-driven narrative editing & fast turnaround',
      'Trending audio curation & on-brand motion captions',
      'Batch production packages for monthly content calendars',
      'Performance analytics & engagement optimization'
    ],
    tools: ['Mobile Cinema Rigs', 'Vertical Color Workflows'],
    image: '/src/assets/images/tamil_candid_reels_creator_1792823028716.jpg',
    imageAlt: 'Young Tamil content creator smiling with camera in front of heritage Chettinad architecture'
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'p1',
    title: 'The Sacred Thaali Blessing — Madurai Mandapam',
    category: 'wedding_photo',
    categoryLabel: 'Wedding Photography',
    location: 'Madurai, Tamil Nadu',
    description:
      'Authentic ceremony capture as the sacred yellow thaali is tied amidst showers of yellow akshata rice and orange marigold petals. Preserving the heritage rituals of a traditional Tamil Hindu wedding.',
    image: '/src/assets/images/tamil_wedding_thaali_ritual_1792823028660.jpg',
    imageAlt: 'Tamil wedding sacred thaali tying ceremony with rice shower',
    aspectRatio: 'landscape',
    mediaType: 'image',
    exif: {
      camera: 'Sony FX3 Cinema Rig',
      lens: 'FE 50mm f/1.2 GM',
      settings: '1/250s · f/1.8 · ISO 640'
    },
    clientType: 'Showcase'
  },
  {
    id: 'p2',
    title: 'Symphony in Kanchipuram Silk & Temple Gold',
    category: 'portrait',
    categoryLabel: 'Portrait Photography',
    location: 'Chennai, Tamil Nadu',
    description:
      'Natural-light bridal portrait featuring handwoven magenta Kanchipuram silk, traditional jhumkas, kasu malai, and fragrant braided mallipoo jasmine flowers.',
    image: '/src/assets/images/tamil_bride_portrait_1792822989407.jpg',
    imageAlt: 'Editorial portrait of Tamil bride with traditional gold jewelry and jasmine garland',
    aspectRatio: 'portrait',
    mediaType: 'image',
    exif: {
      camera: 'Sony A7 IV',
      lens: 'FE 85mm f/1.4 GM',
      settings: '1/320s · f/2.0 · ISO 200'
    },
    clientType: 'Showcase'
  },
  {
    id: 'p3',
    title: 'Sunrise at Mahabalipuram — Ocean Heritage Story',
    category: 'pre_wedding',
    categoryLabel: 'Pre-Wedding Shoots',
    location: 'Mahabalipuram, Tamil Nadu',
    description:
      'Candid pre-wedding shoot of an authentic young Tamil couple walking hand in hand before the historic shore temple, bathed in warm morning light.',
    image: '/src/assets/images/pre_wedding_tamil_couple_1792822988972.jpg',
    imageAlt: 'Young Tamil couple in pre-wedding shoot at Mahabalipuram coastline',
    aspectRatio: 'landscape',
    mediaType: 'image',
    exif: {
      camera: 'Sony FX3',
      lens: 'FE 35mm f/1.4 GM',
      settings: '1/800s · f/2.8 · ISO 160'
    },
    clientType: 'Showcase'
  },
  {
    id: 'p4',
    title: 'Cinema in the Mandapam — Multi-Cam Wedding Film',
    category: 'wedding_cinema',
    categoryLabel: 'Wedding Cinematography',
    location: 'Coimbatore, Tamil Nadu',
    description:
      'Gimbal-stabilized cinematic wedding film sequence capturing the vibrant colors, sacred fire rituals, and joyful family laughter in high-definition 4K.',
    image: '/src/assets/images/tamil_cinematographer_camera_1792823010108.jpg',
    imageAlt: 'Behind the scenes of Tamil wedding cinematography',
    aspectRatio: 'landscape',
    mediaType: 'video',
    videoDuration: '04:18',
    exif: {
      camera: 'Sony FX3 / S-Log3',
      lens: 'FE 24-70mm f/2.8 GM II',
      settings: '4K 10-bit 4:2:2 · 50fps'
    },
    clientType: 'Showcase'
  },
  {
    id: 'p5',
    title: 'Joy in the Mandapam — Traditional Tamil Nuptials',
    category: 'wedding_photo',
    categoryLabel: 'Wedding Photography',
    location: 'Tiruchirappalli, Tamil Nadu',
    description:
      'Spontaneous celebration and laughter between bride and groom seated in the carved stone wedding hall, surrounded by traditional brass Vilakku lamps.',
    image: '/src/assets/images/hero_tamil_wedding_1792822987914.jpg',
    imageAlt: 'Tamil bride and groom in traditional wedding attire smiling happily',
    aspectRatio: 'landscape',
    mediaType: 'image',
    exif: {
      camera: 'Sony A7 IV',
      lens: 'FE 35mm f/1.4 GM',
      settings: '1/400s · f/2.2 · ISO 400'
    },
    clientType: 'Showcase'
  },
  {
    id: 'p6',
    title: 'Kaapi Culture — Artisanal South Indian Commercial Ad',
    category: 'commercial',
    categoryLabel: 'Commercial Advertisements',
    location: 'Chennai, Tamil Nadu',
    description:
      'Commercial advertising campaign for a contemporary South Indian handloom and brassware brand, combining traditional craftsmanship with modern minimalist lifestyle branding.',
    image: '/src/assets/images/commercial_product_ad_tamil_1792823009033.jpg',
    imageAlt: 'South Indian brass filter coffee commercial advertising campaign',
    aspectRatio: 'landscape',
    mediaType: 'image',
    exif: {
      camera: 'Sony A7R V',
      lens: 'FE 50mm f/1.2 GM',
      settings: '1/160s · f/4.0 · ISO 100'
    },
    clientType: 'Showcase'
  },
  {
    id: 'p7',
    title: 'Brassware & Silk Heritage — E-Commerce Collection',
    category: 'product',
    categoryLabel: 'Product Photography',
    location: 'Thanjavur, Tamil Nadu',
    description:
      'Clean studio product documentation of authentic South Indian handloom silk sarees and traditional brass filter coffee sets with warm gold reflections.',
    image: '/src/assets/images/commercial_product_ad_tamil_1792823009033.jpg',
    imageAlt: 'Product photography of South Indian brassware and silk textiles',
    aspectRatio: 'square',
    mediaType: 'image',
    exif: {
      camera: 'Sony A7R V Studio Rig',
      lens: 'FE 90mm f/2.8 Macro G OSS',
      settings: '1/200s · f/8.0 · ISO 100'
    },
    clientType: 'Showcase'
  },
  {
    id: 'p8',
    title: 'Chettinad Heritage Diaries — Social Media Reels',
    category: 'social_reels',
    categoryLabel: 'Social Media Reels',
    location: 'Karaikudi / Chettinad, Tamil Nadu',
    description:
      'Bespoke vertical series exploring Tamil Nadu cultural architecture, traditional kolam art, and street photography aesthetics for modern digital creators.',
    image: '/src/assets/images/tamil_candid_reels_creator_1792823028716.jpg',
    imageAlt: 'Tamil youth creator exploring Chettinad heritage for digital reel content',
    aspectRatio: 'portrait',
    mediaType: 'video',
    videoDuration: '00:58',
    exif: {
      camera: 'Sony A7 IV',
      lens: 'FE 24mm f/1.4 GM',
      settings: '4K 60fps · Rec.709 Master'
    },
    clientType: 'Showcase'
  },
  {
    id: 'p9',
    title: 'Color Grading Suite — Cinema Workflow Showcase',
    category: 'video_editing',
    categoryLabel: 'Video Editing',
    location: '2KMotion Studio, Tamil Nadu',
    description:
      'High-precision color grading in DaVinci Resolve & Premiere Pro, translating raw wedding camera log profiles into radiant skin tones and cinematic warmth.',
    image: '/src/assets/images/editing_suite_workstation_1792823029064.jpg',
    imageAlt: 'Professional video editing workstation and color grading monitor',
    aspectRatio: 'landscape',
    mediaType: 'video',
    videoDuration: '02:30',
    exif: {
      camera: 'Studio Capture',
      lens: 'Wide Angle Workflow',
      settings: 'ProRes 422 HQ · Rec.709'
    },
    clientType: 'Showcase'
  },
  {
    id: 'p10',
    title: 'Heritage Street Candid — Authentic Tamil Life',
    category: 'candid_photo',
    categoryLabel: 'Candid Photography',
    location: 'Mylapore, Chennai',
    description:
      'Warm candid slice-of-life photography capturing genuine smiles, hand-drawn rice kolams, and classical South Indian carved wooden doorways.',
    image: '/src/assets/images/tamil_candid_reels_creator_1792823028716.jpg',
    imageAlt: 'Candid street portrait of Tamil creative with camera by traditional temple house',
    aspectRatio: 'portrait',
    mediaType: 'image',
    exif: {
      camera: 'Sony A7 IV',
      lens: 'FE 35mm f/1.4 GM',
      settings: '1/500s · f/2.0 · ISO 250'
    },
    clientType: 'Showcase'
  }
];

export const SHOWREEL_CATEGORIES: ShowreelCategory[] = [
  {
    id: 'weddings',
    title: 'Tamil Wedding Cinema',
    subtitle: 'Sacred Rituals, Thaali Blessings & Joyful Highlights',
    duration: '03:45',
    location: 'Madurai & Chennai',
    coverImage: '/src/assets/images/hero_tamil_wedding_1792822987914.jpg',
    videoHighlights: [
      'Traditional Oonjal singing & garlands exchange',
      'The sacred thaali tying moment with akshata rice shower',
      'Grand reception entry with warm cinematic lighting',
      'Intimate family blessings and candid emotional tears'
    ]
  },
  {
    id: 'pre-wedding',
    title: 'Pre-Wedding Films',
    subtitle: 'Mahabalipuram Coastlines & Heritage Courtyards',
    duration: '02:20',
    location: 'Mahabalipuram & Chettinad',
    coverImage: '/src/assets/images/pre_wedding_tamil_couple_1792822988972.jpg',
    videoHighlights: [
      'Golden hour beach walks with ocean spray',
      'Historic stone temple architectural framing',
      'Playful candid moments and conversational interviews',
      'Drone sweeps over Tamil Nadu coastal greenery'
    ]
  },
  {
    id: 'events',
    title: 'Event & Family Functions',
    subtitle: 'Engagements, Seemantham & Birthday Celebrations',
    duration: '02:50',
    location: 'Coimbatore & Trichy',
    coverImage: '/src/assets/images/tamil_cinematographer_camera_1792823010108.jpg',
    videoHighlights: [
      'Traditional floral mandapam decor walkthroughs',
      'Candid multi-generational family reunions',
      'Musical performances and celebratory cheers',
      'Full 4K event documentation'
    ]
  },
  {
    id: 'commercial',
    title: 'Commercial Brand Ads',
    subtitle: 'Artisanal Silk, Brassware & Local Enterprise Campaigns',
    duration: '01:45',
    location: 'Chennai & Thanjavur',
    coverImage: '/src/assets/images/commercial_product_ad_tamil_1792823009033.jpg',
    videoHighlights: [
      'Product macro shots with rich gold reflections',
      'Authentic Tamil artisan and entrepreneur stories',
      'Social media advertisement cuts (9:16 & 16:9)',
      'High-impact visual pacing and brand storytelling'
    ]
  },
  {
    id: 'social-reels',
    title: 'Social Media Content',
    subtitle: 'High-Retention Instagram Reels & YouTube Shorts',
    duration: '01:15',
    location: 'Across Tamil Nadu',
    coverImage: '/src/assets/images/tamil_candid_reels_creator_1792823028716.jpg',
    videoHighlights: [
      'Dynamic hook transitions and trending sound design',
      'Crisp vertical framing optimized for mobile screens',
      'Cultural lifestyle reels with rapid audience retention',
      'Tailored color grading for vibrant OLED mobile displays'
    ]
  }
];

export const CREATIVE_PROCESS = [
  {
    step: '01',
    title: 'Understand',
    tagline: 'Listening to your story',
    description:
      "We discuss your requirements, style preferences, event timeline, and budget. Whether it's a multi-day Tamil wedding or a targeted commercial ad, we align closely with your creative vision.",
    points: ['Requirement gathering', 'Creative moodboarding', 'Clear transparent pricing']
  },
  {
    step: '02',
    title: 'Plan',
    tagline: 'Framing every detail',
    description:
      'We develop the shoot concept, timing schedule, location scouting across Tamil Nadu, and technical gear setup to guarantee seamless execution on the day of production.',
    points: ['Shot lists & timeline curation', 'Location & lighting scouting', 'Equipment preparation']
  },
  {
    step: '03',
    title: 'Create',
    tagline: 'Capturing cinematic moments',
    description:
      'Our team captures raw moments with cinema cameras, prime optics, and discreet unobtrusive presence, or works directly with your supplied footage for dedicated post-production.',
    points: ['Multi-camera 4K capture', 'Unobtrusive candid filming', 'Drone & gimbal cinematography']
  },
  {
    step: '04',
    title: 'Deliver',
    tagline: 'Mastering & delivery',
    description:
      'We complete the agreed editing, professional color grading, sound design, and revisions, delivering pristine high-resolution digital files and physical heirloom albums.',
    points: ['Collaborative review rounds', '4K & web-optimized masters', 'On-time delivery commitment']
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Creative Storytelling & Attention to Detail',
    description:
      'We look beyond standard posed frames to capture real, heartfelt emotions and intricate cultural moments that tell your unique narrative.'
  },
  {
    title: 'Photography & Video Under One Brand',
    description:
      'Seamless coordination between our photographers and cinematographers ensures unified visual tone, synchronized coverage, and zero conflicts on your big day.'
  },
  {
    title: 'Professional Editing & Color Grading',
    description:
      'Dedicated post-production with Adobe Premiere Pro, After Effects, and DaVinci Resolve ensures rich film tones and natural South Indian skin color science.'
  },
  {
    title: 'Tamil Wedding & Event Familiarity',
    description:
      'Deep, authentic understanding of Tamil rituals—from the sacred thaali tying and saptapadi to floral decor—ensuring no meaningful moment is ever missed.'
  },
  {
    title: 'Customized Solutions for Individuals & Businesses',
    description:
      'Flexible packages tailored to your specific scale, whether you need a single photographer for an intimate family function or a full multi-cam crew for brand ads.'
  },
  {
    title: 'Content Tailored for Social Media Platforms',
    description:
      'Fast-turnaround vertical teasers, reels, and shorts formatted specifically for Instagram and YouTube algorithms to engage friends, family, and customers.'
  },
  {
    title: 'Focus on Quality, Communication & Client Satisfaction',
    description:
      'Transparent milestones, responsive communication over phone and WhatsApp, and a genuine commitment to delivering memories that last for generations.'
  }
];
