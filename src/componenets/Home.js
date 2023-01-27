import React from "react";
import './Home.css'
import Marquee from "react-fast-marquee";

class Home extends React.Component
{
 

   
   

    start()
    {
        alert("First Choose Your Domain!")
    }
   
    render()
    {
  
        
        return(
          
           
            <div className="bigConatiner">
                   <Marquee value='10' id="mrq" speed={80}>❌PLEASE ANY STUDENT DO NOT TRY TO CHEATING❌</Marquee>
          

            <div className="HomeBody">

        <div id="mainHead">
        
            <div id="Homeheading">
            <h1 id="welcomeHeading">Welcome To Quiz Application!</h1>
            <h2 id="alwaysHead">We Always with you...</h2><br />
            <h3 id="testHeading">Test Your Mind!💤</h3>
         
            <button id="btn" onClick={()=>this.start()}>Getted Start</button>
            </div>
        </div>
             
            </div>
            </div>
          
        )
    }
}


export default Home;