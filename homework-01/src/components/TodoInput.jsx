import React, { Component } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
class TodoInput extends Component {
  
   
    render() { 
        console.log(this.props.newTodo)
        return ( 
            <form className="todo-input" onSubmit={this.props.addTodo}>
                <input 
                    type="text" 
                    name="title" 
                    value={this.props.newTodo.title} 
                    onChange={this.props.handleInputChange} 
                    placeholder="What you want to do?" 
                    className="input todo-input__input"
                />
                <DatePicker
                    selected={this.props.newTodo.dueDate}
                    onChange={this.props.handleDateChange}
                    dateFormat="LL"
                    className="input todo-input__input"
                />
                <button className="btn" >Add</button>
            </form>
         );
    }
}
 
export default TodoInput;