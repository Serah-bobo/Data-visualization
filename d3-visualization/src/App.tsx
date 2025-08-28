//Data-Driven Documents
//It helps you bind data to DOM elements (SVG, HTML, Canvas) and control them with scales, transitions, and events.
//selection
//the select() method is used to select the first element that matches the specified selector string.
//The selectAll() method is used to select all elements that match the specified selector string.
import * as d3 from 'd3';
import { useEffect } from 'react';
const App = () => {
  //.append() method is used to create a new element and add it to the DOM.
  //.text() method is used to set or get the text content of the selected elements.
  //.data() method is used to bind data to the selected elements.
  //.enter() method is used to create new elements for each data point that does not have a corresponding DOM element.
  
  useEffect(()=>{
     d3.select('h1').style('color', 'blue');
    d3.select('p').style('font-size', '20px')
    d3.selectAll('p').style('color', 'red');
  // d3.select("div")
  //   .append("p")
  //   .text("This is a new paragraph added using D3.js")
  //   .style("font-size", "18px")
  //   .style("color", "green")
  //   .style("margin", "20px");
  //.style() method is used to set or get the style properties of the selected elements.
  //.data() method is used to bind data to the selected elements.
  //.enter() method is used to create new elements for each data point that does not have a corresponding DOM element.
    const dataset = [10, 20, 30, 40, 50];
    d3.select('ul')
    .selectAll('li')
    .data(dataset)
    .enter()
    .append('li')
    .text(d => `Data point: ${d}`)
    .style('font-size', '16px')
    .style('color', d=>d < 20 ? 'red': 'purple')
    .style('margin', '5px');
//attr() method is used to set or get the attributes of the selected elements.



  }, []);
  
  return (
    <div>
        <h1>D3 Practise</h1>
        <ul></ul>
        
       
    </div>
  )
}

export default App
