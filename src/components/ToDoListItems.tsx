import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Item from "./Item"

const useToDo = () => {
  const navigate = useNavigate()
  const saveItemsInLocalStorage = (items: Task[]) => {
    localStorage.removeItem("items")
    localStorage.setItem("items", JSON.stringify(items))
  }
  const [task, setTask] = useState<string>("")
  const [items, setItems] = useState<Task[]>([])
  const handleAddItem = () => {
    let newData: Task = {
      text: task,
      isDone: false,
      id: items.length + 1
    }
    setItems([...items, newData])
    setTask("")
    saveItemsInLocalStorage(items)
  }
  useEffect(() => {
    const token = localStorage.getItem("token")
    if (!token) {
      navigate("/login", { replace: true })
    }
    const data = localStorage.getItem("items")
    if (data) {
      setItems(JSON.parse(data))
    }
  }, [])
  return {
    task,
    items,
    handleAddItem,
    setTask
  }
}

const ToDoListItems = () => {
  const { task, items, handleAddItem, setTask } = useToDo()

  return (
    <div className="mx-auto bg-white/20 md:w-1/2 w-4/5 xl:w-1/3 rounded-2xl mt-10 px-10 py-5">
      <div className="flex flex-col flex-wrap justify-center gap-6">
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          type="text"
          className="w-full
           bg-gray-500/50
           focus:bg-gray-300/70
           focus:duration-300
           duration-300
           border-none
           rounded-2xl
           px-4
           py-2
           focus:outline-none
           border-2
           outline-none
           text-gray-200/70
           placeholder-gray-200/70
           focus:placeholder-gray-800
           focus:text-black
           "
          placeholder="Add new item"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAddItem()
            }
          }}
        />
        {items.length === 0 && (
          <div className="text-center text-gray-500">
            <h1 className="text-3xl text-white/80">No items yet</h1>
          </div>
        )}
        {items.map((item, idx) => (
          <div
            key={idx}
            className="bg-blue-200/70 text-black rounded-2xl py-2 px-4 "
          >
            <Item text={item.text} id={item.id} />
          </div>
        ))}
      </div>
    </div>
  )
}

type Task = {
  text: string
  isDone?: boolean
  id?: number
}

export default ToDoListItems
