import React from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

export default function PremiumFeaturesSection() {
  // Array of features to map through
  const features = [
    { name: "Intro lessons", freeAccess: true },
    { name: "Unlimited learning", freeAccess: false },
    { name: "Full courses", freeAccess: false },
    { name: "Advanced topics", freeAccess: false },
    { name: "Jump ahead in courses", freeAccess: false }
  ];

  return (
    <section className="py-12 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2 text-gray-900">
          Unlock the full Brilliant
        </h2>
        <h2 className="text-3xl font-bold mb-12 text-gray-900">
          experience with <span className="text-purple-500">Premium</span>
        </h2>
        
        <div className="flex justify-center">
          <div className="grid grid-cols-3 gap-4 w-full max-w-2xl">
            {/* Benefits Column */}
            <div>
              <div className="font-semibold text-left text-gray-700 h-12 flex items-center">Benefits</div>
              {features.map((feature, index) => (
                <div key={index} className="text-left text-gray-700 h-12 flex items-center">
                  {feature.name}
                </div>
              ))}
            </div>
            
            {/* Free Column */}
            <div>
              <div className="font-semibold text-center text-gray-700 h-12 flex items-center justify-center">Free</div>
              {features.map((feature, index) => (
                <div key={index} className="h-12 flex items-center justify-center">
                  {feature.freeAccess ? (
                    <FaCheckCircle className="h-5 w-5 text-orange-500" />
                  ) : (
                    <FaTimesCircle className="h-5 w-5 text-gray-300" />
                  )}
                </div>
              ))}
            </div>
            
            {/* Premium Column with Gradient Border */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 rounded-xl"></div>
              <div className="relative bg-white m-[2px] rounded-lg h-[calc(100%-4px)]">
                <div className="font-semibold text-center text-purple-600 h-12 flex items-center justify-center">Premium</div>
                {features.map((feature, index) => (
                  <div key={index} className="h-12 flex items-center justify-center">
                    <FaCheckCircle className="h-5 w-5 text-orange-500" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
