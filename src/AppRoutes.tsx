// src/AppRoutes.tsx
import { Routes, Route } from "react-router-dom"
import Layout from "@/components/layout/Layout"

import Welcome from "@/views/auth/Welcome"
import Login from "@/views/auth/Login"
import Register from "@/views/auth/Register"

import Home from "@/views/home/Home"
import Fitness from "@/views/fitness/Fitness"
import Health from "@/views/health/Health"
import Goals from "@/views/goals/Goals"
import Messages from "@/views/messages/Messages"
import Guardians from "@/views/guardians/Guardians"
import Plan from "@/views/home/Plan"
import Post from "@/views/home/Post"

const AppRoutes = () => {
  return (
    <Routes>
      {/* Rotas públicas sem Layout */}
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Rotas privadas com Layout */}
      <Route element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/health" element={<Health />} />
        <Route path="/fitness" element={<Fitness />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/guardians" element={<Guardians />} />

        {/* Subrotas da tela Home */}
        <Route path="/home/plan" element={<Plan />} />
        <Route path="/home/post" element={<Post />} />
      </Route>

      {/* Rota 404 */}
      <Route path="*" element={<div className="p-4 text-center">Página não encontrada</div>} />
    </Routes>
  )
}

export default AppRoutes
