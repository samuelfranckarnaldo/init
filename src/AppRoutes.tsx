import { Routes, Route } from "react-router-dom"
import Welcome from "@/views/auth/Welcome"
import Login from "@/views/auth/Login"
import Register from "@/views/auth/Register"
import Home from "@/views/home/Home"
import Fitness from "@/views/fitness/Fitness"
import Health from "@/views/health/Health"
import Goals from "@/views/goals/Goals"
import Messages from "@/views/messages/Messages"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/home" element={<Home />} />
      <Route path="/fitness" element={<Fitness />} />
      <Route path="/health" element={<Health />} />
      <Route path="/goals" element={<Goals />} />
      <Route path="/messages" element={<Messages />} />
    </Routes>
  )
}

export default AppRoutes
