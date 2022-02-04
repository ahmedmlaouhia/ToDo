import { useNavigate } from "react-router-dom"
import { useUsername } from "../Ctx"
const NavBar = () => {
  const navigate = useNavigate()
  const { username, logout } = useUsername()
  const handleLogout = () => {
    logout()
    navigate("/login", { replace: true })
  }

  return (
    <div className="flex justify-between items-center bg-[#2ba1d82a] p-3 backdrop-blur-3xl ">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-[#eb7f27be] ml-10 cursor-default title">
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
            className="bg-[#eb7f27be] hover:bg-[#eb7f27] hover:shadow-mine duration-200 hover:shadow-[#eb7f27]/30 rounded-2xl px-4 py-1 mx-2 
            border-none outline-none focus:outline-none
            text-white text-md font-bold"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  )
}

export default NavBar
