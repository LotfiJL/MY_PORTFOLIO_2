import React from "react";
import data from "../../data/index.json";

const MySkills = () => {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <h2 className="skills--section--heading">My Expertise</h2>
        <p className="section--title">My Skills</p>
      </div>
      <div
        className="skills--section--container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img src={item.src} alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="skills--section--images">
                {item.image.map((item2, index) => (
                  <img
                    key={index}
                    className="skills--section--image"
                    src={Object.values(item2)[0]}
                    alt="Lotfi"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MySkills;
