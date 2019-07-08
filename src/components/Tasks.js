import React, {Component} from 'react';

import Tarea from './Tarea.js';

class Tasks extends Component {
    render(){
        return this.props.task.map(tarea => <Tarea e={tarea} key={tarea.id}/>);
    }
}

export default Tasks;