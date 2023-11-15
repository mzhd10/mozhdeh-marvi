import "./BackTop.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
const BackTop = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 500) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      className={`${"backTop-button"} ${showButton ? "show" : ""}`}
      onClick={scrollToTop}
    >
      <FontAwesomeIcon className="icon" icon={faArrowUp} size="xl" />
    </button>
  );
};

export default BackTop;
