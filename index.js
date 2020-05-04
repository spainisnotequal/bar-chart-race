import * as d3 from "https://unpkg.com/d3?module";

/* --------- */
/* INTERFACE */
/* --------- */
const init = async () => {
  const data = await getDataFromCsv("category-brands.csv");
  //render(data);
  render();
};

init();

/* --------------------------- */
/* VARIABLES AND CONFIGURATION */
/* --------------------------- */

// change data each 250 miliseconds
const duration = 250;

// only use the top 12 companies
const n = 12;

// interpolation constant to animate rank changes more quickly, improving readability
const k = 10;

const margin = {
  top: 10,
  right: 5,
  bottom: 5,
  left: 5,
};
const barSize = 48;
const height = margin.top + barSize * n + margin.bottom;
let width = 0; // we will update this value depending on the values of the brands

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
