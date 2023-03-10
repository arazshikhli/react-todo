import React,{useEffect} from "react";
import './index.scss';
import TodoList from "./Todo/TodoList";
import Context from "./context";
import Loader from "./loader";
import Modal from "./Modal/Modal";

const AddTodo=React.lazy(()=>import('./Todo/AddTodo'))

function App() {
    const [todos, setTodos] = React.useState('')
    const [loading,setLoading]=React.useState(true)
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=15?_completed=false')
            .then(response => response.json())
            .then(todos=> {
                setTimeout(()=>{setTodos(todos.filter(todo=>todo.completed===false))
                setLoading(false)},2000)
            })
    },[])
    function toggleTodo(id) {
        setTodos(todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        )
    }

    function RemoveTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    function addTodo(title) {
        setTodos(todos.concat([{
            title: title,
            id: Date.now(),
            completed: false
        }]))
    }

    return (
        <Context.Provider value={{RemoveTodo}}>
            <div className="wrapper">
                <h1>ToDo List:</h1>
                <Modal/>
                <React.Suspense fallback={<p>loading...</p>}>
                    <AddTodo onCreate={addTodo}/>
                </React.Suspense>
                {loading&&<Loader/>}
                {todos.length ? (
                    <TodoList todos={todos} onToggle={toggleTodo}/>) :(
                        loading ? null:<p>No Todos</p>
                ) }

            </div>
        </Context.Provider>

    );
}

export default App;
