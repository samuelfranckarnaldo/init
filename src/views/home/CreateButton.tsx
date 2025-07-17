// src/views/home/CreateButton.tsx
import { useState } from "react"
import { SquarePlus, ImagePlus, SquareChartGantt } from "lucide-react"

const CreateButton = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-20 right-4 z-50">
      {open && (
        <div className="mb-3 flex flex-col items-end space-y-3">
          <button className="bg-white dark:bg-black text-black dark:text-white p-3 rounded-full shadow-xl">
            <ImagePlus size={20} />
          </button>
          <button className="bg-white dark:bg-black text-black dark:text-white p-3 rounded-full shadow-xl">
            <SquareChartGantt size={20} />
          </button>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="bg-purple-600 text-white p-4 rounded-full shadow-xl"
      >
        <SquarePlus size={24} />
      </button>
    </div>
  )
}

export default CreateButton
