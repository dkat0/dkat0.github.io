// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-the-mackey-problem",
      
        title: "The Mackey Problem",
      
      description: "Prove that the set of injections from the set of infinite binary sequences to the real numbers is uncountable.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/mackey-problem/";
        
      },
    },{id: "projects-savemyhealth",
          title: 'SaveMyHealth',
          description: "An AI-powered approach to health. HackCMU 2024 project.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/savemyhealth/";
            },},{id: "projects-senior-assassin",
          title: 'Senior Assassin',
          description: "Bot for Senior Assassin using Twilio &amp; unofficial Life360 API",
          section: "Projects",handler: () => {
              window.location.href = "/projects/seniorassassin/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%64%61%6E%69%65%6C@%74%72%79%64%75%6E%65.%61%69", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/dkat0", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/daniel-kathein", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/daniel_kathein", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
