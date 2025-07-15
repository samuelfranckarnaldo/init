import { NavLink } from "react-router-dom"
import { FaHome, FaHeartbeat, FaDumbbell, FaBullseye, FaEnvelope } from "react-icons/fa"

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-2">
      <NavLink to="/home" className="text-black">
        <FaHome size={24} />
      </NavLink>
      <NavLink to="/fitness" className="text-black">
        <FaDumbbell size={24} />
      </NavLink>
      <NavLink to="/health" className="text-black">
        <FaHeartbeat size={24} />
      </NavLink>
      <NavLink to="/goals" className="text-black">
        <FaBullseye size={24} />
      </NavLink>
      <NavLink to="/messages" className="text-black">
        <FaEnvelope size={24} />
      </NavLink>
    </div>
  )
}

export default BottomNav
