import Image from 'next/image';
import { useState } from 'react';

export default function HeroSection() {
  const [selectedPlan, setSelectedPlan] = useState('1 Year'); // Default selected plan
  
  const plans = [
    { id: '1 Month', title: '1 Month', price: '$27.99', isPopular: false },
    { id: '1 Year', title: '1 Year', price: '$161.88', isPopular: true },
    { id: 'Lifetime', title: 'Lifetime', price: '$749.99', isPopular: false }
  ];
  
  return (
    <section className="py-12 text-center px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-center mb-4">
          <div className="relative w-24 h-24">
            <Image 
              src="https://placehold.co/96x96"
              alt="Gift icon" 
              width={96} 
              height={96}
              className="object-contain"
              unoptimized
            />
          </div>
        </div>
        <h1 className="text-5xl font-bold mb-4 text-gray-900">Smartest gift ever</h1>
        <p className="text-lg text-gray-700 mb-12">
          Share the gift of more big ideas, more fun, and more hands-on problem solving.
        </p>
        
        {/* Pricing Cards */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
          {plans.map((plan) => (
            <div key={plan.id} className="relative">
              {/* MOST POPULAR label - only for the popular plan */}
              {plan.isPopular && (
                <div className="absolute -top-3 left-0 right-0 flex justify-center z-10">
                  <span className="bg-gradient-to-r from-purple-400 to-orange-400 text-white text-xs font-semibold px-4 py-1 rounded-full">
                    MOST POPULAR
                  </span>
                </div>
              )}
              
              {/* Card with fixed height and width */}
              <div 
                onClick={() => setSelectedPlan(plan.id)}
                className={`cursor-pointer h-[150px] w-[250px] flex items-center justify-center ${
                  selectedPlan === plan.id 
                    ? 'p-[3px] bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 rounded-2xl' 
                    : 'bg-white rounded-2xl shadow-sm border border-gray-100'
                }`}
              >
                <div className={`${
                  selectedPlan === plan.id 
                    ? 'bg-white rounded-2xl' 
                    : ''
                  } w-full h-full flex flex-col items-center justify-center p-6`}
                >
                  <h3 className="font-bold text-xl mb-2">{plan.title}</h3>
                  <p className="font-bold text-xl">{plan.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Gift Now Button */}
        <button className="bg-gradient-to-r from-purple-400 to-orange-400 text-white font-semibold py-3 px-12 rounded-full shadow-md hover:shadow-lg transition-all text-lg">
          Gift now
        </button>
      </div>
    </section>
  );
}
