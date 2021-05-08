import './App.css';
import Resumetemplates from "./components/resumetemplates/resumetemplates";
import React from 'react';
// import React, { Component } from 'react';
import Contact from "./components/contact/contact"
import {BrowserRouter as Router, Route, Switch, exact, Redirect} from "react-router-dom";
import Header from "./components/header/header";
import Aboutus from "./components/aboutus/aboutus";
import Signup from "./components/signup/signup";
import Signin from "./components/signin/signin";
import Landing from "./components/landing/landing";
import Education from "./components/education/education";
import Final from "./components/final/final";
import Experience from "./components/experience/experience";
import ContactUs from "./components/contactUs/contactUs";
import { connect } from "react-redux";

const App = (props) => {
  let {auth} = props;
  console.log(auth);
  return ( 
    <Router>

        <Header />
        
        <Route path = "/" exact><Landing auth = {auth} /></Route>
        
        <Route path = "/about-us" exact>{auth ? <Aboutus /> : <Redirect to="/sign-up"></Redirect>}</Route>

        <Route path = "/sign-up" exact render = { (props) => auth ?  <Redirect to = "/" /> : <Signup {...props}  /> }></Route>

        <Route path="/contact-us"  exact render = { (props) => auth ?  <ContactUs {...props}/> : <Redirect to = "/sign-in" />   }></Route>

        <Route path = "/sign-in" exact render = { (props) => auth ?  <Redirect to = "/" /> : <Signin {...props}  /> }></Route>

        <Route path ="/resume-templates" exact render = { (props) => auth ?  <Resumetemplates {...props} />  : <Redirect to = "/sign-in" ></Redirect>  }></Route>
        
        <Route path = "/contact" exact render = { (props) => auth ?  <Contact {...props} />  : <Redirect to = "/sign-in" /> } ></Route>

        <Route path = "/education" exact render = { (props) => auth ?  <Education {...props}  />  : <Redirect to = "/sign-in"  /> }></Route>

        <Route path = "/experience" exact render = { (props) => auth ?  <Experience {...props}  />  : <Redirect to = "/sign-in"  /> }></Route>

        <Route path = "/final" exact render = { (props) => auth ?  <Final {...props}  />  : <Redirect to = "/sign-in"/> }></Route>
        
      </Router>
   );
}
 


const mapStateToProps = (state) => {
  return{
    auth: state.auth.auth
  }
}

export default connect(mapStateToProps)(App);

