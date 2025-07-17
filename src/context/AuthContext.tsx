import { createContext, useContext, useState, ReactNode } from "react"

interface User {
  id: string
  name: string
  email: string
  avatar: string
  isPro: boolean
}

interface AuthContextProps {
  user: User | null
  login: (email: string) => void
  logout: () => void
  isAuthenticated: boolean
}

const mockUser: User = {
  id: "123",
  name: "Samuel-Franck",
  email: "samuel@cloxeer.app",
  avatar: "/mock/avatar.jpg",
  isPro: true,
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)

  const login = (email: string) => {
    // Aqui você pode fazer validações
    setUser({ ...mockUser, email })
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{ user, login, logout, isAuthenticated: !!user }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
