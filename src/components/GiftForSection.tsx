export default function GiftForSection() {
  return (
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
  );
}