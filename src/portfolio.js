/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from 'react-easy-emoji';

const illustration = {
  animated: false, // set to false to use static SVG
};

const greeting = {
  username: 'Angel Albeniz Marquinez',
  title: "Hi all, I'm Angel",
  subTitle: emoji(
    'Telecommunications Engineer with great passion for technology and aviation. I love to face new projects, carry them out and never stop learning along the way.'
  ),
  resumeLink:
    'https://drive.google.com/file/d/1zTjC09nZOaVMN6mkRX5PEHCDFhiVNT0S/view?usp=sharing',
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: 'https://www.linkedin.com/in/angel-albeniz-marquinez-a90586149',
  gmail: 'angelalbeniz96@gmail.com',
  instagram: 'https://www.instagram.com/angelalbeniz',
  // Instagram and Twitter are also supported in the links!
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: 'What I do',
  subTitle: '',
  skills: [
    emoji(
      '⚡ Development of drone solutions using Ardupilot and PX4 ecosystems'
    ),
    emoji('⚡ Complete hardware design of custom electronics'),
    emoji(
      '⚡ Other tools: SDRadio, VNA analysis & tuning, Photoshop,  Arduinio, Linux ...'
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: 'UAV expert',
      fontAwesomeClassname: 'fab fa-avianex',
    },
    {
      skillName: 'Electronic design',
      fontAwesomeClassname: 'fas fa-microchip',
    },
    {
      skillName: 'Robotics',
      fontAwesomeClassname: 'fas fa-robot',
    },
	{
      skillName: 'PCB desing',
      fontAwesomeClassname: 'fas fa-layer-group',
    },
    {
      skillName: '3D design',
      fontAwesomeClassname: 'fas fa-cubes',
    },
    {
      skillName: 'Telecom',
      fontAwesomeClassname: 'fas fa-broadcast-tower',
    },
    {
      skillName: 'Technical drawing',
      fontAwesomeClassname: 'fas fa-drafting-compass',
    },
    {
      skillName: 'C++',
      fontAwesomeClassname: 'fas fa-code',
    },
    {
      skillName: 'Python',
      fontAwesomeClassname: 'fab fa-python',
    },
    {
      skillName: 'Sql-database',
      fontAwesomeClassname: 'fas fa-database',
    },
    {
      skillName: 'Php',
      fontAwesomeClassname: 'fab fa-php',
    },
    {
      skillName: 'Pilot',
      fontAwesomeClassname: 'fas fa-plane',
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: 'UPNA',
      logo: require('./assets/images/UPNALogoXS.png'),
      subHeader: 'Bachelors degree in Telecommunications Engineering',
      duration: 'September 2014 - June 2018',
      descBullets: [
        'Specialized in Advance Communications', 		
      ],
    },

  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: 'Drone development', //Insert stack or technology you have experience in
      progressPercentage: '90%', //Insert relative proficiency in percentage
    },
    {
      Stack: 'Electronic design',
      progressPercentage: '80%',
    },
    {
      Stack: 'Programming',
      progressPercentage: '70%',
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: 'Hardware Engineer',
      company: 'FERCHAU Spain S.L.U',
      companylogo: require('./assets/images/FerchauLogo.png'),
      date: 'January 2022 – Present',
      desc:
        'R&D development on UAV platforms, integration of new hardware and control systems for advanced navigation.',
      descBullets: [
        'UAV platform development and flight operations management.',
        'Project and multidisciplinary teams management.',
      ],
    },
    {
      role: 'Chief Engineer',
      company: 'HelixNorth',
      companylogo: require('./assets/images/HelixNorthLogo.png'),
      date: 'April 2018 – january 2022',
      desc:
        'Chief engineer in charge of the design and development of UAV solutions.',
      descBullets: [
        'Exhibitor at the international trade fair, INTERGEO',
        'International implementation of drone solutions in LATAM countries.',
      ],
    },
    {
      role: 'Lecturer',
      company: 'AIN',
      companylogo: require('./assets/images/AINLogo.png'),
      date: 'May 2019 – June 2019',
      desc:
        'Lecturer giving advanced course on drone technology and its industrial applications.',
    },
    {
      role: 'Lecturer',
      company: 'CIP Donapea',
      companylogo: require('./assets/images/DonapeaLogo.png'),
      date: 'May 2018 – June 2018',
      desc:
        'Lecturer giving CAP course for teacher qualification on Introduction to Drone Technology, Design and Construction.',
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: 'AngelAlbeniz', // Change to your github username to view your profile in Contact Section.
  showGithubProfile: 'true', // Set true or false to show Contact profile using Github, defaults to true
  display: false, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: 'Big Projects',
  subtitle: 'SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH',
  projects: [
    {
      image: require('./assets/images/saayaHealthLogo.webp'),
      link: 'http://saayahealth.com/',
    },
    {
      image: require('./assets/images/nextuLogo.webp'),
      link: 'http://nextu.se/',
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji(' Certifications and Achievements 🏆 '),
  subtitle:
    'Publications, Achievements, and Some Cool Stuff that I have done !',

  achievementsCards: [
    {
      title: 'Paper Publication',
      subtitle:
        '"Autonomous landing and avoidance system virtual validation approach" presented at ICUAS ’22 in Dubrovnik Croatia',
      image: require('./assets/images/IEEE.png'),
	  footerLink: [
      {
        name: 'View',
        url:
          'https://ieeexplore.ieee.org/document/9836209',
      },
      ],
    },
    {
      title: 'Private pilot license (PPL)',
      subtitle:
        'Obtained the PPL license at the Real Aeroclub de Navarra in january 2021',
      image: require('./assets/images/RANLogo.png'),
	  footerLink: [
        
      ],
    },
    {
      title: 'Olimpiada de dibujo',
      subtitle:
        '3rd place in the Technical Drawing Olympics by the School of Architecture of the University of Navarre in 2014.',
      image: require('./assets/images/UNAVLogo.png'),
      footerLink: [
        {
          name: 'View',
          url:
            'https://www.diariodenavarra.es/noticias/navarra/tierra_estella_valdizarbe/2014/04/12/un_alumno_del_puy_una_olimpiada_dibujo_tecnico_154890_1006.html',
        },
      ],
    },

    {
      title: 'IX Concurso Ingenio y Diseño',
      subtitle: '1st place in the 9th Competition of Ingenuity and Design by the School of Engineering of the University of Navarre in 2013.',
      image: require('./assets/images/TecnunLogo.png'),
      footerLink: [
        
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: 'Blogs',
  subtitle:
    'With Love for Developing cool stuff, I love to write and teach others what I have learnt.',

  blogs: [
    {
      url:
        'https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae',
      title: 'Win a Google Assistant Tshirt and $200 in Google Cloud Credits',
      description:
        'Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?',
    },
    {
      url: 'https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e',
      title: 'Why REACT is The Best?',
      description:
        'React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.',
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: 'TALKS',
  subtitle: emoji(
    'I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅'
  ),

  talks: [
    {
      title: 'Build Actions For Google Assistant',
      subtitle: 'Codelab at GDG DevFest Karachi 2019',
      slides_url: 'https://bit.ly/saadpasta-slides',
      event_url: 'https://www.facebook.com/events/2339906106275053/',
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji('Podcast 🎙️'),
  subtitle: 'I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY',

  // Please Provide with Your Podcast embeded Link
  podcast: [
    'https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo',
  ],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji('Contact Me ☎️'),
  subtitle:
    'For more information contact me at:',
  number: 'angelalbeniz96@gmail.com',
  emailAddress: 'angelalbeniz96@gmail.com',
};

// Twitter Section

const twitterDetails = {
  userName: 'twitter', //Replace "twitter" with your twitter username without @
  display: false, // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
