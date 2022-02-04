import ToDoList from "./components/ToDoList"
import Login from "./components/Login"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import { Provider } from "./Ctx"
import Signup from "./components/Signup"
import "./App.css"

const App = () => {
  return (
    <Provider>
      <Router>
        <div className="bg-gradient-to-tr from-[#013030] via-[#002536] to-[#09093a] w-screen min-h-screen">
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
