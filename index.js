import * as d3 from "https://unpkg.com/d3?module";

/* --------- */
/* INTERFACE */
/* --------- */
const init = async () => {
  const data = await getDataFromCsv("category-brands.csv");
  console.log(data.slice(0, 5));
  //render(data);
  render();
};

init();

/* --------------------------- */
/* VARIABLES AND CONFIGURATION */
/* --------------------------- */

const margin = {
  top: 80,
  right: 5,
  bottom: 5,
  left: 5,
};
const height = 300;
const width = 300;

/* ----------- */
/* IMPORT DATA */
/* ----------- */

function getDataFromCsv(url) {
  return new Promise((resolve, reject) => {
    d3.csv(url, d3.autoType)
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
}

/* ---------------- */
/* HELPER FUNCTIONS */
/* ---------------- */

/* --------------- */
/* RENDER FUNCTION */
/* --------------- */

function render() {
  // add a svg element
  const svg = d3
    .select("#svg-container")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  // add a red line
  svg
    .append("line")
    .style("stroke", "red")
    .attr("x1", 50)
    .attr("y1", 50)
    .attr("x2", 150)
    .attr("y2", 150);

  // add a title
  svg.append("text").attr("class", "title").attr("y", 24).html("Plot title");
}
