import Image from 'next/image';

export default function CTASection() {
  return (
    <section className="py-12 px-4 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div className="relative w-16 h-16">
            <Image 
              src="https://placehold.co/64x64"
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
  );
}