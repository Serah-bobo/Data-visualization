import { useEffect } from "react"
import * as d3 from "d3"
export const BarGraph = () => {
useEffect(() => {
     const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
     d3.select(".bar-chart")
     .selectAll('div')
     .data(dataset)
      .enter()
      .append('div')
      .style('height', d=>d*10 + 'px')
     .style('margin','2px')
     .style('width', '20px')
      .style('background-color', 'teal')
      .style('display', 'inline-block')

}, []);

return (
    <div>
      <h2 className="font-bold text-center ">Bar Graph</h2>
      <div className="bar-chart"
      style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end", // aligns all bars from the bottom
          height: "320px", // optional, to make the tallest bar visible clearly
        }}
      ></div>
    </div>
  )
}

export default BarGraph

//rectangle
export const Rectangle = () => {
  useEffect(() => {
    const W = 500;
    const h = 120;
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    // Clear old svg if re-render
    d3.select(".rectangle").select("svg").remove();

    const svg = d3
      .select(".rectangle")
      .append("svg")
      .attr("width", W)
      .attr("height", h);

    // Bars
    svg
      .selectAll("rect")
      .data(dataset)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d, i) => i * 40) // spacing between bars
      .attr("y", (d) => h - d * 3) // inverted scale
      .attr("width", 30)
      .attr("height", (d) => d * 3) // height scaled properly
      .attr("fill", "teal")
      .append("title") // tooltip
      .text((d) => d);

    // Labels
    svg
      .selectAll("text")
      .data(dataset)
      .enter()
      .append("text")
      .text((d) => d)
      .attr("x", (d, i) => i * 40 ) // center text on bar
      .attr("y", (d) => h - d * 3 - 3) // above bar
      .attr("text-anchor", "middle")
      .attr("font-size", "12px")
      .attr("fill", "black");
  }, []);

  return (
    <div>
      <h2 className="font-bold text-center underline">Rectangle</h2>

      <div
        className="rectangle"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      ></div>
    </div>
  );
};