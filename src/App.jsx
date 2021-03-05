import React from 'react';
import Login from './components/Login';
import Signup from "./components/Signup";
import DriveMode from "./components/DriveMode";
import Landing from "./components/Landing";
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
      <Route path="/" exact component={Landing}/>
      <Route path="/login" exact component={Login}/>
      <Route path="/signup" exact component={Signup}/>
      <Route path="/drive" exact component={DriveMode}/>
    </Router>
    </div>
  );
}

export default App;
