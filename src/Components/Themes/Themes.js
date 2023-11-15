import { themes } from "../Data";
import ThemeItem from "./ThemeItem";
import "./Themes.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faGear,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const getStorageColor = () => {
  let color = "#ea4343";
  if (localStorage.getItem("color")) {
    color = localStorage.getItem("color");
  }
  return color;
};

const getStorageTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

const Themes = () => {
  const [showSwitcher, setShowSwitcher] = useState(false);
  const [color, setColor] = useState(getStorageColor());
  const [theme, setTheme] = useState(getStorageTheme());

  const changeColor = (color) => {
    setColor(color);
  };

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    document.documentElement.style.setProperty("--danger-color", color);
    localStorage.setItem("color", color);
  }, [color]);

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div>
      <div className={`${showSwitcher ? "show-switcher" : ""} switcher`}>
        <div
          className="switcher-toggler"
          onClick={() => setShowSwitcher(!showSwitcher)}
        >
          <FontAwesomeIcon icon={faGear} className="icon" />
        </div>
        <div className="theme-toggler" onClick={toggleTheme}>
          {theme === "light-theme" ? (
            <FontAwesomeIcon icon={faMoon} className="icon" />
          ) : (
            <FontAwesomeIcon icon={faSun} className="icon" />
          )}
        </div>
        <h3 className="switcher-title">Style Switcher</h3>
        <div className="switcher-items">
          {themes.map((theme, index) => {
            return (
              <ThemeItem key={index} {...theme} changeColor={changeColor} />
            );
          })}
        </div>
        <div
          className="switcher-close"
          onClick={() => setShowSwitcher(!showSwitcher)}
        >
          <FontAwesomeIcon icon={faXmark} />
        </div>
      </div>
    </div>
  );
};

export default Themes;
