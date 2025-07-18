import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import User from "./pages/User"
import Email from "./pages/Email"

function App() {
  return (
    <>
      <h1>Novem Controls</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/email" element={<Email />} />
        <Route path="/user/:id" element={<User/>}/>
      </Routes>
    </>
  )
}

export default App