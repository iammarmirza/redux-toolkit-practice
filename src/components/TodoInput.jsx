import { useSelector, useDispatch } from 'react-redux'
import { addTodo, changeText } from '../features/todo/todoSlice'

export const TodoInput = () => {
    const dispatch = useDispatch()
    const text = useSelector(state => state.text)

    const handleEnterKey = (e) => {
        if(e.key === 'Enter' && text !== '') dispatch(addTodo())
    }

    const handleAddButton = () => {
        if(text !== '') dispatch(addTodo())
    }

    return (
        <div className="flex gap-2">
            <input type="text" value={text} onChange={(e) => dispatch(changeText(e.currentTarget.value))} onKeyDown={(e) => handleEnterKey(e)} className="border-2 pl-2" placeholder="Enter your task here" />
            <button className=" bg-blue-500 text-white px-3 py-2 rounded-md" onClick={handleAddButton} >Add Task</button>
        </div>
    )
}