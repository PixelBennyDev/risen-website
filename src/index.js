import { h, render, Component } from 'preact';
import Router from 'preact-router';
import './index.css';

// import pages
import Home from './pages/home';
import About from './pages/about';
import Lol from './pages/teams/lol';
import Fortnite from './pages/teams/fortnite';
import NotFound from './pages/NotFound';

console.log("[App] Loaded Bundles...");

class App extends Component {

  componentDidMount() {
    var dt=new Date();
    console.log("[App] Preact Application Mounted");  
    console.log("Copyright (c) " + dt.getFullYear() + " Jordan Sim & Risen");
  }

  render() {
    return (
      <div id="app-router">
        <Router>
          <Home path="/" />
          <About path="/about" />
          <Lol path="/teams/lol" />
          <Fortnite path="/teams/fortnite" />
          <NotFound type="404" default />
        </Router>
      </div>
    )
  }
}

render(<App />, document.getElementById("app-mount"));