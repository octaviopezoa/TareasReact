import React, {Component} from 'react';
import './App.css';

// importo data de prueba
import task from './example/task.json';
console.log(task);


class App extends Component {

  state= {
    task : task
  }

  render() {
    return <div>{ this.state.task }</div>
  }
}

export default App;