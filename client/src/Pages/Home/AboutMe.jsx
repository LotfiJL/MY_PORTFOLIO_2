import React from "react";

export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/Lotfi.png" alt="About Me" />
      </div>
      <div className="about--section--content--box about--section--box">
        <div className="about--section--content">
          <h1 className="skills-section--heading">About Me</h1>
          <h2 className="contactM">About </h2>
          <br />
          <p className="hero--section-description">
            I am a versatile professional with a unique blend of skills in
            industrial engineering and software development. I bring a dynamic
            approach to projects that bridges the gap between traditional
            engineering practices and cutting-edge technology.
          </p>
          <p className="hero--section-description">
            Let's create something amazing together!
          </p>
        </div>
      </div>
    </section>
  );
}
