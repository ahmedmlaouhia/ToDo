import Sidebar from "./Sidebar"
import ToDoListItems from "./ToDoListItems"

const ToDoList = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-[95%] duration-100 md:w-2/3 lg:w-3/4 ml-auto h-screen">
        <h1 className="text-4xl duration-100 font-bold text-[#eb7f27e0] mt-20 mb-5 h-10 text-center title cursor-default">
          Here is my ToDo List
        </h1>
        <ToDoListItems />
      </div>
    </div>
  )
}
export default ToDoList
