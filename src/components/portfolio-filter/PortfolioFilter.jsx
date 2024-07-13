import React from 'react';
import styles from "./portfolio-filter.module.css"

export function PortfolioFilter({filters, selected, onSelectFilter}) {
  let index = 0;
  return (
    <div className={styles.container}>
      {filters.map(filter => (
        <button
          key={index++}
          className={[styles.element, filter === selected ? styles.selected : ""].join(" ")}
          onClick={onSelectFilter.bind(this, filter)}>{filter}</button>
      ))}
    </div>
  );
}