import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import { useUsername } from "../Ctx"
const NavBar = () => {
  const navigate = useNavigate()
  const { username, logout } = useUsername()
  const handleLogout = () => {
    logout()
    toast.success("See you soon 😀")

    navigate("/login", { replace: true })
  }

  return (
    <div className="absolute -top-11 hover:top-0 duration-200 w-full pb-4 z-20">
      <div className="  flex justify-between items-center bg-[#1e749c4b] py-3 px-10 backdrop-blur-lg ">
        <div className="flex items-center">
          <h1 className="text-2xl font-black text-[#db6b10e1] cursor-default title">
            Lis't ToDo It
          </h1>
        </div>

        {localStorage.getItem("token") && (
          <div className="flex items-center">
            <h1 className="text-lg font-semibold text-cyan-500 mr-2 cursor-default">
              {username}
            </h1>
            <button
              onClick={handleLogout}
              className="bg-[#eb7f27a8] hover:bg-[#eb7f27c4] hover:shadow-mine duration-300 hover:shadow-[#eb7f27]/30 rounded-2xl px-4 py-[5px] 
            border-none outline-none focus:outline-none
            text-[#093144] text-sm font-black"
            >
              LOGOUT
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default NavBar
