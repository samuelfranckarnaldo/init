// src/components/layout/Layout.tsx
import TopBar from "@/components/navigation/TopBar"
import BottomNav from "@/components/navigation/BottomNav"

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <TopBar />
      <div className="pt-16 pb-16">{children}</div>
      <BottomNav />
    </>
  )
}

export default Layout
