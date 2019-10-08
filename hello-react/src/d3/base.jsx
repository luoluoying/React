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
    const height = 400
    const width = 400
    const svg = d3.select('body').select('#svg-page').append('svg').attr('height', height).attr('width', width)

    const padding = {
      left: 30,
      right: 30,
      top: 20,
      bottom: 20,
    }

    const dataset = [10, 20, 30, 40, 33, 24, 12, 5]

    const xScale = d3.scaleBand()
    .domain(d3.range(dataset.length))
    .range([0, width - padding.left - padding.right])

    console.log(xScale.range, 'xScale', xScale.bandwidth())

    const yScale = d3.scaleLinear()
    .domain([0, d3.max(dataset)])
    .range([height - padding.top - padding.bottom, 0])

    const xAxis = d3.axisBottom(xScale)
    const yAxis = d3.axisLeft(yScale)

    const rectPadding = 4 // 矩形间距
    const rects = svg.selectAll('.MyRect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('class', 'MyRect')
    .attr('transform', `translate(${padding.left}, ${padding.top})`)
    .attr('x', (d, i) => {
      return xScale(i) + rectPadding/2
    })

    .attr("y",function (d) {
      var min=yScale.domain()[0];
      return yScale(min);
    })
    .attr("height",function(d,i){
        return 0;
    })
    .transition()
    .duration(2000)
    .delay(function(d,i){
        return i*400;
    })
    .ease(d3.easeBounce)
  
    .attr('y', (d) => {
      return yScale(d)
    })
    .attr('width', xScale.bandwidth() - rectPadding)
    .attr('height', (d) => {
      return height - padding.top - padding.bottom - yScale(d)
    })
    .attr('fill', 'steelblue')

    const text = svg.selectAll('.MyText')
    .data(dataset)
    .enter()
    .append('text')
    .attr("class","MyText")
    .attr("transform","translate(" + padding.left + "," + padding.top + ")")
    .attr("x", function(d,i){
        return xScale(i) + rectPadding/2;
    } )
    .attr("y",function(d){
      var min = yScale.domain()[0];
      return yScale(min);
        // return yScale(d);
    })
    .transition()
    .delay(function(d,i){
        return i * 200;
    })
    .duration(2000)
    .ease(d3.easeBounce)
  
    .attr("y",function(d){
      return yScale(d);
    })
    .attr("dx",function(){
      return (xScale.bandwidth() - rectPadding)/3;
    })
    .attr("dy",function(d){
        return 20;
    })
    .text(function(d){
        return d;
    })
    .style(
      "fill", "#FFF"
    )	
    // .style({
    //   "fill":"#FFF",
    //   "text-anchor":"middle"
    // })
    //添加x轴
    svg.append("g")
    .attr("class","axis")
    .attr("transform","translate(" + padding.left + "," + (height - padding.bottom) + ")")
    .call(xAxis); 

    //添加y轴
    svg.append("g")
    .attr("class","axis")
    .attr("transform","translate(" + padding.left + "," + padding.top + ")")
    .call(yAxis);

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

  }, [])
  return (
    <div className="page" id="svg-page">
    </div>
  )
}

export default D3Example
