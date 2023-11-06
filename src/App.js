import React, {Component} from 'react';
import Welcome from './components/Welcome';
import Name from './components/Name';
import Navbar from './components/Navbar';
import Position from './components/Position';
import './index.css';


class App extends Component {
  render(){
    return(
      <div className='text-4xl font-bold'>
        <Navbar />
        <Welcome />
        <Name />
        <Position />
      </div>
      
      )
  }
}
export default App;


