module.exports = {
  siteTitle: 'Raj Hegadkar | Front End Web Developer',
  siteDescription:
    'Raj Hegadkar is an incoming Front End Web Developer, based in India, who loves learning new things and helping tech beginners.',
  siteKeywords:
    'Raj Hegadkar, Rajendra Hegadkar, rajhegadkar, front end, bcs, web developer, javascript, dausa,  bit, mesra, deoghar',
  siteUrl: 'https://rajhegadkar.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: '.....',
  googleVerification: '..............',
  name: 'Raj Hegadkar',
  location: 'Pune, India',
  email: 'rajhegadkar@gmail.com',
  github: 'https://github.com/rajhegadkar',
  twitterHandle: 'rajhegadkar',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/rajhegadkar',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/rajhegadkar/',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/rajhegadkar',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/rajhegadkar',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
