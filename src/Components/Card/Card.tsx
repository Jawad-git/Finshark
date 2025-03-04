import React from "react";
import styles from "./Card.module.css";
interface Props {
  companyName: string;
  ticker: string;
  price: number;
};

const Card = ({companyName, ticker, price}: Props) => {
  return (
    <div>
      <img src="https://images.unsplash.com/photo-1612428978260" alt="Image" />
      <div className="details">
        <h2>{companyName} ({ticker})</h2>
        <p>${price}</p>
      </div>
      <p className="infon">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos fuga
        aliquam error delectus incidunt aliquid ipsa officia dolorem. Esse
        debitis ipsum eligendi iure ea necessitatibus quae vitae recusandae
        adipisci nisi.
      </p>
    </div>
  );
};

export default Card;
