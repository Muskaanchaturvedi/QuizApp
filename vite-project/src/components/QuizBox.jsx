import React, { useState } from 'react'
import QuestionBox from './QuestionBox'
import Button from './Button'

const QuizBox = () => {
    const[visible,setVisible]=useState(false);
    const box={
        minHeight:"100vh",
        width:"80vw",
        margin:"auto",
        // backgroundColor:"#ecc8c2",
        padding:"20px",
        display:"flex",
        flexDirection:"column",
        gap:"15px",
        alignItems:"center"
    }
    const handleStart=()=>{
        setVisible(true);
    }
  return (
    <div style={box}>
    {!visible && <Button msg="Start" func={handleStart}/>}
    {visible && <QuestionBox/>}
    </div>
  )
}

export default QuizBox
