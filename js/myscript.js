var margin = {top: 0, right: 0, bottom: 0, left: 0},
    width = 1200,
    height = 540;
var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g");

var sfondo = svg.append("rect")
				.attr("width","1200")
				.attr("height","100%")
				.attr("fill","yellow");

var tetto = svg.append("rect")
				.attr("x","0")
				.attr("y","0")
				.attr("width","1200")
				.attr("height","10");




d3.json("data/dataset.json", function(error, data) {
  update(data);
});


function update(source){
	 svg.selectAll("ellipse")
	  			.data(source)
	  			.enter()
	  			.append("ellipse")
	  			.attr("cx",function(d){return d.cx;})
  	  			.attr("cy",function(d){return d.cy;})
	  			.attr("rx",function(d){return d.rx;})
	  			.attr("ry",function(d){return d.ry;})
				.attr("fill",function(d){return d.fill;});	
	var ballons = svg.selectAll("ellipse").transition()
						 	.attr("cy","70")
    					 	.attr("rx","30")
							.attr("ry","60")
						    .duration("6000") 
  							.delay(function(d){return d.delay;});
	var ballonsExplode = svg.selectAll("ellipse").transition()
						 	.attr("cy","10")
    					 	.attr("rx","20")
							.attr("ry","4")
						    .duration("3000") 
  							.delay(function(d){return d.delay1;});  
	var ballonsDown = svg.selectAll("ellipse").transition()
						 	.attr("cy","500")
    					 	.attr("rx","20")
							.attr("ry","4")
						    .duration("6000") 
  							.delay(function(d){return d.delay2;});

}
