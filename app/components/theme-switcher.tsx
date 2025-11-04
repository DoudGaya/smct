"use client"

import { useTheme } from "@/app/providers"

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300
        ${
          theme === "light"
            ? "bg-slate-200 text-slate-900 hover:bg-slate-300"
            : "bg-slate-800 text-slate-100 hover:bg-slate-700"
        }
        border
        ${theme === "light" ? "border-slate-300" : "border-slate-600"}
      `}
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <>
          <span className="text-lg">☀️</span>
          <span>Light</span>
        </>
      ) : (
        <>
          <span className="text-lg">🌙</span>
          <span>Dark</span>
        </>
      )}
    </button>
  )
}
