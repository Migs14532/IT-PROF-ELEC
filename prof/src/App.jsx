import React, { useState } from 'react'
import { askAi } from './lib/ai'

export default function App() {
  const [prompt, setPrompt] = useState("")
  const [response, setResponse] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e) => {
    setPrompt(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const response = await askAi(prompt)
    setResponse(response)
    setPrompt("");
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 space-y-4">
        <h1 className="text-2xl font-bold text-center text-gray-800">Ask MigGPT</h1>

        <input
          value={prompt}
          onChange={handleInputChange}
          placeholder="Type your prompt..."
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          onClick={handleSubmit}
          className={`w-full py-2 rounded-lg text-white font-semibold transition 
            ${isLoading ? "bg-blue-300 cursor-not-allowed" : "bg-orange-500 hover:bg-orange-600"}`}
          disabled={isLoading}
        >
          {isLoading ? "Generating..." : "Submit"}
        </button>

        <div className="mt-4 p-4 border rounded-lg bg-gray-50 min-h-[80px]">
          <p className="text-gray-700">{response}</p>
        </div>
      </div>
    </div>
  )
}
