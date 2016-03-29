import React from 'react';
import { Parallax, Background } from 'react-parallax';

import Contact from './Contact';
import Portfolio from './Portfolio';
import Jumbotron from './Jumbotron';

const images = {
  bgOCD: require('../assets/Background-OCD.jpg'),
  bgImage: require('../assets/BackgroundImage.jpg'),
  stix2: require('../assets/stix2.png'),
  lisaHead: require('../assets/Lisa/lisahead2.png'),
  tylerHead: require('../assets/Tyler/tylerhead.png'),
};

const portfolios = {
  lisa: [{
    name: "TheWanderingBackpackers",
    img: require("../assets/Lisa/WanderingBackpackers.png"),
    url: "http://thewanderingbackpackers.com/",
    description: "A Wordpress blog for our travels."
  }, {
    name: "Jobpig",
    img: require("../assets/Tyler/pig.png"),
    url: "http://jobpigapp.com",
    description: "A Pandora-like job finding website."
  }, {
    name: "Flashdrinks",
    img: require("../assets/Tyler/flashdrinkspic.png"),
    url: "https://flashdrink.firebaseapp.com",
    description: "Web & mobile mobile app for finding nearby drinking partners."
  }],

  tyler: [{
    name:"Habitica",
    img: require("../assets/Tyler/habiticapic.png"),
    url: "https://habitica.com",
    description: "A gamified habit-improvement app (web & mobile) w/ 800k+ users, ~$40k/m. I started this as a Kickstarter campaign which blew up to a multi-employee startup. Angular, Ionic, Node/Express, MongoDB, AWS."
  }, {
    name: "Jobpig",
    img: require("../assets/Tyler/pig.png"),
    url: "http://jobpigapp.com",
    description: "A Pandora-like job finding website."
  }, {
    name: "Flashdrinks",
    img: require("../assets/Tyler/flashdrinkspic.png"),
    url: "https://flashdrink.firebaseapp.com",
    description: "Web & mobile mobile app for finding nearby drinking partners."
  }, {
    name: "Indianchief Travel",
    img: require("../assets/Tyler/indianchieftravelpic.jpg"),
    url: "http://indianchieftravel.com/",
    description: ""
  }]
};

export default class App extends React.Component {
  render() {
    return (
      <div>

        <Parallax bgImage={images.bgOCD} strength={400} log={true}>
          <div>
            <Jumbotron title="OCDevel"/>
            <img className="stick" src={images.stix2} />
            <h1 className="Welcome">Welcome to the portfolio page of</h1>
            <h2 className="Names"> Tyler & Lisa Renelle</h2>
          </div>
        </Parallax>

        <Jumbotron title="Tyler Renelle" />
        <img className='head-image' src={images.tylerHead} />
        <ul className="social-buttons">
          <li><i href="https://www.facebook.com/lefnire" className="zocial facebook icon">Facebook</i></li>
          <li><i href="https://www.linkedin.com/in/lefnire" className="zocial linkedin icon">LinkedIn</i></li>
          <li><i href="https://twitter.com/lefnire" className="zocial twitter icon">Twitter</i></li>
          <li><i href="https://github.com/lefnire" className="zocial github icon">Github</i></li>
        </ul>
        <p className="description">Tyler is a full Stack JavaScript developer and has spent 10 years in web & mobile. He is focused on Node,
          React / React Native, and Angular / Ionic. He is the also creator of HabitRPG, a startup begun on Kickstarter which now has
          800k+ users. Tyler built an enterprise PDF-creation service employed by 1.5k sites, and websites for clients such as Adidas,
          BigFix, and UCSF. Currently obsessed with machine learning, he labels himself a "bonafide singularitarian".
          Available starting April for remote work in React, Angular / Ionic, Node, and/or Python.</p>
        <hr/>
        <Portfolio items={portfolios.tyler}/>

        <Parallax bgImage={images.bgImage} strength={400} log={true}>
          <Jumbotron title="Lisa Renelle" />
          <img className='head-image' src={images.lisaHead} />
          <ul className="social-buttons">
            <li><i target='_blank' href="https://www.facebook.com/lisa.haskellbunker" className="zocial facebook icon"/></li>
            <li><i target='_blank' href="https://www.linkedin.com/in/lisa-renelle-243413106" className="zocial linkedin icon"/></li>
            <li><i target='_blank' href="https://github.com/LisaMarie7073" className="zocial github icon"/></li>
            <li><i target='_blank' href="https://www.pinterest.com/lillisamhaskell/" className="zocial pinterest icon"/></li>
          </ul>
          <p className="description">Lisa is a front end JavaScript developer and been in the working with javascript for almost a year. She has currently been
            focusing on React. Lisa has worked 11 years in the medical field and would love to combine her knowledge in medical and programming one day.
            Lisa is available starting April for remote work in React and Javascript.</p>
          <hr/>
          <Portfolio items={portfolios.lisa} />
        </Parallax>

        <Contact />

      </div>
    );
  }


}