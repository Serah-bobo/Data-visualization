import { useEffect } from "react"
import * as d3 from "d3"




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
      .attr("x", (d, i) => i * 40) // space bars evenly
      .attr("y", (d) => h - d * 3) // inverted scale
      .attr("width", 30)
      .attr("height", (d) => d * 3) // height scaled properly
      .attr("fill", "navy")
      .append("title") // tooltip
      .text((d) => d);

    // Labels
    svg
      .selectAll("text")
      .data(dataset)
      .enter()
      .append("text")
      .text((d) => d)
      .attr("x", (d, i) => i * 40 ) // centered
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

//scatter plot
//scales domain is the input data range and range is the output visual range
export const ScatterPlot=()=>{
  useEffect(()=>{
    const dataset = [
    [34, 78],
    [109, 280],
    [310, 120],
    [79, 411],
    [420, 220],
    [233, 145],
    [333, 96],
    [222, 333],
    [78, 320],
    [21, 123]
  ];
  const w = 500;
  const h = 500;
  const svg=d3.select('.scatter-plot')
  .append('svg')
  .attr('width', w)
  .attr('height', h);
  
  svg.selectAll('circle')
  .data(dataset)
  .enter()
  .append('circle')
  .attr('cx', (d,i)=>d[0])
  .attr('cy', (d,i)=>h - d[1])
  .attr('r', 5)
  .attr('fill', 'purple')
 
  //labels
  svg.selectAll('text')
  .data(dataset)
  .enter()
  .append('text')
  .attr('x', (d)=>d[0]+5)
  .attr('y', (d)=>h - d[1])
  .text((d)=> d[0] + ', ' + d[1])
  
  
  
  })
  return(
    <div>
      <h2 className="font-bold text-center underline">Scatter Plot</h2>
      <div className="scatter-plot"
      style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      ></div>
    </div>
  )
}