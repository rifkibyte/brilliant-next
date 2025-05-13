"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AiFillThunderbolt } from "react-icons/ai";

export default function Navbar({ isLoggedIn = true }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isStreakModalOpen, setIsStreakModalOpen] = useState(false);
  const pathname = usePathname();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleStreakModal = () => {
    setIsStreakModalOpen(!isStreakModalOpen);
  };

  // Navigation links with active state
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left side with logo and navigation */}
          <div className="flex items-center">
            {/* Logo - Hidden on mobile */}
            <div className="flex-shrink-0 hidden md:flex items-center">
              <Link href="/" className="flex items-center md:mr-6">
                <span className="text-2xl font-bold text-gray-900">
                  Brilliant
                </span>
              </Link>
            </div>

            {/* Navigation - Always visible if logged in */}
            {isLoggedIn && (
              <div className="flex items-center space-x-4">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`px-3 py-2 text-lg font-medium relative ${
                        isActive
                          ? "text-gray-900 bg-blue-100"
                          : "text-gray-700 hover:text-gray-900"
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500" />
                      )}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Right side - Auth buttons or User menu */}
          <div className="flex items-center">
            {isLoggedIn ? (
              <>
                {/* Premium Gift Button */}
                <Link
                  href="/premium"
                  className="border border-green-600 text-green-600 hover:bg-green-50 px-4 py-2 rounded-full text-lg font-medium mr-3"
                >
                  Premium
                </Link>

                {/* Points Button */}
                <div className="relative">
                  <button
                    onClick={toggleStreakModal}
                    className="md:bg-yellow-400 md:hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-full text-lg font-medium mr-3 flex items-center"
                  >
                    <span>154</span>
                    <AiFillThunderbolt className="text-yellow-500 md:text-gray-900" />
                  </button>

                  {/* Streak Modal Dropdown */}
                  {isStreakModalOpen && (
                    <div className="origin-top-right absolute right-0 mt-2 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 z-50">
                      <div className="p-4">
                        {/* Header with streak info */}
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="text-3xl font-bold">154</span>
                          <AiFillThunderbolt className="text-yellow-500 text-2xl" />
                        </div>
                        <p className="text-gray-700 mb-4">You're on a 154-day streak!</p>
                        
                        {/* Weekly streak circles */}
                        <div className="flex justify-between mb-6">
                          {['F', 'S', 'Su', 'M', 'T'].map((day, index) => (
                            <div key={index} className="flex flex-col items-center">
                              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center mb-1">
                                <svg className="w-5 h-5 text-black" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <span className="text-xs text-gray-500">{day}</span>
                            </div>
                          ))}
                        </div>
                        
                        {/* Stats */}
                        <div className="grid grid-cols-2 bg-gray-100 rounded-lg">
                          <div className="p-3 text-center border-r border-gray-200">
                            <div className="text-xl font-bold">154</div>
                            <div className="text-xs text-gray-500">Max streak</div>
                          </div>
                          <div className="p-3 text-center">
                            <div className="text-xl font-bold">2247</div>
                            <div className="text-xs text-gray-500">Lessons complete</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* User Menu with Animated Burger */}
                <div className="relative">
                  <button
                    onClick={toggleDropdown}
                    className="p-1 rounded-md hover:bg-gray-100 focus:outline-none w-8 h-8 flex items-center justify-center"
                    aria-expanded={isDropdownOpen}
                    aria-haspopup="true"
                  >
                    <div className="w-6 h-6 relative">
                      {/* Top line */}
                      <span
                        className={`absolute h-0.5 w-6 bg-yellow-500 transform transition-all duration-300 ease-in-out ${
                          isDropdownOpen ? "rotate-45 top-3" : "top-1"
                        }`}
                      />
                      {/* Middle line */}
                      <span
                        className={`absolute h-0.5 w-6 bg-yellow-500 top-3 transition-all duration-200 ease-in-out ${
                          isDropdownOpen ? "opacity-0" : "opacity-100"
                        }`}
                      />
                      {/* Bottom line */}
                      <span
                        className={`absolute h-0.5 w-6 bg-yellow-500 transform transition-all duration-300 ease-in-out ${
                          isDropdownOpen ? "-rotate-45 top-3" : "top-5"
                        }`}
                      />
                    </div>
                  </button>

                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100">
                      <div className="py-1">
                        <Link
                          href="/account"
                          className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100"
                        >
                          Account
                        </Link>
                        <Link
                          href="/help"
                          className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100"
                        >
                          Help
                        </Link>
                        <button
                          className="block w-full text-left px-4 py-2 text-lg text-gray-700 hover:bg-gray-100"
                          onClick={() => console.log("Log out")}
                        >
                          Log out
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                {/* Login Button */}
                <Link
                  href="/login"
                  className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-2 rounded-full text-lg font-medium mr-3"
                >
                  Log in
                </Link>

                {/* Get Started Button */}
                <Link
                  href="/signup"
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full text-lg font-medium"
                >
                  Get started
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
