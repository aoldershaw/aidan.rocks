module.exports = [
  {
    id: "daily-dose",
    title: "Daily Dose of Dogs",
    icon: "🐶",
    subtitle:
      'A compiled daily list of popular (primarily dog-centric) content, inspired by <a href="https://www.youtube.com/channel/UCdC0An4ZPNr_YiFiYoVbwaw">Daily Dose of Internet</a>',
    description: [
      "Pulls popular posts from a specified list of subreddits each day",
      "Lazy-load media to improve page load, reduce bandwidth and memory usage",
      "SMS notifications via Twilio"
    ],
    images: {
      full: {
        front: "/projects/full/ddoi_img1.jpg",
        back: "/projects/full/ddoi_img2.jpg"
      },
      thumb: {
        front: "/projects/thumb/ddoi_img1.jpg",
        back: "/projects/thumb/ddoi_img2.jpg"
      }
    },
    tags: ["Javascript", "Twilio", "AWS Lambda", "IntersectionObserver"],
    links: [
      {
        title: "💻Live Demo",
        href: "https://ddoi.aidan.rocks"
      }
    ],
    theme: {
      linkBar: "#c8e5fe",
      bg: "#a3d4ff",
      text: "#0f1c28",
      shadow: "#396b96",
      pillBg: "rgb(45, 93, 136)",
      pillText: "#eee"
    }
  },
  {
    id: "restaurant",
    title: "Restaurant Explorer",
    icon: "🍔",
    subtitle:
      "Discover nearby restaurants and explore new cuisines by pairwise elimination",
    description: [
      "Three modes of picking a list of cuisines",
      "Data is scraped regularly from restaurant review sites using a Python (Scrapy) web crawler"
    ],
    images: {
      full: {
        front: "/projects/full/eats_img1.jpg",
        back: "/projects/full/eats_img2.jpg"
      },
      thumb: {
        front: "/projects/thumb/eats_img1.jpg",
        back: "/projects/thumb/eats_img2.jpg"
      }
    },
    tags: ["Vue", "Nuxt", "Express", "Python", "Scrapy", "Google Maps"],
    links: [
      {
        title: "💻Live Demo",
        href: "https://eats.aidan.rocks"
      }
    ],
    theme: {
      linkBar: "#111",
      bg: "#1e1e1e",
      text: "#cacaca",
      shadow: "#444",
      pillBg: "#555",
      pillText: "#eee"
    }
  },
  {
    id: "darts",
    title: "Darts Scorer",
    icon: "🎯",
    subtitle: "Easily score darts matches with friends locally or remotely",
    description: [
      "Features include user and match management, statistics tracking, as well as an interactable dart board in match",
      "Built with Ruby on Rails, client-side synchronization realized via WebSockets"
    ],
    images: {
      full: {
        front: "/projects/full/darts_img1.jpg",
        back: "/projects/full/darts_img2.jpg"
      },
      thumb: {
        front: "/projects/thumb/darts_img1.jpg",
        back: "/projects/thumb/darts_img2.jpg"
      }
    },
    tags: ["Ruby", "Rails", "Javascript", "WebSockets"],
    links: [
      {
        title: "💻Live Demo",
        href: "http://darts.aidan.rocks"
      }
    ],
    theme: {
      linkBar: "#efefef",
      bg: "#e8e8e8",
      text: "#111",
      shadow: "#999",
      pillBg: "#777",
      pillText: "#eee"
    }
  },

  {
    id: "comprehensive",
    title: "Comprehensive",
    icon: "📕",
    subtitle:
      "Python-inspired dictionary (object) comprehension for JavaScript/TypeScript",
    description: [
      "Features include applying transformations to the keys and values, unpacking multiple values from fixed-length nested arrays, iterating over keys of objects, and more",
      "Very lightweight (~1KB gzipped)"
    ],
    images: {
      full: {
        front: "/projects/full/comprehensive_img1.png",
        back: "/projects/full/comprehensive_img2.png"
      },
      thumb: {
        front: "/projects/thumb/comprehensive_img1.png",
        back: "/projects/thumb/comprehensive_img2.png"
      }
    },
    tags: ["TypeScript", "JavaScript"],
    links: [
      {
        title: "📂Code",
        href: "https://github.com/aoldershaw/comprehensive"
      }
    ],
    theme: {
      linkBar: "#efefef",
      bg: "#efefef",
      text: "#111",
      shadow: "#999",
      pillBg: "#777",
      pillText: "#eee"
    }
  },
  {
    id: "pandemic",
    title: "Pandemic",
    icon: "☣",
    subtitle: 'A Java implementation of the cooperative board game "Pandemic"',
    description: [
      "Includes the base game as well as the “On the Brink” expansion, all with networking functionality",
      "Built as part of a group project as part of the COMP 361 course at McGill University",
      "Features include game hosting/joining, a chat lobby, sending requests to interact with other players in the game, and an intuitive user interface"
    ],
    images: {
      full: {
        front: "/projects/full/pandemic_img1.jpg",
        back: "/projects/full/pandemic_img2.jpg"
      },
      thumb: {
        front: "/projects/thumb/pandemic_img1.jpg",
        back: "/projects/thumb/pandemic_img2.jpg"
      }
    },
    tags: ["Java", "Slick2D", "Firebase"],
    links: [
      {
        title: "💾Download",
        href:
          "https://drive.google.com/open?id=1mIwmttsQxvyA95RaqwjRbF1pApTyrutS"
      }
    ],
    theme: {
      linkBar: "#151b29",
      bg: "#151b29",
      text: "#cacaca",
      shadow: "#27334f",
      pillBg: "#394b75",
      pillText: "#eee"
    }
  }
];
