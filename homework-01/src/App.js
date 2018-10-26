import React, { Component } from 'react';
import TodoInput from "./components/TodoInput.jsx"
import TodoList from "./components/TodoList.jsx"
import Header from "./components/Header.jsx"
import moment from 'moment';




class App extends Component {
  constructor(props){
    super(props);
    this.state={
      todoList:[
        // {title : "Hello",dueDate: "Wed Sep 13 2017",complete:true},
        // {title : "Eat Apple",dueDate: "Wed Sep 13 2017",complete:false},
        // {title : "Drink Water",dueDate: "Wed Sep 13 2017",complete:true},
      ],
      newTodo:{
        title:"",
        dueDate: moment(),
        complete:false,
      }
    }
    this.addTodo= this.addTodo.bind(this);
    this.handleInputChange= this.handleInputChange.bind(this);
    this.handleDelete= this.handleDelete.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.completeTodoTask= this.completeTodoTask.bind(this)
  }
  completeTodoTask(index){
    console.log(this.state.todoList)
    let newTodoList= this.state.todoList.slice();
    newTodoList[index].complete=true;

    console.log(newTodoList)
    this.setState({
        todoList:newTodoList
      });
  }
  handleDateChange(date) {
    console.log(date._d.getDate())
    this.setState(
      prevState => ({
        newTodo: {
          ...prevState.newTodo,
          dueDate:date
        }
      }));
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
          dueDate:moment(),
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
          <TodoList 
            todoList={this.state.todoList} 
            handleDelete={this.handleDelete} 
            completeTodoTask={this.completeTodoTask}/>
          <TodoInput 
            newTodo={this.state.newTodo} 
            addTodo= {this.addTodo} 
            handleInputChange={this.handleInputChange}
            handleDateChange={this.handleDateChange}
          />
        </div>
      </div>
    );
  }
}

export default App;
