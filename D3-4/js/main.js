var svg = d3.select("#chart-area").append("svg").attr("width", 500).attr("height", 500).
style("background-color", "white")
.style("stroke", "black");

d3.json("data/buildings.json").then((data)=> {
    var buildings = [];
	data.forEach((d)=>{
		d.height = +d.height;
		buildings.push(d.name);
	});
	var x = d3.scaleBand()

          .domain(buildings)

          .range([0,400])

          .paddingInner(0.3)

          .paddingOuter(0.3);
	var y = d3.scaleLinear()

          .domain([0,828])

          .range([0,400]);
	var col = d3.scaleOrdinal()

          .domain(buildings)

           .range(["pink", "red", "green","blue","yellow"]);

	var rects = svg.selectAll("rect").data(data);
    rects
      .enter()
      .append('rect')
      .attr('y', (d)=>500-y(d.height))
      .attr('x', (d)=> x(d.name))
      .attr('height', (d) => y(d.height) )
      .attr("width", x.bandwidth)
      .attr('fill', (d)=>col(d.name));
  })
  .catch((error) => {
    console.log(error);
  });