import React, { Component } from 'react';
import './App.css';


import task from './example/task.json';
console.log(task);


class App extends Component {

  state = {
    task: task
  }

  render() {
    return <div>
      { this.state.task.map(e => <p key ={e.id}> - {e.title} - {e.description} - {e.done} - {e.id}</p>) }
    </div>
  }
}



export default App;