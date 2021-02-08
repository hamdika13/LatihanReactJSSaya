import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Main from '../Page/Main'
import Resume from './Resume';
import Skills from './Skill';
import Portfolio from './Portfolio';
import Blog from './Blog';
import Contact from './Contact';


const Center =()=> {
<Switch>
<Route exact path = "/" Components ={Main}/>
<Route  path ="/Resume" Components = {Resume}/>
<Route  path ="/Skills" Components = {Skills}/>
<Route  path ="/Portfolio" Components = {Portfolio}/>
<Route  path ="/Blog" Components = {Blog}/>
<Route  path ="/Contact" Components = {Contact}/>
</Switch>
}

export default Center;