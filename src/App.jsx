import { useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function App() {
  const [dark, setDark] = useState(false)

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark')
    setDark(!dark)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <header className="w-full py-4 flex justify-between items-center border-b border-gray-300 dark:border-gray-700">
        <h1 className="text-2xl font-bold">TuBedGPT 2.0</h1>
        <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition">
          {dark ? <Sun /> : <Moon />}
        </button>
      </header>
      <main className="flex-1 w-full flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl">👋 Qui verrà la tua AI TuBedGPT!</p>
        </div>
      </main>
    </div>
  )
}
