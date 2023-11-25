import React, {Component} from 'react';
import Welcome from './components/Welcome';
import Name from './components/Name';
import Navbar from './components/Navbar';
import Position from './components/Position';
import './index.css';


class App extends Component {
  render(){
    return (
      <div className="text-4xl font-bold">
        <Navbar />
        <Welcome people='Eric John' />
        {/* <Name /> */}
        {/* <Position subject="Git" description=", Git is function" animation='bounce'/> */}
        {/* <Position subject="Github" description=", Github is Service " animation='pulse' bg='' /> */}
        {/* <Position subject="React" description=", React is a Library" animation='' /> */}
      </div>
    );
  }
}
export default App;


