import React from 'react';
import styles from "../portfolio-list/portfolio-list.module.css";

export function PortfolioList({projects}) {
  return (
  <div className={styles.container}>
      {projects.map(project => (
        <img
          key={project.img}
          className={styles.element}
          src={project.img}
          alt={project.category}/>
      ))}
    </div>
  );
}