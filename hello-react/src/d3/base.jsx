import React, { useState, useEffect, useRef } from 'react'
import * as d3 from "d3"

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
    const width = 300
    const height = 300

    const svg = d3.select('body').append('svg').attr('height', height).attr('width', width)
    const dataset = [ 250, 210, 170, 130, 90, 100 ]
    const rectHeigth = 25
    svg.selectAll('rect').data(
      dataset
    ).enter()
    .append('rect')
    // .attr('x', 10)
    // .attr('y', (d, i) => { 
    //   console.log(d, 'i', i, 'i')
    //   return i * rectHeigth })
    // .attr('width', (d) => { return d })
    // .attr('height', rectHeigth - 3)
    // .attr('fill', 'steelblue')

  }, [])
  return (
    <div>
      44444
      <div className="d3-test" ref={d3Ref} >666</div>
      {/* <p>Apple</p>
      <p>Pear</p>
      <p>Banana</p> */}
      {/* <svg>
        <rect></rect>
        <rect></rect>
      </svg> */}
    </div>
  )
}

export default D3Example
