import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

const socials = [
  { id:1, icon: faEnvelope, url: "mailto:glodiperso24@gmail.com" },
  { id:2, icon: faGithub, url: "https://github.com/glodimugisho001?tab=overview&from=2025-04-01&to=2025-04-28" },
  { id:3, icon: faLinkedin, url: "https://www.linkedin.com/in/glodi-code-877b74317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" }, // attention ton ancien lien était une image, pas un vrai profil LinkedIn
  { id:4, icon: faMedium, url: "https://medium.com" },
  { id:5, icon: faStackOverflow, url: "https://stackoverflow.com" },
];

const Header = () => {
  const [showHeader, setShowHeader] = useState(true); // visible par défaut
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      console.log(currentScrollY)

      if (currentScrollY > lastScrollY.current) {
        // L'utilisateur défile vers le bas
        setShowHeader(false);
      } else {
        // L'utilisateur défile vers le haut
        setShowHeader(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 transform duration-300 ease-in-out bg-[#18181b] z-10 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="text-white max-w-[1280px] mx-auto">
        <div className="flex flex-row justify-between items-center px-16 py-4">
          <nav className="flex space-x-4">
            {socials.map((social) => (
              <a href={social.url} key={social.id} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={social.icon} size="2x" />
              </a>
            ))}
          </nav>
          <nav>
            <div className="flex space-x-8">
              <a href="/#projects-section" onClick={handleClick}>Projects</a>
              <a href="/#contactme-section" onClick={handleClick}>Contact Me</a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
