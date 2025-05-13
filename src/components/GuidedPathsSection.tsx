import { useState } from 'react';
import Image from 'next/image';

export default function GuidedPathsSection() {
  const [selectedTab, setSelectedTab] = useState('Math');

  return (
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
                    src="https://placehold.co/400x400"
                    alt="Quadratic functions graph"
                    fill
                    style={{ objectFit: 'contain' }}
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
  );
}