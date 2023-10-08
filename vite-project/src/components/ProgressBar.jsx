import React from 'react'

const ProgressBar = ({percent}) => {
    const outerBar={
        height:"20px",
        borderRadius:"5px",
        background:"lightgray",
        width:"100%",
    }
    const filled={
        height:"20px",
        borderRadius:"5px",
        background:"green",
        width:`${percent}%`,
    }
  return (
    <>
    <div style={outerBar}>
        <div style={filled}></div>
    </div>
    </>
  )
}

export default ProgressBar
