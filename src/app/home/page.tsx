"use client";

import { useState, useRef } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { courses } from "@/data/courseData";

// Mock user data for demonstration
const userData = {
  name: "Arira",
  streakDays: 152,
  completedCourses: 3,
  inProgressCourses: 2,
  dailyActivity: [
    { day: "M", completed: true },
    { day: "T", completed: true },
    { day: "W", completed: true },
    { day: "Th", completed: true },
    { day: "F", completed: true },
    { day: "S", completed: true },
    { day: "Su", completed: true },
  ],
  recentCourse: {
    id: "programming-python",
    title: "Programming with Python",
    level: 5,
    progress: 75,
    completed: true
  }
};

// Mock leaderboard data
const leaderboardData = [
  { rank: 1, avatar: "A", name: "Arira A", xp: 14735 },
  { rank: 2, avatar: "L", name: "Lisa Z", xp: 3110 },
  { rank: 3, avatar: "R", name: "Robert M", xp: 2240 },
];

export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Slides for the swipeable content
  const slides = [
    { id: "dashboard", title: "Dashboard" },
    { id: "courses", title: "My Courses" },
    { id: "leaderboard", title: "Leaderboard" },
  ];

  // Handle slide change
  const changeSlide = (index: number) => {
    setActiveSlide(index);
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: index * sliderRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="pb-12">
        {/* Welcome Header */}
        <div className="bg-white py-8 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-gray-900">
                Welcome, {userData.name}
              </h1>
              <div className="flex items-center">
                <div className="bg-yellow-400 rounded-full px-4 py-2 flex items-center">
                  <span className="text-xl font-bold">{userData.streakDays}</span>
                  <svg className="w-5 h-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Navigation */}
        <div className="bg-white shadow-sm mb-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-8 border-b">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeSlide === index
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                  onClick={() => changeSlide(index)}
                >
                  {slide.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Swipeable Content */}
        <div 
          ref={sliderRef}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden"
          style={{ scrollSnapType: "x mandatory", scrollBehavior: "smooth" }}
        >
          <div className="flex w-[300%]">
            {/* Slide 1: Dashboard */}
            <div className="w-1/3 flex-shrink-0" style={{ scrollSnapAlign: "start" }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Streak Card */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Daily Streak</h2>
                    <div className="flex justify-between items-center mb-6">
                      <div className="text-5xl font-bold text-yellow-500">{userData.streakDays}</div>
                      <div className="text-sm text-gray-500">days</div>
                    </div>
                    <div className="flex justify-between">
                      {userData.dailyActivity.map((day, index) => (
                        <div key={index} className="flex flex-col items-center">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${day.completed ? "bg-yellow-400" : "bg-gray-200"}`}>
                            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="text-xs mt-2 text-gray-500">{day.day}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Recent Activity Card */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Jump back in</h2>
                    <div className="bg-purple-50 rounded-lg p-6">
                      <h3 className="text-xl font-medium text-gray-900">{userData.recentCourse.title}</h3>
                      <div className="text-sm text-purple-600 mt-1">LEVEL {userData.recentCourse.level}</div>
                      <div className="mt-8 flex justify-center">
                        <div className="w-24 h-24">
                          <svg viewBox="0 0 100 100" className="w-full h-full">
                            <circle cx="50" cy="50" r="40" fill="#E9D5FD" />
                            <path d="M50 20 L50 40 L70 50 Z" fill="#9333EA" />
                          </svg>
                        </div>
                      </div>
                      <div className="text-center mt-4 text-gray-600">Daily practice complete!</div>
                      <div className="mt-4">
                        <Link
                          href={`/courses/${userData.recentCourse.id}`}
                          className="block w-full text-center bg-white border border-gray-300 rounded-lg py-3 font-medium hover:bg-gray-50"
                        >
                          Return to course
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* League Card */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-xl font-semibold text-gray-900">EINSTEINIUM LEAGUE</h2>
                      <svg className="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="text-sm text-gray-500 mb-6">12 hours left</div>

                    {leaderboardData.map((user) => (
                      <div key={user.rank} className="flex items-center mb-4 last:mb-0">
                        <div className="w-6 h-6 flex items-center justify-center text-gray-500 mr-3">
                          {user.rank}
                        </div>
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${
                          user.rank === 1 ? "bg-pink-500" : 
                          user.rank === 2 ? "bg-yellow-500" : "bg-purple-500"
                        }`}>
                          {user.avatar}
                        </div>
                        <div className="ml-3 flex-1">
                          <div className="font-medium">{user.name}</div>
                        </div>
                        <div className="text-gray-500">{user.xp} XP</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 2: My Courses */}
            <div className="w-1/3 flex-shrink-0 px-4" style={{ scrollSnapAlign: "start" }}>
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">In Progress</h2>
                <div className="grid grid-cols-1 gap-4">
                  {courses.slice(0, 2).map((course) => (
                    <Link 
                      href={`/courses/${course.id}`} 
                      key={course.id}
                      className="block bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="p-4 flex items-start">
                        <div className={`${course.color} w-12 h-12 rounded-lg flex items-center justify-center text-2xl flex-shrink-0 mr-4`}>
                          {course.icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900">{course.title}</h3>
                          <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${Math.floor(Math.random() * 80) + 10}%` }}></div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Completed</h2>
                <div className="grid grid-cols-1 gap-4">
                  {courses.slice(2).map((course) => (
                    <Link 
                      href={`/courses/${course.id}`} 
                      key={course.id}
                      className="block bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="p-4 flex items-start">
                        <div className={`${course.color} w-12 h-12 rounded-lg flex items-center justify-center text-2xl flex-shrink-0 mr-4`}>
                          {course.icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900">{course.title}</h3>
                          <div className="mt-2 flex items-center text-green-600">
                            <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm font-medium">Completed</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Slide 3: Leaderboard */}
            <div className="w-1/3 flex-shrink-0 px-4" style={{ scrollSnapAlign: "start" }}>
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Global Leaderboard</h2>
                  
                  <div className="space-y-6">
                    {/* Top 3 Users */}
                    <div className="flex justify-center space-x-8 py-4">
                      {/* 2nd Place */}
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white text-2xl mb-2">
                          L
                        </div>
                        <div className="text-sm font-medium">Lisa Z</div>
                        <div className="text-xs text-gray-500">3110 XP</div>
                        <div className="mt-2 w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold">
                          2
                        </div>
                      </div>
                      
                      {/* 1st Place */}
                      <div className="flex flex-col items-center -mt-4">
                        <div className="w-20 h-20 bg-pink-500 rounded-full flex items-center justify-center text-white text-3xl mb-2">
                          A
                        </div>
                        <div className="text-sm font-medium">Arira A</div>
                        <div className="text-xs text-gray-500">14735 XP</div>
                        <div className="mt-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-xs font-bold">
                          1
                        </div>
                      </div>
                      
                      {/* 3rd Place */}
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white text-2xl mb-2">
                          R
                        </div>
                        <div className="text-sm font-medium">Robert M</div>
                        <div className="text-xs text-gray-500">2240 XP</div>
                        <div className="mt-2 w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold">
                          3
                        </div>
                      </div>
                    </div>
                    
                    {/* Other Users */}
                    <div className="space-y-4 mt-8">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <div key={index} className="flex items-center p-3 hover:bg-gray-50 rounded-lg">
                          <div className="w-6 h-6 flex items-center justify-center text-gray-500 mr-3">
                            {index + 4}
                          </div>
                          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 mr-3">
                            {String.fromCharCode(65 + index)}
                          </div>
                          <div className="flex-1">
                            <div className="font-medium">User {String.fromCharCode(65 + index)}</div>
                          </div>
                          <div className="text-gray-500">{1800 - (index * 200)} XP</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}