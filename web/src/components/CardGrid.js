import React from "react";

import Card from "./Card";
import styles from "./Card.module.css";

const CardGrid = ({ items, isProject, showProject }) => (
  <div className={styles.cardGrid}>
    {items.map((item) => (
      <div
        className={`${isProject ? "lg:w-1/2" : "lg:w-1/3"} md:w-1/2 w-full ${
          styles.cardGridCard
        }`}
        key={item.slug.current}
      >
        <Card isProject={isProject} showProject={showProject} item={item} />
      </div>
    ))}
  </div>
);

export default CardGrid;
