'use client';

import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from 'next/image';

export default function PremiumPage() {
  const [selectedTab, setSelectedTab] = useState('Math');

  return (
    <div className="flex flex-col bg-gradient-to-b from-white to-purple-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-12 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-4">
            <div className="relative w-24 h-24">
              <Image 
                src="/gift-icon.png" 
                alt="Gift icon" 
                width={96} 
                height={96}
                className="object-contain"
              />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Smartest gift ever</h1>
          <p className="text-lg text-gray-700 mb-8">
            Share the gift of more big ideas, more fun, and more hands-on problem solving.
          </p>
          
          {/* Pricing Cards */}
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-lg mb-1">1 Month</h3>
              </div>
              <div className="font-bold text-lg">$27.99</div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-purple-200 flex flex-col justify-between relative">
              <div className="absolute -top-3 left-0 right-0 flex justify-center">
                <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">
                  MOST POPULAR
                </span>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">1 Year</h3>
              </div>
              <div className="font-bold text-lg">$161.88</div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-lg mb-1">Lifetime</h3>
              </div>
              <div className="font-bold text-lg">$749.99</div>
            </div>
          </div>
          
          {/* Gift Now Button */}
          <button className="bg-gradient-to-r from-purple-400 to-orange-400 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all">
            Gift now
          </button>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Why people gift Brilliant Premium</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="flex flex-col">
              <p className="text-gray-700 mb-4">
                "It's perfect for everyone - I started on the free version and loved it, so I sent it to my 14 year old son, and his improvement in math was amazing in just 2 weeks!"
              </p>
              <p className="font-semibold text-gray-900">- William C.</p>
              <div className="flex text-yellow-400 mt-2">
                {'★★★★★'.split('').map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="flex flex-col">
              <p className="text-gray-700 mb-4">
                "Brilliant has taught me mathematical concepts that I previously struggled to understand. I now feel confident approaching both technical job interviews and real world problem solving situations."
              </p>
              <p className="font-semibold text-gray-900">- Jacob S.</p>
              <div className="flex text-yellow-400 mt-2">
                {'★★★★★'.split('').map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="flex flex-col">
              <p className="text-gray-700 mb-4">
                "Brilliant! The premium subscription is absolutely worth it. I'm solving puzzles every free moment! A must-have for people looking for mental challenges."
              </p>
              <p className="font-semibold text-gray-900">- Rt.</p>
              <div className="flex text-yellow-400 mt-2">
                {'★★★★★'.split('').map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Gift For Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
            Brilliant Premium is a great gift for...
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Students */}
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12 12 0 01.665 1.192A11.97 11.97 0 0120 20.4a11.94 11.94 0 01-8 3.6 12 12 0 01-8-3.6 11.97 11.97 0 01-1.176-1.789L12 14z" />
                    <path d="M12 14v10" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Students</h3>
              <p className="text-gray-700 text-center">
                Master concepts through problem solving in math, science, and computer science. Build intuition instead of memorizing formulas.
              </p>
            </div>
            
            {/* Professionals */}
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 3v18M3 12h18M5.63 5.63l12.74 12.74M18.37 5.63L5.63 18.37" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Professionals</h3>
              <p className="text-gray-700 text-center">
                Keep your knowledge base fresh and prepare for quantitative interviews. Explore topics from probability to computer science to machine learning.
              </p>
            </div>
            
            {/* Lifelong Learners */}
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v4M12 16h.01" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Lifelong Learners</h3>
              <p className="text-gray-700 text-center">
                Choose from fun, guided exercises in hundreds of interesting topics. Keep your mind active and improve critical thinking skills.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Premium Features Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-2 text-gray-900">
            Unlock the full Brilliant
          </h2>
          <h2 className="text-3xl font-bold mb-12 text-gray-900">
            experience with <span className="text-purple-500">Premium</span>
          </h2>
          
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="grid grid-cols-3 gap-4 text-left">
              <div className="font-semibold text-gray-700">Benefits</div>
              <div className="font-semibold text-center text-gray-700">Free</div>
              <div className="font-semibold text-center text-purple-600">Premium</div>
              
              {/* Intro lessons */}
              <div className="text-gray-700">Intro lessons</div>
              <div className="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              
              {/* Unlimited learning */}
              <div className="text-gray-700">Unlimited learning</div>
              <div className="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              
              {/* Full courses */}
              <div className="text-gray-700">Full courses</div>
              <div className="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              
              {/* Advanced topics */}
              <div className="text-gray-700">Advanced topics</div>
              <div className="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              
              {/* Jump ahead in courses */}
              <div className="text-gray-700">Jump ahead in courses</div>
              <div className="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Guided Paths Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
            Guided paths for every journey
          </h2>
          
          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex">
              {['Math', 'CS & Programming', 'Data Analysis', 'Science'].map((tab) => (
                <button
                  key={tab}
                  className={`px-6 py-2 ${selectedTab === tab ? 'text-blue-600 font-semibold' : 'text-gray-600'}`}
                  onClick={() => setSelectedTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          
          {/* Math Courses */}
          {selectedTab === 'Math' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-6 text-gray-900">Math Courses</h3>
                <ul className="space-y-4">
                  {[
                    'Solving Equations',
                    'Visual Algebra',
                    'Real World Algebra',
                    'Graphs and Functions',
                    'Geometry and Trigonometry',
                    'Vectors and Linear Algebra',
                    'Calculus'
                  ].map((course) => (
                    <li key={course} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-800">{course}</span>
                    </li>
                  ))}
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-600">12 additional courses</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="bg-white rounded-lg p-6 shadow-sm w-full max-w-md aspect-square">
                  <div className="w-full h-full relative">
                    <Image
                      src="/quadratic-function.png"
                      alt="Quadratic functions graph"
                      layout="fill"
                      objectFit="contain"
                    />
                    <div className="absolute bottom-2 left-2 text-sm text-gray-700">
                      Quadratic functions
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      
      {/* Partners Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-gray-700 mb-6">
            All of our 40+ courses are crafted by award-winning teachers, researchers, and professionals from:
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {['Caltech', 'MIT', 'Duke', 'Microsoft', 'Google'].map((partner) => (
              <div key={partner} className="text-gray-500 font-semibold text-lg">
                {partner}
              </div>
            ))}
            <div className="text-gray-400 text-xs">AND MANY MORE</div>
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="py-12 px-4 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="relative w-16 h-16">
              <Image 
                src="/gift-icon.png" 
                alt="Gift icon" 
                width={64} 
                height={64}
                className="object-contain"
              />
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-8 text-gray-900">
            The perfect gift to help them finish the day a little smarter.
          </h2>
          <button className="bg-gradient-to-r from-purple-400 to-orange-400 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all">
            Gift now
          </button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}