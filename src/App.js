import React, {Component} from 'react';
// import React, { useEffect } from "react";

import Navbar from './components/Navbar';
import LandingPage from "./components/LandingPage";
import Section from './components/Section';
import './index.css';



class App extends Component {
  componentDidMount() {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);

    // ... rest of your component logic
  }

  render() {
    return (
      <div className="p-8">
        {/* <Navbar />
        <Section /> */}
        <LandingPage />
      </div>
    );
  }
}
export default App;


