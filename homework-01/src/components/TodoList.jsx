import React, { Component } from 'react';
import TodoItem from "./TodoItem.jsx"
class TodoList extends Component {
    render() { 
        return ( 
            <div>
                {
                    !this.props.todoList.length<=0 ?
                        this.props.todoList.map((todo,i)=>{
                            return <TodoItem  
                                todo= {todo}
                                key={i} 
                                handleDelete ={this.props.handleDelete}
                                completeTodoTask= {this.props.completeTodoTask}
                                index={i}
                            />
                        }):<h2>You don't have any todo list</h2>
                }
            </div>
         );
    }
}
 
export default TodoList;