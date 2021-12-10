import { TodoItemInterface } from '../interfaces'

// TodoItem component
export const TodoItem = (props: TodoItemInterface) => {
    return (
        <div className='todo-item'>
            <div onClick={() => props.handleTodoComplete(props.todo.id)}>
                {props.todo.isCompleted ? (
                    <span className="todo-item-checked">✔</span>
                ) : (
                    <span className="todo-item-unchecked" />
                )}
            </div>

            <div>
                {props.todo.text} - {props.todo.time.toLocaleString()}
            </div>

            <div className="item-remove" onClick={() => props.handleTodoRemove(props.todo.id)}>
                ⨯
            </div>
        </div>
    )
}