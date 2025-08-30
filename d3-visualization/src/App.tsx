//Data-Driven Documents
//It helps you bind data to DOM elements (SVG, HTML, Canvas) and control them with scales, transitions, and events.
//selection
//the select() method is used to select the first element that matches the specified selector string.
//The selectAll() method is used to select all elements that match the specified selector string.
import { Rectangle } from 'Prac';
import { ScatterPlot } from 'Prac';
const App = () => {
  //.append() method is used to create a new element and add it to the DOM.
  //.text() method is used to set or get the text content of the selected elements.
  //.data() method is used to bind data to the selected elements.
  //.enter() method is used to create new elements for each data point that does not have a corresponding DOM element.
  
  //useEffect(()=>{
    // d3.select('h1').style('color', 'blue');
    //d3.select('p').style('font-size', '20px')
    //d3.selectAll('p').style('color', 'red');
  // d3.select("div")
  //   .append("p")
  //   .text("This is a new paragraph added using D3.js")
  //   .style("font-size", "18px")
  //   .style("color", "green")
  //   .style("margin", "20px");
  //.style() method is used to set or get the style properties of the selected elements.
  //.data() method is used to bind data to the selected elements.
  //.enter() method is used to create new elements for each data point that does not have a corresponding DOM element.
    //const dataset = [10, 20, 30, 40, 50];
    //d3.select('ul')
   // .selectAll('li')
    //.data(dataset)
   // .enter()
   // .append('li')
    //.text(d => `Data point: ${d}`)
    //.style('font-size', '16px')
    //.style('color', d=>d < 20 ? 'red': 'purple')
    //.style('margin', '5px');
//attr() method is used to set or get the attributes of the selected elements.
//  }, []);
//Scalable vector graphics(svg) is an XML-based vector image format for two-dimensional graphics with support for interactivity and animation.
//SVG is a W3C recommendation and is widely supported by modern web browsers.
//In SVG, you can create shapes like circles, rectangles, lines, and paths using various SVG elements.
//it scales to different sizes without losing quality, making it ideal for responsive web design and high-resolution displays.
//a scale is a function that maps a domain of data values to a range of visual values, such as pixel positions, colors, or sizes.
//d3 provides several types of scales, including linear, ordinal, time, and logarithmic scales.
//A linear scale is used for continuous numerical data, mapping input values to output values in a linear fashion.
//An ordinal scale is used for categorical data, mapping discrete input values to discrete output values.
//A time scale is used for date and time data, mapping temporal input values to output values based on time intervals.
//A logarithmic scale is used for data that spans several orders of magnitude, mapping input values to output values on a logarithmic scale.
//A scatter plot is a type of data visualization that displays the relationship between two numerical variables using Cartesian coordinates.
//Each point on the scatter plot represents an observation in the dataset, with its position determined by the values of the two variables.
//Scatter plots are useful for identifying patterns, trends, and correlations between variables, as well as detecting outliers and clusters in the data.\

  
  return (
    <div>
        <ul></ul>
        <Rectangle />
        <ScatterPlot />
        
        
       
    </div>
  )
}

export default App
