import { useTheme } from "next-themes"

export default function Home() {
  const { theme, setTheme } = useTheme()

  function changeTheme() {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }

  return (
    <div className="min-h-screen bg-cool-gray-200 dark:bg-cool-gray-900 pt-4">
      <div className="container mx-auto">
        <button
          className="block rounded text-black bg-cool-gray-300 dark:text-white dark:bg-cool-gray-800 p-2 font-bold pointer"
          onClick={changeTheme}
        >
          Toggle theme
        </button>
      </div>
    </div>
  )
}
