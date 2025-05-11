import Link from 'next/link';

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Learn to think
            </h1>
            <p className="text-xl md:text-2xl font-light">
              Build quantitative skills in math, science, and computer science with fun and challenging interactive explorations.
            </p>
            <div className="pt-4">
              <Link href="/signup" className="inline-block bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-md font-medium text-lg">
                Start learning for free
              </Link>
              <p className="mt-2 text-sm opacity-80">Join millions of learners worldwide</p>
            </div>
          </div>
          <div className="mt-10 md:mt-0 md:w-1/2">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-xl">
              <div className="aspect-w-16 aspect-h-9 bg-blue-800 rounded-md flex items-center justify-center">
                <span className="text-5xl">🧠</span>
              </div>
              <div className="mt-4 text-center">
                <p className="font-medium">Interactive learning that challenges your mind</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}