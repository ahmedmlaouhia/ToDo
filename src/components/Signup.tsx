import Button from "./Button"
import Input from "./Input"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import { useEffect } from "react"

const Signup = () => {
  const navigate = useNavigate()
  const handleSignup = (e: any) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries())
    if (data.password === data.cpassword) {
      delete data.cpassword
      axios
        .post("http://localhost:6969/signup", data)
        .then((res) => {
          if (res.status == 201) {
            navigate("/login", { replace: true })
          }
        })
        .catch((err) => {
          alert(err.response.data.error)
        })
    } else console.log("password not match")
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
          <h1 className="text-4xl font-bold text-[#eb7f27e0] mt-28 mb-20 title cursor-default">
            JOIN THE FAMILY
          </h1>
        </div>
        <form onSubmit={handleSignup}>
          <Input name="username" />
          <Input name="password" type="password" />
          <Input name="cpassword" type="password" ph="confirm password" />
          <Button name="signup" />
          <h1 className="text-gray-200/70 cursor-default text-center pt-6">
            Already member ?
            <Link
              to="/login"
              className="text-[#87beca] rounded-full font-medium cursor-pointer hover:text-[#51b7ce] hover:bg-[#75959c21] mx-2 px-3 py-2 
        duration-300"
            >
              login
            </Link>
          </h1>
        </form>
      </div>
    </div>
  )
}

export default Signup
