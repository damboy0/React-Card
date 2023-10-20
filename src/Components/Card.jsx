import React from "react";
import "./Card.css";
import office from "./Untitled.webp";

const Card = () => {
  const title = "React Card";
  const description =
    "This is a hardcoded sample card component created using React and JSX.";
  const imageUrl = office;
  return (
    <div className="card">
      <img src={imageUrl} />
      <h1>{title} </h1>
      <p>{description}</p>
      <p>Description Lenght:{description.length} </p>
    </div>
  );
};

export default Card;
