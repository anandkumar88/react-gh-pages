// Import dependencies
import * as React from 'react'

// Import TodoItem
import { TodoItem } from './todoitem'

// Import interfaces
import { TodoListInterface } from './../interfaces'

// TodoList component
export const TodoList = (props: TodoListInterface) => {
    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <span>Todo List(s)</span>
            <div className="todo-list">
                <ul>
                    {props.todos.map((todo) => (
                        <li key={todo.id}>
                            <TodoItem
                                todo={todo}
                                handleTodoUpdate={props.handleTodoUpdate}
                                handleTodoRemove={props.handleTodoRemove}
                                handleTodoComplete={props.handleTodoComplete}
                                handleTodoBlur={props.handleTodoBlur}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}