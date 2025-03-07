import React from "react";
import styles from "./HomePage.module.css";
import Hero from "../../Components/Hero/Hero";
interface Props {}

const HomePage = ({}: Props) => {
  return (
    <div>
      <Hero />
    </div>
  );
};

export default HomePage;
