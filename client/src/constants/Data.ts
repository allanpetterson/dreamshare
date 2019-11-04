export enum PersonasIcons {
  MUSIC = 'music',
  ART = 'art',
  PHOTO = 'photo',
  TRAVEL = 'travel',
}

export interface CardIF {
  id: number;
  image: string,
  title: string,
  desc: string,
}

export const Personas = [
  {
    id: 1,
    name: 'Bradley Hunter',
    desc: 'Based in Chicago. I love playing tennis and loud music',
    icon: PersonasIcons.MUSIC,
    photo: 'https://images.unsplash.com/photo-1524854859347-bd2f42367134?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=240',
  },
  {
    id: 2,
    name: 'Marie Bennet',
    desc: 'Currently living in Colorado. Lover of art, languages and travelling.',
    icon: PersonasIcons.ART,
    photo: 'https://images.unsplash.com/photo-1498090890888-3df9298e7b84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=240',
  },
  {
    id: 3,
    name: 'Diana Wells',
    desc: 'Living in Athens, Greece. I love black and white classics, chillout, music and green tea.',
    icon: PersonasIcons.PHOTO,
    photo: 'https://images.unsplash.com/photo-1495191461910-ae8f611eca12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=240',
  },
  {
    id: 4,
    name: 'Bradley Hunter',
    desc: 'Based in Chicago. I love playing tennis and loud music',
    photo: 'https://images.unsplash.com/photo-1497472643930-495d25d8ca17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=240',
  }
]

export enum Dictionary {
  PERSONAS_TITLE = 'Meet a partner for your best',
  CARDS_TITLE = 'How Dreamshare',
  PERSONAS_BUTTON = 'See other partners',
  MAILLING_TITLE = 'Create your holiday',
  MAILLING_CALL = 'Hi! What are your holiday interests?',
  MAILLING_INPUT = 'Enter your interests',
  MAILLING_BUTTON = 'Search partners',
  BANNER_TITLE = 'Share your </br> holiday dream',
  BANNER_DESC = 'And find the perfect partner to fullfill it',
  BANNER_BUTTON = 'Find your holiday partner',
}

export const footerData = [
  'About',
  'Contact',
  'Press',
  'Blog',
  'Terms and privacy',
  'Help'
];
