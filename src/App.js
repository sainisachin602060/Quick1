import {BrowserRouter  as Router,Routes,Link,Route} from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Home from './componenets/Home.js';
import Help from './componenets/Help.js';
import Java from './componenets/Java.js';
import About from './componenets/About.js';
import JavaScript from './componenets/JavaScript.js';
import Html from './componenets/Html.js';
import Css from './componenets/Css.js';

import Python from './componenets/Python.js';
import './App.css';
function App() {


  return (
  <div >
     
   <div >
    <Router basename={process.env.PUBLIC_URL}>

    <Navbar bg="light" expand="lg" id="navBar" >
      <Container  >
        <Navbar.Brand  id="welcomeHead">Welcome..</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">


          <Nav className="me-auto">
          <Nav.Link href='/'><Link to="/" id='HomeLink'>Home</Link></Nav.Link>
           
          <NavDropdown title="Domain" id="basic-nav-dropdown">
          <NavDropdown.Item>  <Link to="/Python" id='PythonLink'>PYTHON</Link></NavDropdown.Item>
          <NavDropdown.Item>  <Link to="/JavaScript" id='JavaScriptLink'>JAVASCRIPT</Link></NavDropdown.Item>
          <NavDropdown.Item>  <Link to="/Java"  id='JavaLink'>JAVA</Link></NavDropdown.Item>
          <NavDropdown.Item>  <Link to="/html"  id='Html'>HTML</Link></NavDropdown.Item>
          <NavDropdown.Item>  <Link to="/css"  id='JavaLink'>CSS</Link></NavDropdown.Item>
            
           

          


             </NavDropdown>
             
              <NavDropdown.Divider />
            
           
          
            <Nav.Link  className='navlink'><Link to="/Help" id='HelpLink'>Help</Link></Nav.Link>

            <Nav.Link  className='navlink'><Link to="/About" id='AboutLink'>About</Link></Nav.Link>
          
          
          </Nav>


        </Navbar.Collapse>
      </Container>
    </Navbar>

  

      <Routes>
       
      <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/Help" element={<Help/>}></Route>
        <Route exact path="/About"  element={<About/>}></Route>
         <Route exact path="/Java"  element={<Java/>}></Route>
         <Route exact path="/JavaScript"  element={<JavaScript/>}></Route> 
        <Route exact path="/Python"  element={<Python/>}></Route>
        <Route exact path="/html"  element={<Html/>}></Route>
        <Route exact path="/css"  element={<Css/>}></Route>
      
        
      </Routes>


</Router>










  
  
    </div>
    </div>
  );
}

export default App;
