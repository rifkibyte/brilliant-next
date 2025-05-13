export default function TestimonialsSection() {
  return (
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
  );
}