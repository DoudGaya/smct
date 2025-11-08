"use client"

import { useState, useEffect } from "react"
import Sidebar from "./components/sidebar"
import Header from "./components/header"
import { useTheme } from "./providers"

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  
  // Use optional chaining to safely access theme
  let theme: "light" | "dark" = "light"
  try {
    const themeContext = useTheme()
    theme = themeContext.theme
  } catch (e) {
    // Theme context not available yet, use default
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  // Avoid hydration mismatch - don't render Header/Sidebar on server
  if (!mounted) {
    return <>{children}</>
  }

  return (
    <>
      <Header onToggleSidebar={toggleSidebar} theme={theme} />
      <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />
      {children}
    </>
  )
}
