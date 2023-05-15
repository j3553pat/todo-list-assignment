import React, {Component} from 'react';
import TodoCard from './TodoCard';
import '../src/App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      task: "",
      todos: [],
      isClicked: false
    }
  }

  handleClick = () => {
    this.setState({
      todos: [...this.state.todos, this.state.task],
      text: ""
    })
  }

  handleChange = (event) => {
    this.setState({ task: event.target.value })
  }

  deleteTodo = (index) => {
    let copyOfTodos = this.state.todos;
    copyOfTodos.splice(index, 1);

    this.setState({ todos: [...copyOfTodos] });
  }

  render() {
    return (
      <div className="App" style={{backgroundColor: 'lightblue'}}>
        <h2>To Do List</h2>
        <div className="inputTodo">
          <input type="text" value={this.state.task} onChange={this.handleChange}></input>
          <button type="submit" onClick={this.handleClick} className="addBtn">Add Todo</button>
        </div>
        <ol>
          {this.state.todos.map((todo, index) => {
          return <TodoCard 
              key={index} 
              index={index} 
              title={todo} clickToDelete={this.deleteTodo}
            />
          })}
        </ol>
      </div>
    );
  }  
}

export default App;