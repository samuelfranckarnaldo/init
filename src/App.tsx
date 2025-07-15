import { useLocation } from "react-router-dom"
import AppRoutes from "./AppRoutes";
import BottomTabs from "@/components/navigation/BottomNav"

export default function App() {
  const { pathname } = useLocation()
  const showTabs = !["/", "/login", "/register"].includes(pathname)

  return (
    <div className="pb-16">
      <AppRoutes />
      {showTabs && <BottomTabs />}
    </div>
  )
}
