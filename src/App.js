import React, { Component } from 'react';
import './App.css';

import Tasks from './components/Tasks.js'
import task from './example/task.json';
console.log(task);


class App extends Component {

  state = {
    task: task
  }

  render() {
    return <div>
      <Tasks task ={this.state.task}/>
    </div>
  }

}



export default App;