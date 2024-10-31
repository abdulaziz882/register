import { Route, Routes } from "react-router-dom"
import Login from "./components/LogIn/login"
import Register from "./components/Register/Register"


function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/register" element={<Register/>}/>
    </Routes>
    </>
  )
}

export default App
