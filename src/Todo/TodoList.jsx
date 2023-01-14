import React from "react";
import styles from './Todo.module.scss'
import ToDoItem from "./TodoItem/ToDoItem";
import PropTypes from "prop-types"

function TodoList(props) {
    return (
        <div className={styles.todoList}>
            <ul>
                {props.todos.map((todo,index)=>{
                    return <ToDoItem todo={todo} key={todo.id} index={index} onChange={props.onToggle}/>
                }) }
            </ul>
        </div>
    )
}
TodoList.propTypes={
    todos:PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle:PropTypes.func.isRequired
}
export default TodoList