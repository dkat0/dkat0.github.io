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
        },{id: "nav-publications",
          title: "publications",
          description: "publications in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "My CV/Resume (click the PDF button for the full version)",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-the-mackey-problem",
      
        title: "The Mackey Problem",
      
      description: "Prove that the set of injections from the set of infinite binary sequences to the real numbers is uncountable.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/mackey-problem/";
        
      },
    },{id: "news-i-took-part-in-hackcmu-building-savemyhealth-an-ai-powered-personalized-health-amp-amp-longevity-recommendation-system",
          title: 'I took part in HackCMU, building SaveMyHealth, an AI-powered personalized health &amp;amp;amp; longevity...',
          description: "",
          section: "News",},{id: "news-i-m-really-excited-to-be-joining-nvidia-as-an-intern-this-summer-to-work-on-llms",
          title: 'I’m really excited to be joining NVIDIA as an intern this summer to...',
          description: "",
          section: "News",},{id: "projects-savemyhealth",
          title: 'SaveMyHealth',
          description: "An AI powered approach to health. HackCMU 2024 project.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/savemyhealth/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%64%6B%61%74%68%65%69%6E@%63%6D%75.%65%64%75", "_blank");
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
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=-lWZpGIAAAAJ", "_blank");
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