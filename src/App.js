import logo from './logo.svg';
import './App.css';
import React from 'react'
import MyCars from './componentes/MyCars'
import MyTest from './componentes/MyTest'

class App extends React.Component {

  state = {
    titre: 'dahmane'
  } 

  render() {
    return (
      <div className="app">
        Learn React Ibrahim      
        <MyCars title = {this.state.titre}/>
        <MyTest />
        <MyTest />
      </div>
    );
  }
 
}

export default App;
