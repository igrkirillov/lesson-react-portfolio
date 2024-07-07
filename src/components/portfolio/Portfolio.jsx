import React from 'react';
import {PortfolioFilter} from "../portfolio-filter/index.js";
import {PortfolioList} from "../portfolio-list/index.js";
import {getProjects} from "../../dataApi.js";

export function Portfolio(props) {
  return (
    <>
      <PortfolioFilter
        filters={["All","Web sites", "Flyers", "Business cards"]}
        selected={"All"}
        onSelectFilter={(event) => console.log(event)}>
      </PortfolioFilter>
      <PortfolioList projects={getProjects()}></PortfolioList>
    </>
  );
}