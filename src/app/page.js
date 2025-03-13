'use client'
import { useState } from "react";
import { useRouter } from "next/navigation"; 
import Image from "next/image";

export default function Home() {
  const [selected, setSelected] = useState(null);
  const router = useRouter();

  const handleSelection = (type) => {
    setSelected(type);
    if (type === "solo") {
      router.push("/creator");
    } else if (type === "team") {
      router.push("/brand");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-6">
      {/* Left Section: Text and Selection */}
      <div className="flex flex-col items-start justify-center w-full max-w-lg">
        <h1 className="text-[#000] font-bold text-[40px]">Automate your busy work</h1>
        <p className="text-[20px] text-gray-500">Are you a solo creator or part of a team?</p>
        
        {/* Selection Box */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mt-4">
          {/* Solo Creator Option */}
          <div
            className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer transition-all ${
              selected === "solo" ? "border-blue-500 bg-blue-50" : "border-gray-300"
            }`}
            onClick={() => handleSelection("solo")}
          >
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                I’m a <span className="text-blue-600">creator</span>
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
            onClick={() => handleSelection("team")}
          >
            <div>
              <h3 className="text-lg font-semibold text-gray-900">I&apos;m a Brand</h3>
              <p className="text-gray-600 text-sm">My team needs to automate tasks.</p>
            </div>
            {selected === "team" && <span className="text-blue-600 text-xl">✔</span>}
          </div>
        </div>

        {/* Login Link */}
   
      </div>

      {/* Right Section: Image */}
      <div className="ml-12">
        <Image 
          src="/1.jpeg" 
          alt="Image" 
          height={800} 
          width={800} 
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
