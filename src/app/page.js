'use client'
import { useState } from "react";
import Image from "next/image";

export default function Home() {

  const [selected, setSelected] = useState("solo");

  return (
  <div className="flex justify-center mt-[20px]">
       <div>
           

              <div className="flex flex-col items-center justify-center min-h-screen">
              <h1 className="text-[#000] font-bold text-[40px]">Automate your busy work</h1>
              <p className="text-[20px] text-gray-300">Are you a solo creator or part of a team</p>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        {/* Solo Creator Option */}
        <div
          className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer transition-all ${
            selected === "solo" ? "border-blue-500 bg-blue-50" : "border-gray-300"
          }`}
          onClick={() => setSelected("solo")}
        >
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              I’m a <span className="text-blue-600">solo creator</span>
            </h3>
            <p className="text-gray-600 text-sm">I need to automate some basic tasks.</p>
          </div>
          {selected === "solo" && <span className="text-blue-600 text-xl">✔</span>}
        </div>

        {/* Team Option */}
        <div
          className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer mt-4 transition-all ${
            selected === "team" ? "border-blue-500 bg-blue-50" : "border-gray-300"
          }`}
          onClick={() => setSelected("team")}
        >
          <div>
            <h3 className="text-lg font-semibold text-gray-900">I’m part of a team</h3>
            <p className="text-gray-600 text-sm">My team needs to automate tasks.</p>
          </div>
          {selected === "team" && <span className="text-blue-600 text-xl">✔</span>}
        </div>
      </div>
      {/* Login Link */}
      <p className="mt-4 text-gray-600">
        Already have an account? <a href="#" className="text-blue-600 font-semibold">Log in</a>
      </p>
    </div>
       </div>
       <div>
           
       </div>
  </div>
  );
}
