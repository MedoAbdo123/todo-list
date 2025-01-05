import { useState } from "react"
import { Todo } from "../Types/Types"

interface Props {
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
    activeFilter: boolean | null
}
function TodoList({ todos, setTodos, activeFilter }: Props) {
    const [editText, setEditText] = useState<string>("")
    const [editTodoId, setEditTodoId] = useState<number | null>(null)
    
    function handleDelete(idToDelete: number) {
        setTodos(todos.filter(todo => todo.id != idToDelete))
    }
    function handleDone(id: number) {
        setTodos(todos.map(todo => todo.id == id ? { ...todo, isDone: !todo.isDone } : todo))
    }
    function handleEditTodo(id: number) {
        const todoEdit = todos.find(todo => todo.id == id)
        if (todoEdit) {
            setEditTodoId(id)
            setEditText(todoEdit.todo)
        }
    }
    function handleSaveEditTodo(id: number) {
        setTodos(todos.map(todo => todo.id == id ? { ...todo, todo: editText } : todo))
        setEditTodoId(null)
        setEditText("")
    }
    const filteredTodos = todos.filter(todo => {
        if (activeFilter == true) return todo.isDone
        if (activeFilter == false) return !todo.isDone
        return true
    })
    return (
        <div className="flex justify-center items-center flex-col mt-6 space-y-6">
            {filteredTodos.map(todo => (
                <div className="text-2xl flex items-center text-end p-[18px] rounded-lg bg-blue-600 w-[80%] hover:p-[23px] transition-all">
                    {editTodoId == todo.id ? (
                        <div className="">
                            <input
                                type="text"
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                                className="text-black mr-4 text-lg outline-none"
                            />
                            <svg className="inline bg-emerald-500 rounded-full hover:cursor-pointer transition-all hover:bg-emerald-600" onClick={() => handleSaveEditTodo(todo.id)} xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#e8eaed">
                                <path d="M360-120q-100 0-170-70t-70-170v-240q0-100 70-170t170-70h240q100 0 170 70t70 170v240q0 100-70 170t-170 70H360Zm80-200 240-240-56-56-184 184-88-88-56 56 144 144Zm-80 120h240q66 0 113-47t47-113v-240q0-66-47-113t-113-47H360q-66 0-113 47t-47 113v240q0 66 47 113t113 47Zm120-280Z" />
                            </svg>
                        </div>
                    ) : (
                        <>
                            <h1 className="mr-2" key={todo.id}>{todo.todo}</h1>
                            <div className="flex justify-between ml-auto gap-2">
                                <svg onClick={() => handleDone(todo.id)} className={`rounded-xl hover:cursor-pointer transition-all ${todo.isDone ? "bg-green-600 hover:bg-green-700" : "bg-gray-400 hover:bg-gray-500"
                                    }`} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                                    <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q65 0 123 19t107 53l-58 59q-38-24-81-37.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-18-2-36t-6-35l65-65q11 32 17 66t6 70q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-56-216L254-466l56-56 114 114 400-401 56 56-456 457Z" />
                                </svg>
                                <svg onClick={() => handleEditTodo(todo.id)} className="bg-slate-600 transition-all hover:bg-slate-700 rounded-xl hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                                    <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
                                </svg>
                                <svg onClick={() => handleDelete(todo.id)} className="bg-red-600 transition-all hover:bg-red-700 rounded-xl hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                                    <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                                </svg>
                            </div>
                        </>
                    )
                    }
                </div>
            ))}
        </div>
    )
}

export default TodoList