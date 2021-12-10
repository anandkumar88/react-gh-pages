// Import dependencies
import * as React from 'react'
import shortid from 'shortid'
import DateTimePicker from 'react-datetime-picker';

import { TodoInterface, TodoFormInterface } from './../interfaces'

// Todo form component
export const TodoForm = (props: TodoFormInterface) => {

    // Create ref for form input
    const inputRef = React.useRef<HTMLInputElement>(null)
    // Create form state
    const [formState, setFormState] = React.useState('')
    const [value, onChange] = React.useState(new Date());

    React.useEffect(() => {
        const todo: TodoInterface = {
            id: shortid.generate(),
            text: 'Sample Todo List Item',
            time: value,
            isCompleted: true
        }

        // Create new todo item
        props.handleTodoCreate(todo)
      }, []);

    // Handle todo input change
    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        // Update form state with the text from input
        setFormState(event.target.value)
    }

    // Handle 'Enter' in todo input
    function handleInputEnter(event: React.KeyboardEvent<HTMLInputElement>) {
        // Check for 'Enter' key
        if (event.key === 'Enter') {
            // Prepare new todo object
            const newTodo: TodoInterface = {
                id: shortid.generate(),
                text: formState,
                time: value,
                isCompleted: false
            }

            // Create new todo item
            props.handleTodoCreate(newTodo)

            // Reset the input field
            if (inputRef && inputRef.current) {
                inputRef.current.value = ''
            }
        }
    }

    return (
        <div className="todo-form">
            <DateTimePicker className="datetime"
                format="y-MM-dd h:mm:ss a"
                onChange={onChange}
                value={value}
            />
            <br />
            <br />
            <input className="todo-form-item"
                ref={inputRef}
                type="text"
                placeholder='Enter new todo'
                onChange={event => handleInputChange(event)}
                onKeyPress={event => handleInputEnter(event)}
            />
        </div>
    )
}