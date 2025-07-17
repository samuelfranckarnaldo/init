import { useAuth } from "@/context/AuthContext"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const Login = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState("")

  const handleLogin = () => {
    login(email)
    navigate("/home")
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Entrar no Cloxeer</h1>
      <input
        type="email"
        placeholder="Seu e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full mb-4 p-2 border"
      />
      <button onClick={handleLogin} className="bg-black text-white p-2 w-full rounded">
        Entrar
      </button>
    </div>
  )
}

export default Login
