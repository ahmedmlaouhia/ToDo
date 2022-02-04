import Button from "./Button"
import Input from "./Input"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import { useUsername } from "../Ctx"
import { useEffect } from "react"

const Login = () => {
  const navigate = useNavigate()
  const { login } = useUsername()

  const handleLogin = (e: any) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries())
    axios
      .post("http://localhost:6969/login", data)
      .then((res) => {
        if (res.data.token) {
          login(res.data.token, res.data.user)
          navigate("/", { replace: true })
        }
      })
      .catch((err) => {
        alert(err.response.data.error)
      })
  }

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      navigate("/", { replace: true })
    }
  }, [])

  return (
    <div className="flex justify-center">
      <div className="w-2/3 md:w-1/2 lg:w-1/3 rounded-lg">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#eb7f27be] mt-28 mb-20 title cursor-default">
            WELCOME BACK
          </h1>
        </div>
        <form onSubmit={handleLogin}>
          <Input name="username" />
          <Input name="password" type="password" />
          <Button name="login" />
          <h1 className="text-gray-200/70 cursor-default text-center pt-6">
            not joined yet ?
            <Link
              to="/signup"
              className="text-[#87beca] rounded-full font-medium cursor-pointer hover:text-[#51b7ce] hover:bg-[#75959c21] mx-2 px-3 py-2 
        duration-300"
            >
              Signup
            </Link>
          </h1>
        </form>
      </div>
    </div>
  )
}

export default Login
