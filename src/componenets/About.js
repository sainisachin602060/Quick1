import './about.css'
import  my from './my.jpg'
function About()
{
    return(
    <div id="about">
      <h3 id="aboutHead">About Me</h3>
      <div id='continer'>

        <div>
        <img src={my} alt="hh" width="400" height="300" />
        </div>

        <div>
        <p id="me">HI, I am Sachin passionate about coding problem solving and learn new technology
            currently Pursue MCA. I mostly loved to Django and it is high level Web Framework of python.it esay for use and we create dyanmic web application.
            if you want changes in this application feel free<br></br> 
            <span id="mydetail">contact:8393919669</span><br></br>
            <span  id="mydetail">Email:sainisachin206020@gmail.com</span>
            
            </p>
            <p id="mylink">Checkout my Portfolio <a href="https://sainisachin.netlify.app/">Check</a></p>
            <p id="mylink">Checkout my Linkedin <a href="https://www.linkedin.com/in/sachin-saini-652a02232/">Check</a></p>
            <p id="mylink">Checkout my Github <a href="https://github.com/sainisachin602060">Check</a></p>
            <p id="sign">SACHIN SAINI</p>
        </div>



        

      </div>

     

     
   


    </div>)
}

export default About;