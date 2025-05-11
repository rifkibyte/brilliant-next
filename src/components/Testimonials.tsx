import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    quote: "Brilliant helped me develop my problem-solving skills in ways traditional education never could. The interactive lessons make complex topics accessible and engaging.",
    name: "Alex Johnson",
    title: "Software Engineer",
    avatar: "/avatars/alex.jpg"
  },
  {
    id: 2,
    quote: "As a math teacher, I recommend Brilliant to all my students. The way concepts are presented through puzzles and challenges creates those 'aha!' moments that make learning stick.",
    name: "Sarah Chen",
    title: "High School Math Teacher",
    avatar: "/avatars/sarah.jpg"
  },
  {
    id: 3,
    quote: "I've always struggled with mathematics, but Brilliant's approach of building intuition through interactive problems has completely changed how I think about math and science.",
    name: "Michael Rodriguez",
    title: "College Student",
    avatar: "/avatars/michael.jpg"
  }
];

export default function Testimonials() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">What Our Learners Say</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of learners who have transformed their understanding through our interactive approach
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 relative rounded-full overflow-hidden bg-gray-200 mr-4">
                  {testimonial.avatar && (
                    <Image 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}