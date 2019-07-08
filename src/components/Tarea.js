import React, {Component} from 'react';

class Tarea extends Component {
    render() {  

        const {e} = this.props;

        return <div>
            {e.title} - 
            {e.description} - 
            {e.done} - 
            {e.id}
            <input type="checkbox"/>
            <button>x</button>
        </div>
    }
}

export default Tarea;