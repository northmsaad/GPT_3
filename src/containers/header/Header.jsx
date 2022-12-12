import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's Build Something amazing with GPT-3 OpenAi
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, at.
          Laudantium porro delectus perferendis hic quos molestiae ipsum unde
          eius. Fugit, aut nobis placeat numquam quaerat, perspiciatis ipsa,
          repudiandae
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your E-mail Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="People" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="AI Image" />
      </div>
    </div>
  );
};

export default Header;
