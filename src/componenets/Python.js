
import React, { useState, useEffect } from 'react';
import './python.css'




function Python()
{
    


 var QuestionBank=[
        {
            Question:"1.Who is the Founder of Python?",
            Answers:[
                {answers:"Guido van rausan",iscorrect:true,id:1},
                {answers:"Bill Gates",iscorrect:false,id:2 },
                {answers:"james gosling",iscorrect:false,id:3 },
                {answers:"Sunder Pichai",iscorrect:false,id:4 }
            ]
        },
        {
            Question:"2.How To Print HELLO in Python?",
            Answers:[
                {answers:"BY System.out.println",iscorrect:false,id:1 },
                {answers:"BY Printout()",iscorrect:false,id:2 },
                {answers:"BY print()",iscorrect:true,id:3 },
                {answers:"BY return()",iscorrect:false,id:4}
            ]
        },
        {
            Question:"3.Which Year Python has Come?",
            Answers:[
                {answers:"1991",iscorrect:true,id:1 },
                {answers:"1990",iscorrect:false,id:2 },
                {answers:"2022",iscorrect:false,id:4},
                {answers:"1998",iscorrect:false,id:4}
            ]
        },
        {
            Question:"4.Python is Static or Dyanmic?",
            Answers:[
                {answers:"Static",iscorrect:false,id:1 },
                {answers:"Dyanmic",iscorrect:true,id:2 }
                
            ]
        },
        {
            Question:"5.What is the Extension Of Python File?",
            Answers:[
                {answers:".java",iscorrect:false,id:1 },
                {answers:".py",iscorrect:true,id:2 },
                {answers:".js",iscorrect:false,id:3 },
                {answers:".htmll",iscorrect:false,id:4}
            ]
        },
        {
            Question:"6.Which keyword is used for function in Python language?",
            Answers:[
                {answers:"Function",iscorrect:false,id:1 },
                {answers:"Define",iscorrect:false,id:2 },
                {answers:"Fun",iscorrect:false,id:3 },
                {answers:"def",iscorrect:true,id:4}
            ]
        },
        {
            Question:"7.How is a code block indicated in Python?",
            Answers:[
                {answers:":",iscorrect:true,id:1 },
                {answers:"{}",iscorrect:false,id:2 },
                {answers:"()",iscorrect:false,id:3 },
                {answers:"::",iscorrect:false,id:4}
            ]
        },
        {
            Question:"8. In which language is Python written?",
            Answers:[
                {answers:"C",iscorrect:true,id:1 },
                {answers:"C++",iscorrect:false,id:2 },
                {answers:"English",iscorrect:false,id:3 },
                {answers:"Math",iscorrect:false,id:4}
            ]
        },
        {
            Question:"9. Which character is used in Python to make a single line comment?",
            Answers:[
                {answers:"/",iscorrect:false,id:1 },
                {answers:"//",iscorrect:false,id:2 },
                {answers:"#",iscorrect:true,id:3 },
                {answers:"##",iscorrect:false,id:4}
            ]
        },
        {
            Question:"10. In which year was the Python 3.0 version developed?",
            Answers:[
                {answers:"2008",iscorrect:true,id:1 },
                {answers:"2010",iscorrect:false,id:2 },
                {answers:"2012",iscorrect:false,id:3 },
                {answers:"1999",iscorrect:false,id:4}
            ]
        }
  

    ]

//use State Hook



    const[currentQuestion,setcurrentQuestion]=useState(0)
    const[score,setscore]=useState(0)
    const[showscore,setshowscore]=useState(false)
    const[mss,setmessage]=useState("")
    const[second,setsecond]=useState(60)
   
     
    


//this is for timing function and very important


    useEffect(() => {
        const interval = setInterval(() => {
          setsecond(second => second- 1);

        if(second===0)
        {
            setshowscore(true)


 
       
        }}, 1000);
        return () => clearInterval(interval);
      });




//check Ans if True of False

const event =(iscorrect)=>{
    

if(iscorrect)
    {
     
        setscore(score+1)

    }
     //forword next Question
     const nextQuestion=currentQuestion+1
    

     //check if question is last question or not
 
     if(nextQuestion<QuestionBank.length)
     {
         setcurrentQuestion(nextQuestion)
     }
     else if(currentQuestion>=QuestionBank.length)
     {
        setsecond(20)
     }
 
     else{
     
         setshowscore(true)
         setmessage("")
         
        }
}




//this for next button
const nextQs=()=>
{
    const nextQuestion=currentQuestion+1
    if(nextQuestion<QuestionBank.length)
    {
        setcurrentQuestion(nextQuestion)
    }  
    else{
        setshowscore(true)
    }
}

//this for reset button
const Raatempt=()=>
{
    setcurrentQuestion(0)
    setscore(0)
    setshowscore(false)
    setsecond(60)
    
}
//this for your meessage button
const messge=(score)=>
{
    if(score<=5)
    {
        setmessage("FOCUS YOUR  📕 STUDY😡")
    }
   
    else{
        setmessage("Wow Amazing!❤️")
    }

}






//END OF FUNCTIONS





return(
   
        <div id="container">

 
        {showscore?(
            
            <div id="score">
                <span id="dashbod"><u>Dashboard</u></span>
               <span >Your Marks:</span> <input type="text" disabled value={score}  id="score1"/><br /><br></br>
        
           
              

               <span>Total Marks:</span> <input type="text" disabled value={QuestionBank.length}  id="score2"/>
                <br /><br></br>
                <button  id="Generate_Message" onClick={()=>messge(score)}>Generate Message</button>
                <span> </span>
                <button  id="Attempt_Again" onClick={()=>Raatempt()}>Attempt Again</button>
                <h1 id="ms">{mss}</h1>
                



               
            <div id="todayQS">
               <button id="btnQS">Today Questions</button><br></br><br></br>
              
                    {
                            QuestionBank.map((ans)=>(
                            <div><details id="qsdeatils">{ans.Question}
                             
                           
                            </details>
                         
                            <br></br><br></br>
                            
                            </div>))
                    }
            </div></div>
           ):
           (

         <>
        <span id='qnNo'>Attempted :{currentQuestion+1}/</span>{QuestionBank.length} <span id="time"> ⏰ Time Left:{second}</span>  <br></br>  <div className='LoadQuestion'>
      
        <div>{QuestionBank[currentQuestion].Question}</div></div><br />

                 
                
                <div className='Ans'>{
                        QuestionBank[currentQuestion].Answers.map((ans)=>(
                            <div >
                                <button id="picButton" onClick={()=>{event (ans.iscorrect)}}>{ans.answers}
                               
                                </button><br></br><br></br>
                            </div>
                            ))}
                </div>



                <div id="NextPrev">
                  
                    <span> <button id="next" onClick={()=>nextQs()}>Next</button></span>
                </div>
                
            </>
           )}
        </div>
      )}



export default Python;

