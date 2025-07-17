import { useState } from "react"
import { motion } from "framer-motion"
import Insight from "./Insight"
import Panorama from "./Panorama"
import Consult from "./Consult"
import CreateButton from "./CreateButton"

const TABS = ["Insight", "Panorama", "Consulta+"] as const
type Tab = typeof TABS[number]

const Home = () => {
  const [activeTab, setActiveTab] = useState<Tab>("Insight")
  const [touchStart, setTouchStart] = useState<number | null>(null)

  const handleSwipe = (direction: "left" | "right") => {
    const index = TABS.indexOf(activeTab)
    const nextIndex =
      direction === "left"
        ? Math.min(index + 1, TABS.length - 1)
        : Math.max(index - 1, 0)
    setActiveTab(TABS[nextIndex])
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case "Insight":
        return <Insight />
      case "Panorama":
        return <Panorama />
      case "Consulta+":
        return <Consult />
      default:
        return null
    }
  }

  return (
    <div className="relative w-full h-full bg-white dark:bg-black">
      {/* Tabs + Barra animada */}
      <div className="relative flex justify-around border-b border-gray-300 dark:border-gray-700">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="relative flex-1 py-3 text-sm font-semibold text-gray-500 dark:text-gray-400"
          >
            {activeTab === tab && (
              <motion.div
                layoutId="underline"
                className="absolute bottom-0 left-0 right-0 h-1 bg-purple-700 dark:bg-purple-400"
              />
            )}
            <span
              className={`${
                activeTab === tab
                  ? "text-purple-700 dark:text-purple-400"
                  : ""
              }`}
            >
              {tab}
            </span>
          </button>
        ))}
      </div>

      {/* Conteúdo com swipe animado */}
      <div
        className="overflow-hidden h-[calc(100%-48px)] touch-pan-x"
        onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchStart !== null) {
            const diff = e.changedTouches[0].clientX - touchStart
            if (diff > 50) handleSwipe("right")
            if (diff < -50) handleSwipe("left")
            setTouchStart(null)
          }
        }}
      >
        <motion.div
          key={activeTab}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -50, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="p-4"
        >
          {renderTabContent()}
        </motion.div>
      </div>

      {/* Botão flutuante */}
      <CreateButton />
    </div>
  )
}

export default Home
