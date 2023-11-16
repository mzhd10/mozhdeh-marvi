import React, { useEffect, useState } from "react";
import NavbarLinks from "./NavbarLinks/NavbarLinks";
import "./Navbar.css";
const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "project", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];
export default function Navbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showLinks, setShowLinks] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const options = { root: null, rootMargin: "0px", threshold: 0.4 };
    const handleIntesect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntesect, options);

    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);
  const handleSectionClick = (event) => {
    event.preventDefault();
    const sectionId = event.target.getAttribute("href").substring(1);
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = document.querySelector("nav").offsetHeight;
      const sectionTop = section.offsetTop - navbarHeight;
      window.scrollTo({ top: sectionTop, behavior: "smooth" });
    }
  };
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  return (
    <header className="header">
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="container">
          <div className="navbar-wrapper">
            <div>
              <a href="index.html" className="logo">
                <div className="back m"></div>
                <span className="mzhd ">M</span>
                <div className="logo-inner">
                  <span className="top">Mozhdeh Marvi</span>
                  <br />
                  <span className="bottom">
                    <span className="front">Front-end</span> developer
                  </span>
                </div>
              </a>
            </div>
            <div className={`navbar-links ${showLinks ? "show" : ""}`}>
              <ul>
                {navLinks.map((link) => (
                  <NavbarLinks
                    key={link.id}
                    href={`#${link.id}`}
                    label={link.label}
                    onClick={handleSectionClick}
                    active={activeSection === link.id}
                  />
                ))}
              </ul>
            </div>
            {windowWidth <= 890 && (
              <div
                className={`toggle-button ${showLinks ? "open" : ""}`}
                onClick={toggleLinks}
              >
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
