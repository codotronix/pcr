import React from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom"
import { Header } from './components/common'
import './App.css';
import { headerbarRoutes } from './utils/routes'

function App() {
  return (
    <div className="App">
      <Header />
      Hi there
    </div>
  );
}

export default App;
