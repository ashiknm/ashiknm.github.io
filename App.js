import logo from "./logo.svg";
import "./App.css";
import { Button } from "semantic-ui-react";
import React, { Component } from "react";
import { Tasks } from "./Tasks";
import { Tasklists } from "./Tasklist";

function App() {
  return (
    <div className="App">
      <Tasklists />
      <Tasks />
    </div>
  );
}

export default App;