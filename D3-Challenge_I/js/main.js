var svg = d3.select("#chart-area").append("svg").attr("width", 400).attr("height", 400).style("background-color", "black")
.style("stroke", "black");

d3.json("data/buildings.json").then((data)=> {
	data.forEach((d)=>{
		d.height = +d.height;
		console.log(d.height)
	});
	var rects = svg.selectAll("rect").data(data);
    rects
      .enter()
      .append('rect')
      .attr('y', (d)=>200-(d.height/10)) //hice un ajuste porque sino quedaban muy grandes y no cabian:)
      .attr('x', (d,i) => {
       return (i*40);
      })
      .attr('height', (d) => d.height )
      .attr("width", "30")
      .attr('fill', "green");
  })
  .catch((error) => {
    console.log(error);
  });