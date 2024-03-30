import React, { useEffect } from "react";

export default function HeroSection() {
  useEffect(() => {
    const descriptionElement = document.querySelector(
      ".hero--section-description"
    );

    const phrases = [
      "Welcome to my digital domain! 🚀",
      "Explore the magic of my portfolio!",
      "Discover innovative projects!",
      "Jellali Lotfi : Full Stack Developer 💻",
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let typingEffect;

    function typeText() {
      descriptionElement.textContent = phrases[phraseIndex].slice(0, charIndex);
      charIndex++;
      if (charIndex > phrases[phraseIndex].length) {
        charIndex = 0;
        phraseIndex++;
        if (phraseIndex >= phrases.length) {
          phraseIndex = 0;
        }
      }
      typingEffect = setTimeout(typeText, 120);
    }

    typeText();

    return () => {
      clearTimeout(typingEffect);
    };
  }, []);

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey there!</p>
          <h4 className="hero--section--title">
            <span className="hero--section-title--color">
              Industrial Engineer
            </span>
            <br />
            <span style={{ color: "red", fontSize: "3rem" }}>
              Full Stack Developer
            </span>
          </h4>
          <p className="hero--section-description">
            Welcome to my digital domain! 🚀
          </p>
          <button className="btn btn-primary">Get In Touch</button>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/Lotfi.png" alt="Lotfi" />
      </div>
    </section>
  );
}
