module.exports = [
  {
    id: 'restaurant',
    title: 'Restaurant Explorer',
    icon: '🍔',
    subtitle: 'Discover nearby restaurants and explore new cuisines by pairwise elimination',
    description: [
      'Three modes of picking a list of cuisines',
      'Data is scraped regularly from restaurant review sites using a Python (Scrapy) web crawler',
    ],
    images: {
      front: '/projects/eats_img1.jpg',
      back: '/projects/eats_img2.jpg'
    },
    tags: [
      "Vue", "Nuxt", "Express", "Python", "Scrapy", "Google Maps"
    ],
    links: [
      {
        title: "💻Live Demo",
        href: "https://eats.aidan.rocks",
      }
    ],
    theme: {
      bg: '#111',
      text: '#cacaca',
      shadow: '#444',
      pillBg: '#555',
      pillText: '#eee'
    }
  },
  {
    id: 'darts',
    title: 'Darts Scorer',
    icon: '🎯',
    subtitle: 'Easily score darts matches with friends locally or remotely',
    description: [
      'Features include user and match management, statistics tracking, as well as an interactable dart board in match',
      'Built with Ruby on Rails, client-side synchronization realized via WebSockets',
    ],
    images: {
      front: '/projects/darts_img1.jpg',
      back: '/projects/darts_img2.jpg'
    },
    tags: [
      "Ruby", "Rails", "Javascript", "WebSockets"
    ],
    links: [
      {
        title: "💻Live Demo",
        href: "http://darts.aidan.rocks",
      },
    ],
    theme: {
      bg: '#efefef',
      text: '#111',
      shadow: '#999',
      pillBg: '#777',
      pillText: '#eee'
    }
  },
  {
    id: 'pandemic',
    title: 'Pandemic',
    icon: '☣',
    subtitle: 'A Java implementation of the cooperative board game "Pandemic"',
    description: [
      'Includes the base game as well as the “On the Brink” expansion, all with networking functionality',
      'Built as part of a group project as part of the COMP 361 course at McGill University',
      'Features include game hosting/joining, a chat lobby, sending requests to interact with other players in the game, and an intuitive user interface',
    ],
    images: {
      front: '/projects/pandemic_img1.jpg',
      back: '/projects/pandemic_img2.jpg'
    },
    tags: [
      "Java", "Slick2D", "Firebase"
    ],
    links: [
      {
        title: "💾Download",
        href: "https://drive.google.com/open?id=1mIwmttsQxvyA95RaqwjRbF1pApTyrutS",
      }
    ],
    theme: {
      bg: '#151b29',
      text: '#cacaca',
      shadow: '#27334f',
      pillBg: '#394b75',
      pillText: '#eee'
    }
  },
  {
    id: 'comprehensive',
    title: 'Comprehensive',
    icon: '📕',
    subtitle: 'Python-inspired dictionary (object) comprehension for JavaScript/TypeScript',
    description: [
      'Features include applying transformations to the keys and values, unpacking multiple values from fixed-length nested arrays, iterating over keys of objects, and more',
      'Very lightweight (~1KB gzipped)'
    ],
    images: {
      front: '/projects/comprehensive_img1.png',
      back: '/projects/comprehensive_img2.png'
    },
    tags: [
      "TypeScript", "JavaScript"
    ],
    links: [
      {
        title: "📂Code",
        href: "https://github.com/aoldershaw/comprehensive",
      }
    ],
    theme: {
      bg: '#efefef',
      text: '#111',
      shadow: '#999',
      pillBg: '#777',
      pillText: '#eee'
    }
  },
]