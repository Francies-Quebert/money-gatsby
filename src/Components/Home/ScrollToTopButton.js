import {
  // faArrowAltCircleUp,
  // faArrowUp,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const isBrowser = typeof window !== "undefined";
const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    if (isBrowser) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    isBrowser && window.addEventListener("scroll", toggleVisible);
  });

  return (
    <div
      className="fixed bottom-7 right-8 cursor-pointer z-10 bg-secondary-orange-500 h-12 w-12 rounded-full hover:bg-secondary-orange-400 hover:shadow-lg"
      style={{ display: visible ? "inline" : "none" }}
    >
      <FontAwesomeIcon
        icon={faChevronUp}
        size="lg"
        className="text-white ml-3.5 mt-3.5"
        onClick={scrollToTop}
      />
    </div>
  );
};

export default ScrollToTopButton;
