 import React, {Component} from 'react';
 import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom';
import Center from './Components/Center';
import PageLoader from './Components/PageLoader';
import Main from './Page/Main'
import Resume from './Components/Resume';
import Header from './Components/Header'
import Skills from './Components/Skill';
import Portfolio from './Components/Portfolio';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Footer from './Components/Footer'







class App extends Component{

  state ={
    isLoading : true
  }
  
  componentDidMount () {
setTimeout (() =>{this.fetchData()} ,2000);
  }

  fetchData = ()=> {
    setTimeout (()=> {this.fetchData()},2000)
  }


  render() {
    return(

      
      <div>
      <Header/>,<br></br>
    <Main/>,<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <br></br><br></br><br></br><br></br><br></br>    
    <Resume/>,
    <Skills/>,<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <br></br><br></br><br></br><br></br><br></br>
    <Portfolio/>,<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <br></br><br></br><br></br><br></br><br></br>
    <Blog/>,<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <br></br><br></br><br></br><br></br><br></br>
    <Contact/>,<br></br>
    <Footer/><br></br>
    <div className="main-menu" id="main-menu">
        <ul className="main-menu-list">
          <li><a><Link to ="/">Home</Link></a></li>
          <li><a><Link to ="/Resume">Resume</Link></a></li>
          <li><a><Link to ="/Skills">Skills</Link></a></li>
          <li><a><Link to ="/Portfolio">Portfolio</Link></a></li>
          <li><a><Link to ="/Blog">Blog</Link></a></li>
          <li><a><Link to ="/Contact">Contact</Link></a></li>
        </ul>
     
      </div>

      </div>
    )
  }

}

export default App;
