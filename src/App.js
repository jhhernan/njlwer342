import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {
  constructor(){
    super();
    this.state = {
      list : [],
      newTask : "",
    }
  }

  handleInput = (event) => {
    this.setState({
      newTask: event.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let newList = this.state.list.concat(this.state.newTask);
    this.setState({
      list: newList,
      newTask: "",
    })

  }


  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            <li>Sacar la ropa</li>
            <li>Hacer la cama</li>
            <li>Leer un rato</li>
            {this.state.list.map((item,idx) => 
              <li key={idx}>{item}</li>
              )}
          </ul>
           <form onSubmit={this.handleSubmit}>
             <input type="text" id="new-task" value={this.state.newTask} onChange={this.handleInput} placeholder="Ingresa una tarea y oprime Enter" />
           </form>
        </div>
      </div>
    )
  }
}


export default App;
