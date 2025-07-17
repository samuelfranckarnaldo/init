import { AlignJustify, EllipsisVertical, Circle } from "lucide-react"
import cloxeerLogo from "@/assets/images/logo/cloxeer.png"

const TopBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
      {/* Linha superior: Upgrade */}
      <div className="flex justify-end px-4 pt-3 pb-1">
        <button className="text-xs text-purple-600 dark:text-purple-400 hover:underline">
          Fazer upgrade
        </button>
      </div>

      {/* Linha inferior: Ícones + Logo central */}
      <div className="flex items-center justify-between px-4 pb-3">
        <AlignJustify className="text-black dark:text-white" size={22} />
        <img src={cloxeerLogo} alt="Cloxeer" className="h-6 w-auto" />
        <div className="flex gap-4">
          <Circle className="text-purple-600" size={20} />
          <EllipsisVertical className="text-black dark:text-white" size={20} />
        </div>
      </div>
    </div>
  )
}

export default TopBar
