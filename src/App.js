import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
} 
from "react-router-dom";
import Header from "./Header";
import Blog from "./Blog";
import BlogDetail from "./BlogDetail";

//install bootstrap dulu
import 'bootstrap/dist/css/bootstrap.min.css';

// Ini merupakan functional component
// https://getbootstrap.com/docs/4.4/examples/navbar-static/
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/about">About</Route>
          <Route path="/blog/:articleId" component={BlogDetail} />
          <Route path="/blog" component={Blog}><Blog /></Route>
          <Route path="/">Home</Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
