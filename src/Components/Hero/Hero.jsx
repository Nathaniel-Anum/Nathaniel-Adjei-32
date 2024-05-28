import React from "react";

import About from "../About/About";
import "./Hero.css";
import img from "../../assets/Nat/4.png";
import { Typewriter } from "react-simple-typewriter";
import Achievement from "../Achievements/Achievement";
import Gallery from "../Gallery/Gallery";
import Contact from "../Contact/Contact";
const Hero = () => {
  return (
    <>
      <div className="Intro">
        <div className="introContent">
          <span className="hello">Hello, </span>
          <span className="introText">
            I'm <span className="introName">Nathaniel Adjei</span> <br />
          </span>
          <p className="p-text2">
            <Typewriter
              words={[
                "A",
                "Professional",
                "Footballer.",
                "A Professional Footballer.",
              ]}
              loop={0}
              cursor
              cursorStyle="I"
              typeSpeed={200}
              delaySpeed={100}
              deleteSpeed={100}
            />
          </p>
          {/* <p className="introPara">i play ball </p> */}
        </div>
        <div className="arrange-pic">
          <img src={img} alt="profile" className="bg" />
        </div>
      </div>
      <About/>
      <Achievement/>
      <Gallery/>
      <Contact/>
    </>
  );
};

export default Hero;
