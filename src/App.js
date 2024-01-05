import React, {Component} from 'react';
import Navbar from './components/Navbar';
import Section from './components/Section';
import './index.css';


class App extends Component { 
  render(){
    return (
      <div className="text-4xl font-bold">
        <Navbar />
        <Section />
      </div>
    );
  }
}
export default App;


