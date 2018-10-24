import React, { Component } from 'react';
import TodoInput from "./components/TodoInput.jsx"
import TodoList from "./components/TodoList.jsx"
import Header from "./components/Header.jsx"




class App extends Component {
  constructor(){
    super();
    this.state={
      todoList:[
        {title : "Hello",dueDate: "Wed Sep 13 2017"},
        {title : "Eat Apple",dueDate: "Wed Sep 13 2017"},
        {title : "Drink Water",dueDate: "Wed Sep 13 2017"},
      ],
      newTodo:{
        title:"",
        dueDate:"",
      }
    }
    this.addTodo= this.addTodo.bind(this);
    this.handleInputChange= this.handleInputChange.bind(this);
    this.handleDelete= this.handleDelete.bind(this);
  }
  addTodo(e){
    e.preventDefault();
    this.setState((prevState)=>({
      todoList: prevState.todoList.concat(this.state.newTodo)
    }));
    this.setState(
      prevState => ({
        newTodo:{
          title:"",
          dueDate:"",
        }
      }));
  }
  handleInputChange(e){
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        newTodo: {
          ...prevState.newTodo,
          [name]: value
        }
      }));

  }
  handleDelete(deleteItem){
    this.setState(prevState => ({ 
      todoList: prevState.todoList
              .filter(todo => todo !==deleteItem ) 
            }));
  }
  render() {

    return (
      <div className="app">
        <Header title="React Todo App" />
        <div className="app__container">
          <TodoInput 
            newTodo={this.state.newTodo} 
            addTodo= {this.addTodo} 
            handleInputChange={this.handleInputChange}
          />
          <TodoList todoList={this.state.todoList} handleDelete={this.handleDelete}/>
        </div>
      </div>
    );
  }
}

export default App;
