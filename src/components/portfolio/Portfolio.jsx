import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";


const data = [
  {
    id: 1,
    image: IMG1,
    title: "Project 1",
    github: "https://github.com/artaperdibuka/projekti",
  },
  {
    id: 2,
    image: IMG2,
    title: "Project 2",
    github: "https://github.com/artaperdibuka/E-Commerce-App",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn btn-primary" target="_blank" rel="noreferrer">
                  Github
                </a>
              </div>
            </article>
          );
        })}
      </div>
      <div className="">
        <p>Exciting new projects are coming soon. Stay tuned!</p>
        <form>
          <input type="email" placeholder="Your Email" required />
          <button type="submit" className="btn btn-primary">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Portfolio;
