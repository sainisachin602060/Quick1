
import React, { useState, useEffect } from 'react';
import './javascript.css'



function JavaScript()
{
    


 var QuestionBank=[
        {
            Question:"1.Which type of language is Javascript?",
            Answers:[
                {answers:"Scripting",iscorrect:true,id:1},
                {answers:"Programming",iscorrect:false,id:2 },
                {answers:"Markup",iscorrect:false,id:3 },
                {answers:"None of Above",iscorrect:false,id:4 }
            ]
        },
        {
            Question:"2.Which tag is used to write the javascript code?",
            Answers:[
                {answers:"<HTML></HTML>",iscorrect:false,id:1 },
                {answers:"<SCRIPT></SCRIPT>",iscorrect:true,id:2 },
                {answers:"<JAVA></JAVA>",iscorrect:false,id:3 },
                {answers:"<JS></JS>",iscorrect:false,id:4}
            ]
        },
        {
            Question:"3.Original Name of Javascript is ?",
            Answers:[
                {answers:"Javascript",iscorrect:false,id:1 },
                {answers:"LiveScript",iscorrect:false,id:2 },
                {answers:"Escript",iscorrect:false,id:3 },
                {answers:"Mocha",iscorrect:true,id:4}
            ]
        },
        {
            Question:"4.Javascript is which type of language ?",
            Answers:[
                {answers:"Interpreted",iscorrect:true,id:1 },
                {answers:"Compiled",iscorrect:false,id:2 },
              
            ]
        },
        {
            Question:"5. function definition expression is known as ?",
            Answers:[
                {answers:" Function calls",iscorrect:false,id:1 },
                {answers:"Function definiation",iscorrect:false,id:2 },
                {answers:" Function calling",iscorrect:false,id:1 },
                {answers:"Function literal",iscorrect:true,id:2 }
              
            ]
        },
        {
            Question:"6.By which javascript code is used  ?",
            Answers:[
                {answers:"Classes",iscorrect:false,id:1 },
                {answers:"Methods/Functions",iscorrect:true,id:2 },
                {answers:"RMI",iscorrect:false,id:1 },
                {answers:"Events",iscorrect:false,id:2 }
              
            ]
        },
        {
            Question:"7. JavaScript and Java have similar OR NOT ?",
            Answers:[
                {answers:"YES",iscorrect:false,id:1 },
                {answers:"NOT",iscorrect:true,id:2 }
              
            ]
        },
        {
            Question:"8.Purpose of designing the Javascript?",
            Answers:[
                {answers:"To Perform Server Side Scripting Opertion",iscorrect:false,id:1 },
                {answers:"To add interactivity to HTML Pages",iscorrect:true,id:2 },
                {answers:"To Style HTML Pages",iscorrect:false,id:1 },
                {answers:"All of the above",iscorrect:false,id:2 }
              
            ]
        },
        {
            Question:"9.Which one is Ternary Operator?",
            Answers:[
                {answers:" :?",iscorrect:false,id:1 },
                {answers:"?*",iscorrect:false,id:2 },
                {answers:"?:",iscorrect:true,id:1 },
                {answers:"::",iscorrect:false,id:2 }
              
            ]
        },
        {
            Question:"10. Types of errors in any Language?",
            Answers:[
                {answers:"Compile Time Error",iscorrect:false,id:1 },
                {answers:"Logical Error",iscorrect:false,id:2 },
                {answers:"None of the above",iscorrect:false,id:1 },
                {answers:"Run time errors",iscorrect:true,id:2 }
              
            ]
        }

  

    ]

//use State Hook



    const[currentQuestion,setcurrentQuestion]=useState(0)
    const[score,setscore]=useState(0)
    const[showscore,setshowscore]=useState(false)
    const[mss,setmessage]=useState("")
    const[second,setsecond]=useState(60)
    const[result,setresult]=useState("")
  
   
     
    


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
             setresult("")
             
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
    setsecond(25)
    setresult("")
    
}
//this for your meessage button
const messge=(score)=>
{
    if(score<=5)
    {
        setmessage("FOCUS YOUR  📕 STUDY😡")
    }
    else if(score<=6 && score<=10)
    {
        setmessage("GOOD BUT NOT VERY GOOD 🎈")
    }
    else{
        setmessage("Wow Amazing!❤️")
    }

}



const Result=(score)=>{
  

    if(score<=5)
    {
        setresult("failed❌")
    }
   
    else{
        setresult("passed✅")
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
                
                <div id='Result'>
                <button onClick={()=>Result(score)} id="reslt">GetResult</button><span > </span>
                <span id={result==='Fail'?"fail":"pass"}>{result}</span>
                </div>



               
            <div id="todayQS">
               <button id="btnQS">Today Quiz Questions</button><br></br><br></br>
              
                    {
                            QuestionBank.map((ans)=>(
                            <div><details id="qsdeatils">{ans.Question}</details><br></br><br></br>
                           
                            </div>))
                        
                    }
            </div></div>
           ):
           (

         <>
        <span id='qnNo'>Attempted :{currentQuestion+1}/</span>{QuestionBank.length} <span id="time"> ⏰ Time Left:{second}</span>  <br></br>  <div className='LoadjsQ'>
      
        <div>{QuestionBank[currentQuestion].Question}</div></div><br />

                 
                
                <div className='Anss'>{
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



export default JavaScript;

