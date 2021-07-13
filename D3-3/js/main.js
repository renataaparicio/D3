
var svg = d3.select("#chart-area").append("svg").attr("width", 400).attr("height", 400).style("background-color", "black");
d3.json("data/ages.json").then((data)=> {
	data.forEach((d)=>{
		d.age = +d.age;
	});

	var circles = svg.selectAll().data(data);
    circles
      .enter()
      .append('circle')
        .attr('cx', (d,i) => {
       return (i*50+100);
      })
      .attr('cy', 180)
      .attr('r', (d) => d.age )
      .attr('fill', (d) => {if (d.age>10) {return "red"}
      						else {return "white"}
      ;})
  })
  .catch((error) => {
    console.log(error);
  });