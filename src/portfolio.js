/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true, // Set to false to use static SVG
};

const greeting = {
  username: "Syed Hammad",
  title: "Hi all, I'm Hammad",
  subTitle: emoji(
    "I am a MERN Stack Developer my primary focus is on Front End (React JS and React Native) , love coding and I code every single day. Currently learning backend technologies like NodeJs, Express and MongoDB. I always willing to work in a team of experienced developers and take my skills to the next level."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/syedhammad1",
  linkedin: "#",
  gmail: "shammad287@gmail.com",
  // facebook: "https://www.facebook.com/ehxn0",
  // medium: "https://ehsanshakeel.medium.com/",
  // stackoverflow: "https://stackoverflow.com/users/13884028/ahsan-shakeel",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Crazy MERN Stack Developer Who Wants To Explore Every Tech Stack",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your mobile applications"
    ),
    emoji(
      "⚡ Integration of third party services such as Firebase/ Rest API's"
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "react native",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },

    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section
const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Axiom",
      logo: require("./assets/images/axiom.png"),
      subHeader: "Cloud Native Computing",
      duration: "June 2019 - July 2020",
    },
    {
      schoolName: "NED University",
      logo: require("./assets/images/ned.png"),
      subHeader:
        "Bachelor of Science in Industrial & Manufacturing Engineering",
      duration: "January 2013 - June 2017",
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%",
    },
    {
      Stack: "Programming",
      progressPercentage: "60%",
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "React Native Developer",
      company: "Tresmind Solution",
      companylogo: require("./assets/images/tresmind.jpeg"),
      date: "March 2021 – May 2021",
    },
    {
      role: "Front-End Developer",
      company: "Upwork",
      companylogo: require("./assets/images/upwork.png"),
      date: "May 2021 – Present",
    },
    {
      role: "Mobile Application Developer",
      company: "Kardiya Technologies",
      companylogo: require("./assets/images/kardiya.jpeg"),
      date: "September 2021 – Present",
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/",
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc
const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "HTML, CSS, and Javascript for Web Developers",
      subtitle: "By John Hopkins University (Coursera)",
      image:
        "https://about.coursera.org/images/logos/coursera-logo-full-rgb.png",
      footerLink: [
        {
          name: "Certification",
          url: require("./assets/images/HTML_CSS_and_Javascript_for_Web_Developers.pdf"),
        },
      ],
    },
    {
      title: "JavaScript Objects, Prototypes, and Classes",
      subtitle: "By Jim Cooper (Pluralsight)",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Pluralsight_Logo.svg/1280px-Pluralsight_Logo.svg.png",
      footerLink: [
        {
          name: "Certification",
          url: require("./assets/images/JavaScript_Objects_Prototypes_and_Classes.pdf"),
        },
      ],
    },
    {
      title: "React Big Picture",
      subtitle: "By Cory House (Pluralsight)",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Pluralsight_Logo.svg/1280px-Pluralsight_Logo.svg.png",

      footerLink: [
        {
          name: "Certification",
          url: require("./assets/images/React_Big_Picture.pdf"),
        },
      ],
    },
    {
      title: "React Hooks",
      subtitle: "By Peter Kellner (Pluralsight)",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Pluralsight_Logo.svg/1280px-Pluralsight_Logo.svg.png",

      footerLink: [
        {
          name: "Certification",
          url: require("./assets/images/React_Hooks.pdf"),
        },
      ],
    },
    {
      title: "React and Redux",
      subtitle: "By Cory House (Pluralsight)",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Pluralsight_Logo.svg/1280px-Pluralsight_Logo.svg.png",

      footerLink: [
        {
          name: "Certification",
          url: require("./assets/images/React_and_Redux.pdf"),
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      // url: "https://ehsanshakeel.medium.com/how-to-create-google-spreadsheet-api-and-build-an-android-app-53988add122e",
      // title: "How to create Google Spreadsheet API and Build an Android App",
      // description:
      //   "Creating an application using Google Spreadsheet API as a backend.",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/syedhammad",
      event_url: "https://www.facebook.com/events/2339906106275053/",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Syed-Hammad-from-Karachi--Pakistan-e9givv/a-a15itvo",
  ],
  display: true, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3243454077",
  email_address: "shammad287@gmail.com",
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true, // Set true to display this section, defaults to false
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
