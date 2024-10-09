"use client";
import Link from "next/link";
import { useState } from "react";

const SkeuomorphicNote = ({ week, href }) => {
  const [isHovered, setIsHovered] = useState(false);

  const rotateValue = Math.random() * 6 - 3; // Random rotation between -3 and 3 degrees
  const translateX = Math.random() * 10 - 5; // Random X translation between -5 and 5 pixels
  const translateY = Math.random() * 10 - 5; // Random Y translation between -5 and 5 pixels

  return (
    <Link
      href={href}
      className="block no-underline"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="w-48 h-48 bg-yellow-100 shadow-lg rounded-sm p-4 cursor-pointer transition-transform duration-200 ease-in-out"
        style={{
          transform: `rotate(${rotateValue}deg) translate(${translateX}px, ${translateY}px)`,
          boxShadow: isHovered
            ? "0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1), 0 0 0 5px rgba(255, 255, 0, 0.3)"
            : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        }}
      >
        <div className="h-full flex flex-col justify-between">
          <div className="text-gray-400 text-xs">CPRG 306</div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800">Week {week}</div>
            <div className="text-sm text-gray-600">Assignment</div>
          </div>
          <div className="text-right text-xs text-gray-400">Click to view</div>
        </div>
      </div>
    </Link>
  );
};

export default function Page() {
  return (
    <div className="bg-[#7c5b3f] min-h-screen bg-gradient-to-b py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">
          Web Development 2 - Assignments
        </h1>
        <div>
          <div className="flex flex-wrap justify-center gap-8">
            {[2, 3, 4].map((week) => (
              <SkeuomorphicNote key={week} week={week} href={`/week-${week}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
