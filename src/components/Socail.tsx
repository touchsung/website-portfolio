import { useState, useEffect } from "react";
import {
  AiFillGithub,
  AiOutlineArrowUp,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

const Social = () => {
  const [isWhiteText, setIsWhiteText] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const currentPosition = window.pageYOffset;
    setScrollPosition(currentPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const socialWhiteElements = document.querySelectorAll(".social-white");
    let found = false;

    socialWhiteElements.forEach((element) => {
      const { top, bottom } = element.getBoundingClientRect();

      if (top <= window.innerHeight - 280 && bottom >= 550) {
        found = true;
      }
    });

    setIsWhiteText(found);
  }, [scrollPosition]);

  return (
    <div
      className={`fixed bottom-0 left-3.5 z-50 ${
        isWhiteText ? "text-white" : "text-blue-900"
      }`}
    >
      <AiOutlineArrowUp
        onClick={scrollToTop}
        className="text-3xl my-5 hover:text-blue-700 ease-in duration-100"
      />

      <a href="//github.com/Touchsung" target="_blank" rel="noreferrer">
        <AiFillGithub className="text-3xl my-5 hover:text-blue-700 ease-in duration-100" />
      </a>
      <a
        href="https://www.instagram.com/touchsung_/"
        target="_blank"
        rel="noreferrer"
      >
        <AiOutlineInstagram className="text-3xl my-5 hover:text-blue-700 ease-in duration-100" />
      </a>
      <a
        href="https://www.linkedin.com/in/jettapat-thongsima-247102253/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin className="text-3xl my-5 hover:text-blue-700 ease-in duration-100" />
      </a>
      <div
        className={`relative left-[13px] w-1 h-24 ${
          isWhiteText ? "bg-white" : "bg-blue-900"
        }`}
      />
    </div>
  );
};

export default Social;
