import React from 'react';
import axios from 'axios';
import Login from './components/Login';
import Signup from "./components/Signup";

const api = axios.create({
  baseURL: `http://localhost:3000`
})

function App() {
  return (
    <div className="App">
      <Signup/>
    </div>
  );
}

export default App;
