// The d3 chart component

import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'

const Chart = (props) => {
  const chartRef = useRef(null)

  useEffect(() => {
    if (props.data && props.width && props.height) {
       const viz = d3.select(chartRef.current)
        .attr('height', props.height)
        .attr('width', props.width)

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
