//import { Todo } from "../Types/Types"
interface Props {
    todo: string
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e: React.FormEvent) => void
}
function Inputtodo({ todo, setTodo, handleAdd }: Props) {
    return (
        <div className="p-4">
            <form className="mt-16 flex justify-between" onSubmit={handleAdd}>
                <button className={`transition-all ${todo ? "text-2xl w-[30%] p-1 bg-green-600":"text-2xl w-[30%] p-1 bg-gray-600"}`}  disabled={todo ? false : true}>
                    إضافة
                </button>

                <input
                    type="text"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    className="w-[60%] text-lg text-black outline-none p-2"
                    placeholder="عنوان المهمه"
                />
            </form>
        </div>
    )
}

export default Inputtodo