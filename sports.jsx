import React, { useState } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const players = [
    { id: 1, name: "Sanmi", age: 24 },
    { id: 2, name: "Tola", age: 27 },
    { id: 3, name: "Ode", age: 22 },
    { id: 4, name: "Femi", age: 25 },
  ];

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        {/* Sidebar */}
        <aside className="w-64 bg-blue-700 text-white p-6 hidden md:block">
          <h1 className="text-2xl font-bold mb-6">XandO Sports</h1>
          <nav>
            <ul>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Dashboard
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Players
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Settings
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-6 overflow-y-auto">
          {/* Top bar */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
              Dashboard
            </h2>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">
                Players
              </h3>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {players.length}
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">
                Teams
              </h3>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                2
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">
                Matches
              </h3>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                6
              </p>
            </div>
          </div>

          {/* Players Table */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
              Players List
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto">
                <thead>
                  <tr className="bg-gray-200 dark:bg-gray-700">
                    <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-200">
                      Name
                    </th>
                    <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-200">
                      Age
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {players.map((player) => (
                    <tr
                      key={player.id}
                      className="border-b border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      <td className="px-4 py-2 text-gray-800 dark:text-gray-100">
                        {player.name}
                      </td>
                      <td className="px-4 py-2 text-gray-800 dark:text-gray-100">
                        {player.age}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}