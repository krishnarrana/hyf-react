import React, { Component } from 'react';
import TodoItem from "./TodoItem.jsx"
class TodoList extends Component {
    render() { 
        return ( 
            <div>
                {
                    this.props.todoList.map((todo,i)=>{
                        return <TodoItem  
                            todo= {todo}
                            key={i} 
                            handleDelete ={this.props.handleDelete}
                        />
                    })
                }
            </div>
         );
    }
}
 
export default TodoList;