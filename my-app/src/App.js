import React from "react";
import { Component } from "react";
import TestComp from "./TestComp";
import Blog from "./Blog";
import "./App.css";



class App extends Component{

  render() {
    return (
      <div>
         <TestComp />
        <Blog />
        
      </div>
    )
  }
}




export default App;
