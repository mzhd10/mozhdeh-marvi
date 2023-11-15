import React, { useEffect, useState } from "react";
import "./Home.css";

const Home = () => {
  const items = ["Developer", "Freelancer", "Designer"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length); // 3 % 3 = 0
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <section id="home">
        <div className="container">
          <div className="home">
            <div className="home-content">
              <div className="home-title">
                <h2>Hey, I'm</h2>
                <h1>Mozhdeh</h1>
              </div>
              <div className="text-wrapper">
                <p>
                  Creative <span className="items">{items[currentIndex]}</span>
                </p>
              </div>
              <div className="links">
                <div className="link">
                  <a href="#projects">View projects</a>
                </div>
                <span className="divider">or</span>
                <div className="link">
                  <a href="#about">Read About Me</a>
                </div>
              </div>
              <div className="scroll">
                <a href="#about">
                  <span></span>
                </a>
              </div>
            </div>
            <div className="circle">
              <div className="content">
                <img src="./images/profile.jpg" alt="Mozhdeh Marvi" />
                <h2>
                  Mozhdeh Marvi <span> Web Developer</span>
                </h2>
                <a href="#contact">Hire Me</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
