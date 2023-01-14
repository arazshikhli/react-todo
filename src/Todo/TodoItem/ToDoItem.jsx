import React,{useContext} from "react";
import styles from './ToDoItem.module.scss'
import PropTypes, {number} from "prop-types";
import Context from "../../context";

function ToDoItem({todo,index, onChange}){
    const {RemoveTodo}=useContext(Context)
    const classes=[]
    if(todo.completed){
        classes.push('done')
    }
    console.log("todo: ",todo)
    return(
        <li className={styles.todoItem}>
            <div>
                 <span >
                <input type='checkbox' onChange={()=>onChange(todo.id)}/>
                <strong >{index+1}   </strong>
                     &nbsp;
                   <strong className={classes.join(' ')}>  {todo.title}</strong>
            </span>
            </div>

       <button className={styles.btn} onClick={RemoveTodo.bind(null,todo.id)}>&times;</button>
        </li>
    )
}
ToDoItem.propTypes={
    todo:PropTypes.object.isRequired,
    index:PropTypes.number,
    onChange:PropTypes.func.isRequired
}
export default ToDoItem