import React, { Component } from 'react';

class TodoItem extends Component {
    render() { 
        return ( 
            <div>
                <div className="todo-item">
                <h2  className="todo-item__title">
                    {this.props.todo.title}<span className="todo-item__due-date"> {this.props.todo.dueDate}</span>
                </h2>
                <div>
                    <button 
                        className="btn btn--white todo-item__btn--delete" 
                        onClick={()=>{this.props.handleDelete(this.props.todo)}}>Delete</button>
                </div>
            </div>
            </div>
         );
    }
}
 
export default TodoItem;