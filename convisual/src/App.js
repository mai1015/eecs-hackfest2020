import React from "react";
import logo from "./logo.svg";
import "./App.css";
import 'antd/dist/antd.css'
import MyRouter from "./Pages/Router";
import Navbar from "./Pages/Navbar";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <MyRouter />
      </Router>
    </div>
  );
}

export default App;
