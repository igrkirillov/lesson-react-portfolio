import React from 'react';
import styles from "../portfolio-list/portfolio-list.module.css";

export function PortfolioList({projects}) {
  let index = 0;
  return (
  <div className={styles.container}>
      {projects.map(project => (
        <img
          key={index++}
          className={styles.element}
          src={project.img}
          alt={project.category}/>
      ))}
    </div>
  );
}