import React, {useState} from "react";
import Question from "./Question";
import Button from "./Button";
import ProgressBar from "./ProgressBar";

const QuestionBox = () => {

  const questbox = {
    padding: "25px",
    backgroundColor: "white",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  };
  
  const questionSet = [
    "What is your Name?",
    "If you are living in 22nd century what changes do you expect in this world",
    "Which is the best seller you have recently read?",
    "Why do you think we should hire you?",
    "If you are given a choice between moonlight or artificial light for the rest of your life",
  ];
  const answerSet = [
    "aa",
    "bb",
    "cc",
    "dd",
    "ee",
  ];
  const n=answerSet.length;
  const [inputAns, setInputAns] = useState(new Array(n).fill(""));
  const [point,setPoint]=useState(0);
  const [score,setScore]=useState(false);
  const [percent,setPercent]=useState(0);

  const handleSubmit=()=>{
    let temp=0;
    for(let i=0;i<n;i++){
      if(inputAns[i]==answerSet[i]){
        temp++;
      }
      else{
      }
    }
    setPoint(temp)
    setScore(true)
    const newPercent = (temp / n) * 100;
    setPercent(newPercent);

  }


  return (
    <>
      <ProgressBar percent={percent}/>
      {questionSet.map((element,idx) => (
        <div style={questbox}>
          <Question question={element} idx={idx} setInputAns={setInputAns} inputAns={inputAns} color={score?(inputAns[idx]===answerSet[idx]?"green":"red") :"white"}/>
        </div>
      ))}
      <Button msg="Submit" func={handleSubmit}/>

      {score && <div style={{backgroundColor:"black" , color:"white", fontWeight:"bold",width:"100%" ,padding:"12px"}}>Your Score is {point} out of {n}</div>}
    </>
  );
};

export default QuestionBox;
