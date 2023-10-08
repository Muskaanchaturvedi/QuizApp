import React from 'react'


const Question = ({question,idx,setInputAns,inputAns,color}) => {
  const inputStyle={
    padding:"10px",
    fontSize:"15px",
    background:color
  }
  const handleChange = (e) => {
    inputAns[idx] = e.target.value;
    setInputAns([...inputAns]);
  };
  
  return (
    <>
    <h3 >{question}</h3>
    <input  style={inputStyle} type='text' placeholder='Type your answer here' onChange={handleChange}></input>
    </>
  )
}

export default Question
