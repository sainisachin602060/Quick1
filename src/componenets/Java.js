
import React, { useState, useEffect } from 'react';
import './java.css'




function Java()
{
    


 var QuestionBank=[
        {
            Question:"1  __ is used to find and fix bugs in the Java programs?.",
            Answers:[
                {answers:"JVM",iscorrect:false,id:1},
                {answers:"JRE",iscorrect:false,id:2 },
                {answers:"JDK",iscorrect:false,id:3 },
                {answers:"JDB",iscorrect:true,id:4 }
            ]
        },
        {
            Question:"2.Who is the Founder of Java?",
            Answers:[
                {answers:"Guido van rausan",iscorrect:true,id:1 },
                {answers:"satya nadela",iscorrect:false,id:2 },
                {answers:"James Goslinge",iscorrect:false,id:3 },
                {answers:"van sao rai",iscorrect:false,id:4}
            ]
        },
        {
            Question:"3. Which of the following is not a Java features?",
            Answers:[
                {answers:"Dynamic",iscorrect:false,id:1 },
                {answers:"Architecture Neutral",iscorrect:false,id:2 },
                {answers:"Use of Pointer",iscorrect:true,id:3 },
                {answers:"Object-Oriented",iscorrect:false,id:4}
            ]
        },
        
        {
            Question:"4.JRE stands for ___.?",
            Answers:[
                {answers:"Java run ecosystem",iscorrect:false,id:1 },
                {answers:"JDK runtime Environment",iscorrect:false,id:2 },
                {answers:"Java Runtime Environment",iscorrect:true,id:3 },
                {answers:"None",iscorrect:false,id:4}
            ]
        },
  
        
        {
            Question:"5.JDK stands for ____.?",
            Answers:[
                {answers:"Java development kit",iscorrect:true,id:1 },
                {answers:"Java deployment kit",iscorrect:false,id:2 },
                {answers:"JavaScript deployment kit",iscorrect:false,id:3 },
                {answers:"None of these",iscorrect:false,id:4}
            ]
        },
        {
            Question:"6.What are the types of memory allocated in memory in java?",
            Answers:[
                {answers:"Heap memory",iscorrect:false,id:1 },
                {answers:"Stack memory",iscorrect:false,id:2 },
                {answers:"Both A and B",iscorrect:true,id:3 },
                {answers:"None of these",iscorrect:false,id:4}
            ]
        },
  
        {
            Question:"7. Can the main() method be overloaded in Java?",
            Answers:[
                {answers:"Yes",iscorrect:true,id:1 },
                {answers:"No",iscorrect:false,id:2 }
            ]
        },
  
        {
            Question:"8.Which class in Java is used to take input from the user?",
            Answers:[
                {answers:"Scanner",iscorrect:true,id:1 },
                {answers:"Input",iscorrect:false,id:2 },
                {answers:"Applier",iscorrect:false,id:2 },
                {answers:"None of these",iscorrect:false,id:2 }
            ]
        },
        {
            Question:"9.Is string mutable in Java?",
            Answers:[
                {answers:"Yes",iscorrect:true,id:1 },
                {answers:"No",iscorrect:false,id:2 }
            ]
        },
     

        {
            Question:"10.Which of the following can be declared as final in java?",
            Answers:[
                {answers:"Class",iscorrect:false,id:1 },
                {answers:"Method",iscorrect:false,id:2 },
                {answers:"Variable",iscorrect:false,id:2 },
                {answers:"All of these",iscorrect:true,id:2 }
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
    }      else{
        setshowscore(true)
    }
}

//this for reset button
const Raatempt=()=>
{
    setcurrentQuestion(0)
    setscore(0)
    setshowscore(false)
    setsecond(25)
    
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
                            <div><details id="qsdeatils">{ans.Question}</details><br></br><br></br></div>))
                    }
            </div></div>
           ):
           (

         <>
        <span id='qnNo'>Attempted :{currentQuestion+1}/</span>{QuestionBank.length} <span id="time"> ⏰ Time Left:{second}</span>  <br></br>  <div className='LoadQs'>
      
        <div>{QuestionBank[currentQuestion].Question}</div></div><br />

                 
                
                <div className='Answer'>{
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



export default Java;

