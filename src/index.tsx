import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { render } from 'react-dom'

// Import components
import { TodoForm } from './Components/todoform'
import { TodoList } from './Components/todolist'

// Import interfaces
import { TodoInterface } from './interfaces'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// TodoListApp component
const TodoListApp = () => {
    const [todos, setTodos] = React.useState<TodoInterface[]>([])
    const newTodosState: TodoInterface[] = [...todos]
    // var todoitems : any[] = [];
    // React.useEffect(() => {
    //     setInterval(() => {
    //         var id = newTodosState.find((x: TodoInterface) => (Date.parse(x.time.toLocaleString()) - Date.parse(new Date().toLocaleString())) <= 0)?.id;
    //         if(id != '' && id != null)
    //         {
    //         newTodosState.find((x: TodoInterface) => x.id === id)!.isCompleted = true;
    //         setTodos(newTodosState);
    //         }
    // }, 1000);
    //   }, []);



    // Creating new todo item
    function handleTodoCreate(todo: TodoInterface) {
        // Prepare new todos state
        
        // Update new todos state
        newTodosState.push(todo);

        // toast.success(todo.text, {autoClose: 10000});

        // var total = newTodosState.filter((todo: TodoInterface) => (Date.parse(todo.time.toLocaleString()) - Date.parse(new Date().toLocaleString()))).length;
        // if(total > 0)
        // {
        // setInterval(() => {
        //     newTodosState.filter((todo: TodoInterface) => (Date.parse(todo.time.toLocaleString()) - Date.parse(new Date().toLocaleString())) <= 0);
        //     setTodos(newTodosState);
        // }, 10000);
        // }
        // else
        // {
        //     newTodosState.find((todo: TodoInterface) => todo.id === todo.id)!.isCompleted = true;
        // }

        // Update todos state
        //todoitems = newTodosState;
        setTodos(newTodosState);
    }

    // Update existing todo item
    function handleTodoUpdate(event: React.ChangeEvent<HTMLInputElement>, id: string) {
        // Prepare new todos state
        const newTodosState: TodoInterface[] = [...todos]

        // Find correct todo item to update
        newTodosState.find((todo: TodoInterface) => todo.id === id)!.text = event.target.value

        // Update todos state
        setTodos(newTodosState)
    }

    // Remove existing todo item
    function handleTodoRemove(id: string) {
        // Prepare new todos state
        const newTodosState: TodoInterface[] = todos.filter((todo: TodoInterface) => todo.id !== id)

        // Update todos state
        setTodos(newTodosState);
    }

    // Check existing todo item as completed
    function handleTodoComplete(id: string) {
        // Copy current todos state
        const newTodosState: TodoInterface[] = [...todos]

        // Find the correct todo item and update its 'isCompleted' key
        newTodosState.find((todo: TodoInterface) => todo.id === id)!.isCompleted = !newTodosState.find((todo: TodoInterface) => todo.id === id)!.isCompleted
        toast(newTodosState.find((todo: TodoInterface) => todo.id === id)?.text + " was finished", { autoClose: 10000 });
        // Update todos state
        setTodos(newTodosState);
    }

    // Check if todo item has title
    function handleTodoBlur(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.value.length === 0) {
            event.target.classList.add('todo-input-error')
        } else {
            event.target.classList.remove('todo-input-error')
        }
    }

    return (
        <div className="todo-list-app">
            <TodoForm
                todos={todos}
                handleTodoCreate={handleTodoCreate}
            />

            <TodoList
                todos={todos}
                handleTodoUpdate={handleTodoUpdate}
                handleTodoRemove={handleTodoRemove}
                handleTodoComplete={handleTodoComplete}
                handleTodoBlur={handleTodoBlur}
            />

            <ToastContainer />
        </div>
    )
}

const rootElement = document.getElementById('root')
render(<TodoListApp />, rootElement)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();