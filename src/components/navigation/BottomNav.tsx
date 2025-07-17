// src/components/navigation/BottomNav.tsx
import { NavLink } from "react-router-dom"
import {
  Home,
  Activity,
  SquareCheck,
  Mail,
  ShieldUser,
} from "lucide-react"

const BottomNav = () => {
  const baseStyle =
    "flex flex-col items-center justify-center gap-1 text-xs"

  const getIconClass = (isActive: boolean) =>
    isActive
      ? "text-purple-600 dark:text-purple-500"
      : "text-black dark:text-white"

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 flex justify-around items-center py-3">
      <NavLink to="/home" className={({ isActive }) => `${baseStyle} ${getIconClass(isActive)}`}>
        <Home size={24} />
      </NavLink>

      <NavLink to="/health" className={({ isActive }) => `${baseStyle} ${getIconClass(isActive)}`}>
        <Activity size={24} />
      </NavLink>

      <NavLink to="/fitness" className={({ isActive }) => `${baseStyle} ${getIconClass(isActive)}`}>
        <SquareCheck size={24} />
      </NavLink>

      <NavLink to="/messages" className={({ isActive }) => `${baseStyle} ${getIconClass(isActive)}`}>
        <Mail size={24} />
      </NavLink>

      <NavLink to="/guardians" className={({ isActive }) => `${baseStyle} ${getIconClass(isActive)}`}>
        <ShieldUser size={24} />
      </NavLink>
    </div>
  )
}

export default BottomNav
