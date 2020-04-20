import React, { useState, useRef, useLayoutEffect } from 'react'

import Chart from './Chart/Canvas'

const ChartWrapper = ({ data }) => {
  const wrapperRef = useRef()
  const [dimensions, setDimensions] = useState()

  useLayoutEffect(() => {
    // Set the chart dimensions based on the dimensions on page load if you need to.
    if (wrapperRef?.current) {
      setDimensions({
        height: wrapperRef.current.offsetHeight,
        width: wrapperRef.current.offsetWidth
      })
    }
  }, [])

  return (
    <div ref={wrapperRef} className="chart" >
     <Chart height={dimensions?.height || 0} width={dimensions?.width || 0} />
    </div>
  )
}

export default ChartWrapper
