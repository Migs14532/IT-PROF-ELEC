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
    <div className="min-h-screen flex flex-col items-center justify-center bg-black p-6">
      <div className="w-full max-w-md bg-white rounded-2xl p-6 space-y-4">
        <h1 className="text-2xl font-bold text-center">
          <span className="text-red-500">M</span>
          <span className="text-orange-500">i</span>
          <span className="text-yellow-500">g</span>
          <span className="text-green-500">G</span>
          <span className="text-blue-500">P</span>
          <span className="text-purple-500">T</span>
        </h1>

        <input
          value={prompt}
          onChange={handleInputChange}
          placeholder="Type your prompt..."
          className="w-full px-4 py-2 border rounded-lg"
        />

        <button
          onClick={handleSubmit}
          className={`w-full py-2 rounded-lg text-white font-semibold transition 
            ${isLoading ? "bg-red-300 cursor-not-allowed" : "bg-black hover:bg-orange-600"}`}
          disabled={isLoading}
        >
          {isLoading ? "Generating..." : "Submit"}
        </button>

        <div className="mt-4 p-4 border rounded-lg bg-white-50">
          <p className="text-black">{response}</p>
        </div>
      </div>
    </div>
  )
}
