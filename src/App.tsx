import ToDoList from "./components/ToDoList"
import Login from "./components/Login"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import { Provider } from "./Ctx"
import Signup from "./components/Signup"
import "./App.css"
import { Toaster } from "react-hot-toast"

const App = () => {
  return (
    <Provider>
      <Toaster />
      <Router>
        <div className="bg-gradient-to-tr from-[#013030] via-[#002536] to-[#09093a] w-full min-w-[700px] min-h-screen">
          <NavBar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<ToDoList />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  )
}

export default App
