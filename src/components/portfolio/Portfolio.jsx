import React, {useState} from 'react';
import {PortfolioFilter} from "../portfolio-filter/index.js";
import {PortfolioList} from "../portfolio-list/index.js";
import {getProjects} from "../../dataApi.js";

export function Portfolio(props) {
  const prepareData = function (filter) {
    const filteredProjects = getProjects()
      .filter(p => !filter || filter === "All" || p.category === filter);
    const selectedFilter = filter || "All";
    return {selectedFilter, filteredProjects};
  }

  const [state, setState] = useState(prepareData(null));

  return (
    <>
      <PortfolioFilter
        filters={["All", "Websites", "Flayers", "Business Cards"]}
        selected={state.selectedFilter}
        onSelectFilter={(filter) => setState(prepareData(filter))}>
      </PortfolioFilter>
      <PortfolioList projects={state.filteredProjects}></PortfolioList>
    </>
  );
}