import React from 'react';
import styles from "./portfolio-filter.module.css"

export function PortfolioFilter({filters, selected, onSelectFilter}) {
  return (
    <div className={styles.container}>
      {filters.map(filter => (
        <button
          className={[styles.element, filter === selected ? styles.selected : ""].join(" ")}
          onClick={onSelectFilter.bind(this, filter)}>{filter}</button>
      ))}
    </div>
  );
}