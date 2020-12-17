import _ from 'lodash'

const episodes = _.map([
  require('./mlg/001.js').default,
  require('./mlg/002.js').default,
  require('./mlg/003.js').default,
  require('./mlg/004.js').default,
  require('./mlg/005.js').default,
  require('./mlg/006.js').default,
  require('./mlg/007.js').default,
  require('./mlg/008.js').default,
  require('./mlg/009.js').default,
  require('./mlg/010.js').default,
  require('./mlg/011.js').default,
  require('./mlg/012.js').default,
  require('./mlg/013.js').default,
  require('./mlg/014.js').default,
  require('./mlg/015.js').default,
  require('./mlg/016.js').default,
  // require('./mlg/017.js').default,
  // require('./mlg/018.js').default,
  // require('./mlg/019.js').default,
  // require('./mlg/020.js').default,
  // require('./mlg/021.js').default,
  // require('./mlg/022.js').default,
  // require('./mlg/023.js').default,
  // require('./mlg/024.js').default,
  // require('./mlg/025.js').default,
  // require('./mlg/026.js').default,
  // require('./mlg/027.js').default,
  // require('./mlg/028.js').default,
  // require('./mlg/029.js').default,
  // require('./mlg/030.js').default,
  //
  // require('./mla/001.js').default,
  // require('./mla/002.js').default,
  // require('./mla/003.js').default,
  // require('./mla/004.js').default,
  // require('./mla/006.js').default,
  // require('./mla/007.js').default,
  // require('./mla/008.js').default,
  // require('./mla/009.js').default,
  // require('./mla/010.js').default,
  // require('./mla/011.js').default,
  // require('./mla/012.js').default,
  //
  // require('./mlg/031.js').default,
  // require('./mlg/032.js').default,
], e => ({...e, mlg: !e.mla}))

const podcast = {
  title: "Machine Learning Guide",
  link: "http://ocdevel.com/podcasts/machine-learning",
  feed: "http://ocdevel.com/files/podcasts/machine-learning/feed.xml",
  keywords: "machine,learning,ml,introduction,artificial,intelligence,ai",
  image: "http://ocdevel.com/files/podcasts/machine-learning/art.jpg",
  date: new Date('02/01/2017'),
  teaser: "Introduction and intuition on machine learning principles, algorithms, and math. Your 'start here' ML resource.",
  body: "Teaches the high level fundamentals of machine learning and artificial intelligence. I teach basic intuition, algorithms, and math. I discuss languages and frameworks, deep learning, and more. Audio may seem inferior, but it's a great supplement during exercise/commute/chores. Where your other resources provide the machine learning trees, I provide the forest. Consider me your syllabus. At the end of every episode I provide high-quality curated resources for learning each episode’s details.",
  episodes: episodes,
  useLibsynPlayer: true // false will use html5 player w/ CloudFront file URL
};

export default podcast;