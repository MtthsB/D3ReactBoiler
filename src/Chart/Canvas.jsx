import React, { useLayoutEffect, useRef, useState } from 'react'

import ChartComponent from './Chart'

import { useWindowDimensions } from '../store'

const Canvas = (props: Props) => {
  const window = useWindowDimensions()
  const chartRef= useRef()
  const [dimensions, setDimensions] = useState({ width: 0, height: props.height })

  // Additionally, margins can be set here

  useLayoutEffect(() => {
    // Further window resizing is handled here
    if (chartRef?.current) {
      setDimensions({
        width: chartRef.current.offsetWidth,
        height: chartRef.current.offsetHeight
      })
    }
  }, [window.width])

  const width = dimensions?.width || props.width
  const height = dimensions?.height || props.height
  return (
    <>
    <div
      ref={chartRef}
      className="chart__area"
      style={{ height: `100%`, width: '100%' }}>
      {/* basic responsiveness pattern for svg's => you can force dimensions consistency by setting it to a specific px value (from props or local state) or allow it to vary by setting it to 100% */}
      <svg
        id="canvas"
        viewBox={`0 0 ${width} ${height}`}
        height='100%'
        width='100%'
      >
        <ChartComponent data={data} width={width} height={height} />
        {/* If you need something to be in the chart grid area, add is as a foreignObject*/}
      </svg>
    </div>
    {/* Add anything that should be outside of the chart grid area */}
    </>
  )
}

export default Canvas
