//selection
//the select() method is used to select the first element that matches the specified selector string.
//The selectAll() method is used to select all elements that match the specified selector string.
import * as d3 from 'd3';
const Prac = () => {
  return (
    <div>
        <h1>D3 Practise</h1>
        <p>Open the console to see the output</p>
        <button onClick={()=>{
          d3.select("body")
          .style("background-color", "lightblue")
          .style("color", "white")
          .style("text-align", "center")
          .style("font-family", "Arial, sans-serif");

          d3.selectAll("p")
          .style("font-size", "20px")
          .style("margin", "20px");

          d3.select("h1")
          .style("font-size", "40px")
          .style("margin", "20px");

          console.log(d3.select("body").node());
        }}>Click Me</button>
    </div>
  )
}

export default Prac
