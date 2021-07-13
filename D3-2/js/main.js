var svg = d3.select("#chart-area").append("svg").attr("width", 400).attr("height", 400);
var circle = svg.append("circle").attr("cx", 100).attr("cy", 250).attr("r", 70).attr("fill", "blue");
var rect = svg.append("rect").attr("x", 20).attr("y", 20).attr("width", 20).attr("height", 20).attr("fill", "red");
var data = [25, 20, 15, 10, 5];

var rects = svg.selectAll("rectangle").data(data);
rects.enter().append("rect").attr("x", (d, i) => {
		return (i * 50) + 25;
	}).attr("y", (d) => 400 - d).attr("width", (d) => 40).attr("height", (d) => d).attr("fill", "pink");


