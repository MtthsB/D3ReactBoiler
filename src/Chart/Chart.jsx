// The d3 chart component

import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'

const Chart = (props: Props) => {
  const chartRef = useRef(null)

  useEffect(() => {
    // Setup: constants, axes, initial load. If they can change, save them to useState to be used in another useEffect dealing with those changes
    if (props.data && props.width && props.height) {
       const viz = d3.select(chartRef.current)
        .attr('height', props.height)
        .attr('width', props.width)
        // .attr('transform', `translate(${}, ${})`) // set margins.

    }
  }, [props.data, props.width, props.height])

  return (
    <g
      className='chart__canvas'
      ref={chartRef}
    />
  )
}

export default Chart
