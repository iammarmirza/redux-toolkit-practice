import { useSelector, useDispatch } from 'react-redux'
import { markIsCompleted, deleteTodo } from '../features/todo/todoSlice'

export const TodoList = () => {
    const tasks = useSelector(state => state.todos)
    const dispatch = useDispatch()

    return (
        <>
        {tasks.map(task => (
             <div key={task.id} className="flex justify-between w-[300px] items-center">
             <button className={task.isCompleted === true ? 'line-through' : ''} onClick={() => dispatch(markIsCompleted(task.id))}>{task.text}</button>
             <button className='bg-red-500 text-white px-2 py-1 rounded-md' onClick={() => dispatch(deleteTodo(task.id))}>Delete</button>
         </div>
        ))}
        </>
    )
}