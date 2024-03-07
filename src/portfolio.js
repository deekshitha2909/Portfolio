/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Deekshitha Chappidi",
  title: "Hi all, I'm Deekshitha Reddy Chappidi",
  subTitle: emoji(
    "I possess strong skills in data analysis with a focus on the education sector. My experience includes analyzing educational data to extract meaningful insights, improve decision-making processes, and enhance overall performance within educational institutions with expertise in Data Analytics, SQL, Python, PowerBI, and I have successfully executed impacful data projects"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1CfosT9278cXwZ2LNWO5KSd-EYqXLpMsl/view?usp=share_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/deekshitha2909",
  linkedin: "https://www.linkedin.com/in/deekshitha-chappidi/",
  gmail: "deekshitha.chappidi@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Excelling as a meticulous Graduate Research Assistant in precise data analysis.",
  skills: [
    emoji(
      "⚡ Leveraging a combination of Python and SQL, I am implementing streamlined procedures for the extraction and preparation of data, aiming to enhance overall accuracy and optimize the efficiency of the analysis processes."
    ),
    emoji("⚡ Derive predictive insights via analysis, identifying emerging patterns and opportunities, and contributing to the development of proactive strategies to enhance overall performance of the machine learning models."),
    emoji(
      "⚡ Developing dynamic and user-friendly visualizations through tools such as Power BI, transforming complex datasets into actionable insights for performance analysis."
    )
  ],
  
  softwareSkills: [
    {
      skillName: "SQL",
      fontAwesomeClassname: "fa fa-database"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "PowerBI",
      fontAwesomeClassname: "fa fa-diamond"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Bowling Green State University",
      logo: require("./assets/images/bgsu.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "August 2022 - Present",  
      desc: "Courses: Big Data Analysis, Data Science Programming, Python for Computational Data Science, etc.."
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "SQL", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Python",
      progressPercentage: "80%"
    },
    {
      Stack: "PowerBI",
      progressPercentage: "90%"
    },
    {
      Stack: "Analytical Skills",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    
    {
      role: "Data Analyst Intern",
      company: "Bowling Green State University",
      companylogo: require("./assets/images/bgsu.png"),
      date: "May 2023 – August 2023",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      descBullets: [
        "Gathered and consolidated data from diverse datasets, executing data aggregation, filtering, and grouping through SQL. Translated the data to facilitate effective communication with other teams.",
        "Collected, formulated, and documented business procedures and guidelines, utilizing SQL and Power BI to define data. Emphasized trends and designed future state blueprints for business stakeholders and cross-functional teams.",
        "Conducted statistical analysis and data modeling to extract meaningful conclusions and recommendations.",
        "Developed data visualizations (dashboards) and reports using Power BI, aiming to articulate findings effectively to stakeholders."
      ]
    },
    {
      role: "Graduate Research Assistant",
      company: "Bowling Green State University",
      companylogo: require("./assets/images/bgsu.png"),
      date: "August 2022 – Present",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Employed Python and SQL to streamline the extraction and preparation of data, enhancing accuracy and optimizing analysis processes.",
        "Conducted exploratory data analysis (EDA) with Pandas and NumPy, preparing data for predictive modeling. Executed univariate and bivariate exploratory and statistical analysis, identifying anomalies and outliers in the data.",
        "Developed an interactive cohort analysis, contributing to a 93% yearly student retention rate improvement.",
        "Constructed an interactive Power BI dashboard to analyze student success and retention at the university, considering various factors.",
        "Translated intricate analytics into clear and concise actionable insights, presenting data-based recommendations to the team.",
        "Collaborated with team members to formulate data-driven strategies for enhancing business processes."
      ]
    },
    {
      role: "Data Analyst",
      company: "Tata Consultancy Services",
      //project: "Redfish Server Implementation using OpenAPI",
      companylogo: require("./assets/images/tcs.png"),
      date: "April 2021 – August 2022",
      //desc: "Capstone Project - Redfish Server Implementation using OpenAPI",
      descBullets: [
        "Formulated SQL queries to manipulate, filter, and extract necessary data, delivering results to team members.",
        "Created queries, measures, and visualizations in PowerBI to cleanse, transform, and visually present data.",
        "Produced reports on essential metrics, designed dashboards, and formulated queries for insightful company-wide analysis.",
        "Updated and imported data into Power BI from various sources, supervised the data model (ERD) to ensure precise data relationships through primary and foreign keys, and transformed data for analytical purposes.",
        "Led the mentorship of junior team members, offering guidance and support to enhance their technical skills and foster a collaborative work environment."
      ]
    },
    {
      role: "Data Analyst Intern",
      company: "Tata Consultancy Services",
      companylogo: require("./assets/images/tcs.png"),
      date: "August 2020 – March 2021",
      descBullets: [
        "Employed MS Excel to link, map, and clean large, distributed data sources.", "Analyzed and extracted information from various confidential databases and data marts using SQL queries.",
        "Conducted data cleansing and manipulation in Excel, utilizing functions like VLOOKUPS, HLOOKUPS, pivot tables, and adjusting data points."
        
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  // subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Sentiment Analysis of Amazon Reviews using Pyspark",
      projectDesc:
        "Utilized PySpark for conducting sentiment analysis on Amazon customer reviews, crafted data preprocessing pipelines to cleanse and convert the review data for analytical purposes, and applied data visualization techniques to effectively showcase sentiment analysis outcomes, extracting actionable insights.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/deekshitha2909/Sentiment-Analysis"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      // image: require("./assets/images/nextuLogo.webp"),
      projectName: "HLA Imputation using Machine Learning",
      projectDesc:
        "Explored and compared two advanced sequence-to-sequence architectures, namely standard LSTM and Bidirectional LSTM integrated with Bahdanau attention, aiming to assess their performance in complex sequence tasks such as machine translation. Conducted extensive experimentation on an HLA genotype dataset, revealing that the Bi-LSTM with Bahdanau attention outperformed its unidirectional counterpart, particularly in processing HLA sequences, highlighting the potential of bidirectional context processing and attention mechanisms.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/deekshitha2909/HLA-Imputation-using-Machine-Learning"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
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
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  //number: "+1 (419) – 378 – 5607",
  email_address: "deekshitha.chappidi@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
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
  isHireable
};
