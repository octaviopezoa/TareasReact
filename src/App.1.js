import React from 'react';
import './App.css';

// importo data de prueba
import task from './example/task.json';
console.log(task);

// function HelloWorld(props){
//   console.log(props);
  
//   return (
//     <div id="hello">
//     <h2>{props.mytext}</h2>
//     <h4>{props.subt}</h4>
//     </div>
//   )
// } 

class HelloWorld extends React.Component {

  state = {
    show : true
  }

  toggle = () => {
    this.setState({show: !this.state.show})
  }

  render () {
    if (this.state.show) {
      return (
        <div id="hello">
          <h2>{this.props.mytext}</h2>
          <h4>{this.props.subt}</h4>
          <button onClick={this.toggle}>Cambia estado</button>
        </div>
      )
    }
    else {
      return <div> 
        <h4>sin datos</h4>
        <button onClick={this.toggle}>volver</button>
      </div>
    }
  }
}



function App() {
  return (
    <div>
      <HelloWorld mytext="holo!!" subt="quiero"/>
      <HelloWorld mytext="chaucha" subt="nada"/>
      <HelloWorld mytext="por la chita" subt="y todo"/>
    </div>
  )
}

export default App;