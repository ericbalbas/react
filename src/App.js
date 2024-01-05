import React, {Component} from 'react';
// import React, { useEffect } from "react";
import Navbar from './components/Navbar';
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
      <div className="text-4xl font-bold">
        <Navbar />
        <Section />
      </div>
    );
  }
}
export default App;


