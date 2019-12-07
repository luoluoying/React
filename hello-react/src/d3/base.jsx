import React, { useState, useEffect, useRef } from 'react'
import * as d3 from "d3"
import './d3.css'

// http://wiki.jikexueyuan.com/project/d3wiki/makechart.html
function D3Example(props) {
  const d3Ref = useRef(null)
  useEffect(() => {
    // console.log('dd', d3Ref)
    // const p = d3.select("body").selectAll('div').text('666')
    // p.style("color","red")
    // const str = 'china'
    // const strArray = [
    //   'a', 'b', 'c'
    // ]
    // const p = d3.select('body').selectAll('p')
    // p.datum(str)
    // p.text((d, i) => {
    //   return `第${i}个元素绑定的数据是${strArray[i]}`
    // })
    // p.data(strArray).text((d, i) => { return d })
    // 简单图表

    // const svg = d3.select('body').select('#svg-page').append('svg').attr('height', height).attr('width', width).attr('margin', 40)

    // const width = 300
    // const height = 500

    // // 柱状图
    // const dataset = [ 250, 210, 170, 130, 90, 100 ]
    // const rectHeigth = 15
    // // 横向
    // svg.selectAll('rect').data(
    //   dataset
    // ).enter()
    // .append('rect')
    // .attr('x', 10)
    // .attr('y', (d, i) => { 
    //   return i * rectHeigth })
    // .attr('width', (d) => { return d })
    // .attr('height', rectHeigth - 2)
    // .attr('fill', 'steelblue')

    // 纵向
    // svg.selectAll('rect')
    // .data(dataset)
    // .enter()
    // .append('rect')
    // // .attr('y', (d, i) => { return height - d })
    // .attr('y', 10)
    // .attr('x', (d, i) => { return i * rectHeigth })
    // .attr('height', (d) => { return d })
    // .attr('width', rectHeigth - 2)
    // .attr('fill', 'steelblue')

    // 思考： x , y 是svg图形中，图形相对坐标轴原点的位置，height width 是图形具体的高 宽

    // // 比例尺
    // const dataset = [1.2, 2.3, 0.9, 1.5, 3.3]
    // const min = d3.min(dataset)
    // const max = d3.max(dataset)

    // const linear = d3.scaleLinear()
    // .domain([min, max])
    // .range([0, 300])

    // const rectHeigth = 25
    // svg.selectAll('rect').data(
    //   dataset
    // ).enter()
    // .append('rect')
    // .attr('x', 10)
    // .attr('y', (d, i) => { 
    //   return i * rectHeigth })
    // .attr('width', (d) => { return linear(d) })  // 使用比例尺对图形宽度进行限制
    // .attr('height', rectHeigth - 2)
    // .attr('fill', 'steelblue')

    // 坐标轴
    // const datasetLinear = [2.5 , 2.1 , 1.7 , 1.3 , 0.9]
    // const linear = d3.scaleLinear()
    // .domain([0, d3.max(dataset)])
    // .range([0, 250])

    // const top = d3.axisTop(linear)
    // const bottom = d3.axisBottom(linear).ticks(6)
    // const right = d3.axisRight(linear)
    // const left = d3.axisLeft(linear)

    // // svg.append('g').call(top)
    // svg.append('g').attr("class","axis").attr('transform', 'translate(10,90)').call(bottom)
    // // svg.append('g').call(right)
    // // svg.append('g').call(left)

    // 完整柱状图 start
    // const height = 400
    // const width = 400
    // const svg = d3.select('body').select('#svg-page').append('svg').attr('height', height).attr('width', width)

    // const padding = {
    //   left: 30,
    //   right: 30,
    //   top: 20,
    //   bottom: 20,
    // }

    // const dataset = [10, 20, 30, 40, 33, 24, 12, 5]

    // const xScale = d3.scaleBand()
    // .domain(d3.range(dataset.length))
    // .range([0, width - padding.left - padding.right])

    // console.log(xScale.range, 'xScale', xScale.bandwidth())

    // const yScale = d3.scaleLinear()
    // .domain([0, d3.max(dataset)])
    // .range([height - padding.top - padding.bottom, 0])

    // const xAxis = d3.axisBottom(xScale)
    // const yAxis = d3.axisLeft(yScale)

    // const rectPadding = 4 // 矩形间距
    // const rects = svg.selectAll('.MyRect')
    // .data(dataset)
    // .enter()
    // .append('rect')
    // .attr('class', 'MyRect')
    // .attr('transform', `translate(${padding.left}, ${padding.top})`)
    // .attr('x', (d, i) => {
    //   return xScale(i) + rectPadding/2
    // })

    // .attr("y",function (d) {
    //   var min=yScale.domain()[0];
    //   return yScale(min);
    // })
    // .attr("height",function(d,i){
    //     return 0;
    // })
    // .transition()
    // .duration(2000)
    // .delay(function(d,i){
    //     return i*400;
    // })
    // .ease(d3.easeBounce)
  
    // .attr('y', (d) => {
    //   return yScale(d)
    // })
    // .attr('width', xScale.bandwidth() - rectPadding)
    // .attr('height', (d) => {
    //   return height - padding.top - padding.bottom - yScale(d)
    // })
    // .attr('fill', 'steelblue')

    // const text = svg.selectAll('.MyText')
    // .data(dataset)
    // .enter()
    // .append('text')
    // .attr("class","MyText")
    // .attr("transform","translate(" + padding.left + "," + padding.top + ")")
    // .attr("x", function(d,i){
    //     return xScale(i) + rectPadding/2;
    // } )
    // .attr("y",function(d){
    //   var min = yScale.domain()[0];
    //   return yScale(min);
    //     // return yScale(d);
    // })
    // .transition()
    // .delay(function(d,i){
    //     return i * 200;
    // })
    // .duration(2000)
    // .ease(d3.easeBounce)
  
    // .attr("y",function(d){
    //   return yScale(d);
    // })
    // .attr("dx",function(){
    //   return (xScale.bandwidth() - rectPadding)/3;
    // })
    // .attr("dy",function(d){
    //     return 20;
    // })
    // .text(function(d){
    //     return d;
    // })
    // .style(
    //   "fill", "#FFF"
    // )	
    // // .style({
    // //   "fill":"#FFF",
    // //   "text-anchor":"middle"
    // // })
    // //添加x轴
    // svg.append("g")
    // .attr("class","axis")
    // .attr("transform","translate(" + padding.left + "," + (height - padding.bottom) + ")")
    // .call(xAxis); 

    // //添加y轴
    // svg.append("g")
    // .attr("class","axis")
    // .attr("transform","translate(" + padding.left + "," + padding.top + ")")
    // .call(yAxis);

    // 完整柱状图 end

    // 动态效果 start
    // const height = 400
    // const width = 400
    // const svg = d3.select('body').select('#svg-page').append('svg').attr('height', height).attr('width', width)

    // const circle1 = svg.append('circle')
    // .attr('cx', 100)
    // .attr('cy', 100)
    // .attr('r', 45)
    // .style('fill', 'green')

    // circle1.transition()
    // .duration(1000)
    // .attr('cx', 300)

    // const circle2 = svg.append('circle')
    // .attr('cx', 100)
    // .attr('cy', 100)
    // .attr('r', 45)
    // .style('fill', 'green')

    // circle2.transition()
    // .duration(1500)
    // .attr('cx', 300)
    // .style('fill', 'red')

    // const circle3 = svg.append('circle')
    // .attr('cx', 100)
    // .attr('cy', 100)
    // .attr('r', 45)
    // .style('fill', 'green')

    // circle3.transition().duration(2000)
    // .ease(d3.easeBounce)
    // .attr('cx', 380)
    // .style('fill', 'blue')
    // .attr('r', 20)

    // 动态效果end

    // 图形 饼状图 start
    // const height = 400
    // const width = 400
    // const svg = d3.select('body').select('#svg-page').append('svg').attr('height', height).attr('width', width)
    
    // const pie = d3.pie()
    // const dataset = [ 30 , 10 , 43 , 55 , 13 ]
    // const piedata = pie(dataset)

    // const outerRadius = 150 // 外半径
    // const innerRadius = 120 // 内半径， 为0 则没有空白
    // const arc = d3.arc()
    // .innerRadius(innerRadius)
    // .outerRadius(outerRadius)

    // const arcs = svg.selectAll('g')
    // .data(piedata)
    // .enter()
    // .append('g')
    // .attr('transform', `translate(${width/2}, ${width/2})`)

    // const color = d3.scaleOrdinal(d3.schemeCategory10)
    // arcs.append('path')
    // .attr('fill', (d, i) => {
    //   return color(i)
    // })
    // .attr('d', (d) => {
    //   return arc(d)
    // })

    // arcs.append('text')
    // .attr('transform', (d) => {
    //   return `translate(${arc.centroid(d)})`
    // })
    // .attr('text-anchor', 'middle')
    // .text((d) => {
    //   return d.data
    // })

    // 力导向图 start
    // const height = 1800
    // const width = 1600
    // const zoom_actions = () => {
    //   g.attr('transform', d3.event.transform)
    // }

    // const ticked = () => {
    //   console.log('ooooss')
    //   svg_links.attr('x1', (d) => { return d.source.x })
    //   .attr('y1', (d) => { return d.source.y })
    //   .attr('x2', (d) => { return d.target.x })
    //   .attr('y2', (d) => { return d.target.y })

    //   svg_nodes.attr('cx', (d) => { return d.x })
    //   .attr('cy', (d) => { return d.y })
    //   .attr("cx",function(d){return d.x;})

    //   svg_texts.attr('x', (d) => { return d.x })
    //   .attr('y', (d) => { return d.y })
    // }

    // const svg = d3.select('body')
    // .select('#svg-page')
    // .append('svg')
    // .attr('height', height)
    // .attr('width', width)
    // // .call(
    // //   d3.zoom() // 创建缩放行为
    // //   .scaleExtent([-5, 2])
    // //   .on('zoom', zoom_actions) // 设置缩放范围
    // // )


    // const nodes = [ { name: "桂林" }, { name: "广州" },
    // { name: "厦门" }, { name: "杭州" },
    // { name: "上海" }, { name: "青岛" },
    // { name: "天津" } ]

    // const links = [ { source : 0 , target: 1 } , { source : 0 , target: 2 } ,
    //   { source : 0 , target: 3 } , { source : 1 , target: 4 } ,
    //   { source : 1 , target: 5 } , { source : 1 , target: 6 } ]

    // // 初始化力学仿真器，通过布局函数格式化数据
    // const simulation = d3.forceSimulation(nodes)
    // .force('link', d3.forceLink(links).distance(100)) // distance 设置连线距离
    // .force('charge', d3.forceManyBody().strength(-100))
    // .force('center', d3.forceCenter(width / 2, height / 2)) // 设置力学仿真器的中心
    // .on('tick', ticked)

    // // 监听
    // const dragstarted = (d) => {
    //   if (!d3.event.active) simulation.alphaTarget(0.3).restart()
    //   d.fx = d.x
    //   d.fy = d.y
    // }

    // const dragged = (d) => {
    //   d.fx = d3.event.x
    //   d.fy = d3.event.y
    // }

    // const dragended = (d) => {
    //   if (!d3.event.active) simulation.alphaTarget(0)
    //   d.fx = null
    //   d.fy = null
    // }

    // const color = d3.scaleOrdinal(d3.schemeCategory10)

    // const g = svg.append('g')
    // .attr('calss', 'everything')

    // const svg_links = g.append('g')
    // .selectAll('line')
    // .data(links)
    // .enter()
    // .append('line')
    // .style('stroke', '#ccc')
    // .style('stroke-width', 3)

    // const svg_nodes = g.append('g')
    // .selectAll('circle')
    // .data(nodes)
    // .enter()
    // .append('circle')
    // .attr('r', '20')
    // .attr("cx", function(d) { return d.x; })
    //  .attr("cy", function(d) { return d.y; })
    // .style('fill', (d, i) => {
    //   return color(i)
    // })
    // .call(
    //   // simulation.drag()
    //   d3.drag() // 创建一个拖拽行为
    //   .on('start', dragstarted)
    //   .on('drag', dragged)
    //   .on('end', dragended)
    // )

    // const svg_texts = g.append('g')
    // .selectAll('text')
    // .data(nodes)
    // .enter()
    // .append('text')
    // .style('fill', 'black')
    // .attr('dx', 20)
    // .attr('dy', 8)
    // .text((d) => {
    //   return d.name
    // })

    // 力导向图 end

    // eg
    const width = window.innerWidth
    const height = window.innerHeight

    const nodes = d3.range(200).map(() => { return { radius: Math.random() * 12 + 4 } })
    const root = nodes[0]
    const color = d3.scaleOrdinal(d3.schemeCategory10)

    root.radius = 0
    root.fixed = true

    const ticked = (e) => {
      svg.selectAll("circle")
          .attr("cx", function(d) { return d.x; })
          .attr("cy", function(d) { return d.y; });
    };

    const force = d3.forceSimulation(nodes)
    .velocityDecay(0.2)
    .force('x', d3.forceX(width / 2).strength(0.015))
    .force('y', d3.forceY(height / 2).strength(0.015))
    // .force('charge', d3.forceManyBody().strength((d, i) => { return i ? 0 : -100 }))
    .force("collide", d3.forceCollide().radius(function(d){
      if(d === root){
        return Math.random() * 50 + 100;
      }
      return d.radius + 0.5;
    }).iterations(5))
    .on("tick", ticked)
    // .nodes(nodes)
    // .force('center', d3.forceCenter(width / 2, height / 2))

    // force.restart()

    const svg = d3.select('body').select('#svg-page').append('svg')
    .attr('height', height)
    .attr('width', width)

    svg.selectAll('circle')
    .data(nodes.slice(1))
    .enter()
    .append('circle')
    .attr('r', (d) => { return d.radius })
    .style('fill', (d, i) => { return color(i % 3) })

    svg.on("mousemove", function() {
      var p1 = d3.mouse(this);
      root.fx = p1[0];
      root.fy = p1[1];
      force.alphaTarget(0.3).restart()
    });

    // end 

    // 碰撞检测
    // var width = window.innerWidth
    // var height = window.innerHeight

    // var nodes = d3.range(200).map(function() { return {r: Math.random() * 12 + 4}; }),
    //     root = nodes[0];
    // // var color = d3.scaleOrdinal().range(d3.schemeCategory20)
    // const color = d3.scaleOrdinal(d3.schemeCategory10)

    // root.radius = 0;
    // root.fixed = true;

    // const forceX = d3.forceX(width / 2).strength(0.015)
    // const forceY = d3.forceY(height / 2).strength(0.015)

    
    // var force = d3.forceSimulation()
    // .velocityDecay(0.2)
    // .force("x", forceX)
    // .force("y", forceY)
    // .force("collide", d3.forceCollide().radius(function(d){
    //   if(d === root){
    //     return Math.random() * 50 + 100;
    //   }
    //   return d.r + 0.5;
    // }).iterations(5))
    // .nodes(nodes).on("tick", ticked);

    // var svg = d3.select("body").append("svg")
    // .attr("width", width)
    // .attr("height", height);

    // svg.selectAll("circle")
    //     .data(nodes.slice(1))
    //     .enter().append("circle")
    //     .attr("r", function(d) { return d.r; })
    //     .style("fill", function(d, i) { return color(i % 3); });

    // function ticked(e) {
    //     svg.selectAll("circle")
    //         .attr("cx", function(d) { return d.x; })
    //         .attr("cy", function(d) { return d.y; });
    // };

    // svg.on("mousemove", function() {
    //     var p1 = d3.mouse(this);
    //     root.fx = p1[0];
    //     root.fy = p1[1];
    //     force.alphaTarget(0.3).restart();//reheat the simulation
    // });
    // 碰撞检测end
  }, [])
  return (
    <div className="page" id="svg-page">
    </div>
  )
}

export default D3Example
