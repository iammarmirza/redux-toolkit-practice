import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    text: '',
    todos: []
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        changeText: (state, action) => {
            state.text = action.payload
        },
        addTodo: (state) => {
            const todo = {
                text: state.text,
                id: nanoid(),
                isCompleted: false
            }
            state.todos.push(todo)
            state.text = ''
        },
        markIsCompleted: (state, action) => {
            state.todos = state.todos.map(todo => {
                return {...todo, isCompleted : todo.id === action.payload ? !todo.isCompleted : todo.isCompleted}
            })
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        }
    }
})

export const { changeText, addTodo, markIsCompleted, deleteTodo } = todoSlice.actions
export default todoSlice.reducer