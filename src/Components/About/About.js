import React from "react";
import "./About.css";
import Reveal from "../Reveal/Reveal";

export const About = () => {
  return (
    <div>
      <section id="about" className="about">
        <Reveal>
          <div className="container">
            <div className="about-title">
              <h2>
                About <span>Me</span>
              </h2>
              <hr />
            </div>
            <div className="grid">
              <div className="about-img">
                <img src="./images/profile.jpg" alt="Mozhdeh Marvi" />
              </div>
              <div className="about-content">
                <h3 className="border">Hi There!</h3>
                <p>
                  Hello! I'm <span className="name">Mozhdeh</span>, a passionate
                  front-end developer with a love for crafting exceptional web
                  experiences. Collaboration is at the core of my work ethic. I
                  enjoy working closely with designers, back-end developers, and
                  clients to transform concepts into reality. When I'm not
                  coding, you can often find me exploring the latest web design
                  trends, experimenting with new coding techniques, or simply
                  enjoying a good cup of coffee while sketching out ideas for my
                  next project. If you're looking for someone who is dedicated
                  to making your web presence shine, let's connect and bring
                  your ideas to life!
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
};
