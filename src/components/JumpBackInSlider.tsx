"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

// Contoh data kursus
const courseData = [
  {
    id: "programming-python",
    title: "Programming with Python",
    level: 5,
    type: "Practice",
    duration: "2 min",
    image: "/python-logo.png", // Pastikan path gambar sesuai dengan struktur project
    color: "bg-purple-500",
  },
  {
    id: "probability-intro",
    title: "Introduction to Probability",
    level: 5,
    type: "Spreading False News",
    duration: "6 min",
    image: "/probability-icon.png", // Pastikan path gambar sesuai dengan struktur project
    color: "bg-orange-500",
  },
  {
    id: "machine-learning",
    title: "Machine Learning Basics",
    level: 4,
    type: "Theory",
    duration: "8 min",
    image: "/ml-icon.png", // Pastikan path gambar sesuai dengan struktur project
    color: "bg-blue-500",
  },
];

export default function JumpBackInSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Fungsi untuk mengganti card dengan efek loop
  const goToCard = (index: number) => {
    // Loop ke awal jika melebihi jumlah card
    if (index < 0) {
      index = courseData.length - 1;
    } else if (index >= courseData.length) {
      index = 0;
    }
    setCurrentIndex(index);
  };

  // Handle touch dan mouse events untuk swipe
  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    setIsDragging(true);
    if ("touches" in e) {
      setStartX(e.touches[0].clientX);
    } else {
      setStartX(e.clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging) return;

    let currentX;
    if ("touches" in e) {
      currentX = e.touches[0].clientX;
    } else {
      currentX = e.clientX;
    }

    const diff = startX - currentX;

    // Jika swipe cukup jauh, ganti card
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swipe kiri
        goToCard(currentIndex + 1);
      } else {
        // Swipe kanan
        goToCard(currentIndex - 1);
      }
      setIsDragging(false);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Autoplay functionality (optional)
  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       goToCard(currentIndex + 1);
  //     }, 5000); // Change card every 5 seconds

  //     return () => clearInterval(interval);
  //   }, [currentIndex]);

  return (
    <div className="w-full max-w-md mx-auto relative">
      <h2 className="text-xl font-semibold mb-4">Jump back in</h2>

      {/* Card Container */}
      <div
        ref={sliderRef}
        className="relative h-[320px] w-full"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleTouchStart}
        onMouseMove={handleTouchMove}
        onMouseUp={handleTouchEnd}
        onMouseLeave={handleTouchEnd}
      >
        {/* Cards */}
        {courseData.map((course, index) => {
          // Calculate position and styling based on index relative to current
          //   const position = index - currentIndex;
          let position = index - currentIndex;

          // Handle looping for display purposes
          if (position < -1) {
            position += courseData.length;
          } else if (position > 1) {
            position -= courseData.length;
          }

          // Determine z-index: current card has highest z-index
          const zIndex = position === 0 ? 30 : 20 - Math.abs(position);

          // Determine opacity and scale
          let opacity = 1;
          let scale = 1;
          let translateY = 0;

          if (position !== 0) {
            opacity = 0.7 - Math.abs(position) * 0.2;
            scale = 0.9 - Math.abs(position) * 0.05;
            translateY = position > 0 ? 10 * position : 0;
          }

          // Only show cards that are current, next, or previous
          if (Math.abs(position) > 2) {
            return null;
          }

          return (
            <div
              key={course.id}
              className={`absolute top-0 left-0 w-full bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 border border-gray-100`}
              style={{
                transform: `translateX(${
                  position * 8
                }%) translateY(${translateY}px) scale(${scale})`,
                opacity,
                zIndex,
              }}
            >
              <div className="p-6 flex flex-col items-center">
                <h3 className="text-xl font-semibold text-center mb-1">
                  {course.title}
                </h3>
                <div
                  className={`text-sm ${course.color.replace(
                    "bg-",
                    "text-"
                  )} mb-6`}
                >
                  LEVEL {course.level}
                </div>

                <div className="w-32 h-32 mb-6 flex items-center justify-center">
                  {/* Placeholder for course image - replace with actual Image component */}
                  <div
                    className={`w-24 h-24 ${course.color} rounded-full flex items-center justify-center text-white text-4xl`}
                  >
                    {course.title.charAt(0)}
                  </div>
                </div>

                <div className="text-sm text-gray-600 mb-4">
                  {course.type} · {course.duration}
                </div>

                <button
                  className={`w-full py-3 px-6 rounded-full text-white font-medium ${course.color}`}
                >
                  Start
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {courseData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToCard(index)}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? "bg-blue-600" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
