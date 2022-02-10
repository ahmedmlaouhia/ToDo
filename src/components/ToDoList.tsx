import Sidebar from "./Sidebar"
import ToDoListItems from "./ToDoListItems"

const ToDoList = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-[95%] md:w-2/3 lg:w-3/4 ml-auto">
        <h1 className="text-4xl font-bold text-[#eb7f27e0] mt-28 mb-20 text-center title cursor-default">
          Here is my ToDo List
        </h1>
        <ToDoListItems />
      </div>
    </div>
  )
}
export default ToDoList
