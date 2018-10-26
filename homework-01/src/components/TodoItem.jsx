import React, { Component } from 'react';

class TodoItem extends Component {
    render() { 
        const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
        var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


        const classList= this.props.todo.complete? "todo-item todo-item--done": "todo-item";
        return ( 
            
            <div>
                <div className={classList}>
                    <h2  className="todo-item__title ">
                        {this.props.todo.title+ " "}
                        <span className="todo-item__due-date"> 
                        {days[this.props.todo.dueDate._d.getDay()]+" " } 
                            {this.props.todo.dueDate._d.getDate() +" "}
                            {month[this.props.todo.dueDate._d.getMonth()]+" "}, 
                            {" "+this.props.todo.dueDate._d.getFullYear()}
                        </span>
                    </h2>
                    <div className="btn-list">
                        {
                            !this.props.todo.complete?
                            <button 
                                className="btn btn--white todo-item__btn--done" 
                                onClick={()=>{this.props.completeTodoTask(this.props.index)}}>
                                    Done
                            </button> : ""
                        }
                        <button 
                            className="btn btn--white todo-item__btn--delete" 
                            onClick={()=>{this.props.handleDelete(this.props.todo)}}>
                                Delete
                        </button>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default TodoItem;