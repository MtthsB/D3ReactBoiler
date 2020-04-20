// https://hackernoon.com/simplifying-responsive-layouts-with-react-hooks-19db73893a7a

import React, { useState, useEffect, useContext, ReactNode } from 'react'
import { ProfileData } from './models'

export const store = React.createContext({})
const { Provider } = store

const ContextProvider = ({ children }) => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <Provider value={{ window: dimensions }}>
      {children}
    </Provider>
  )
}

export const useWindowDimensions = () => useContext(store).window
export default ContextProvider
