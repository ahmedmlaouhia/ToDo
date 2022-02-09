import ToDoListItems from "./ToDoListItems"

const ToDoList = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-[#eb7f27e0] mt-28 mb-20 text-center title cursor-default">
        Here is my ToDo List
      </h1>
      <ToDoListItems />
    </div>
  )
}

export default ToDoList
