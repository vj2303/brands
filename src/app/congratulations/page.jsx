'use client'
import { useState } from "react";

export default function Onboarding() {
  const [step, setStep] = useState(1);
  const [fullName, setFullName] = useState("Steve Jobs");
  const [displayName, setDisplayName] = useState("Steve");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {step === 1 ? (
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          {/* Step Indicator */}
          <div className="flex justify-center mb-6">
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className={`flex items-center justify-center w-10 h-10 rounded-full border-2 mx-2 transition-all ${
                  s === 1 ? "bg-purple-600 text-white border-purple-600" : "border-gray-300 text-gray-500"
                }`}
              >
                {s}
              </div>
            ))}
          </div>

          {/* Welcome Message */}
          <h2 className="text-2xl font-bold text-gray-900 text-center">Welcome! First things first...</h2>
          <p className="text-gray-500 text-center mb-6">You can always change them later.</p>

          {/* Input Fields */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">Full Name</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2">Display Name</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </div>

          {/* Button */}
          <button
            className="w-full bg-purple-600 text-white p-3 rounded-md font-semibold hover:bg-purple-700 transition-all"
            onClick={() => setStep(2)}
          >
            Create Workspace
          </button>
        </div>
      ) : (
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
          {/* Eden Logo */}
          <h2 className="text-3xl font-bold text-purple-600 mb-4">🌿 Eden</h2>

          {/* Step Indicator */}
          <div className="flex justify-center mb-6">
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className={`flex items-center justify-center w-10 h-10 rounded-full border-2 mx-2 transition-all ${
                  s <= 4 ? "bg-purple-600 text-white border-purple-600" : "border-gray-300 text-gray-500"
                }`}
              >
                {s}
              </div>
            ))}
          </div>

          {/* Success Message */}
          <div className="flex justify-center items-center w-16 h-16 mx-auto mb-4 bg-purple-600 text-white rounded-full text-3xl">
            ✔
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Congratulations, {displayName}!</h2>
          <p className="text-gray-500 mb-6">You have completed onboarding, you can start using Eden!</p>

          {/* Button */}
          <button className="w-full bg-purple-600 text-white p-3 rounded-md font-semibold hover:bg-purple-700 transition-all">
            Launch Eden
          </button>
        </div>
      )}
    </div>
  );
}