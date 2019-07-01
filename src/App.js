import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import NavBar from "./components/NavBar";
import About from "./components/About";
import Skills from "./components/Skills";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Scroll from "./components/Scroll";
import Contact from "./components/Contact";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path={'/main'} component={NavBar}/>
        <Scroll>
          <Route exact path={'/'} component={Main}/>

          <Route exact path={'/main/about'} component={About}/>

          <Route exact path={'/main/skills'} component={Skills}/>

          <Route exact path={'/main/projects'} component={Projects}/>

          <Route exact path={'/main/contact'} component={Contact}/>
        </Scroll>
      </Router>
    );
  }
}

export default App;
