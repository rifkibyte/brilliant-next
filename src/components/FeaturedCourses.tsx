import CourseCard from './CourseCard';

// Sample course data (in a real app, this would come from an API)
const featuredCourses = [
  {
    id: 'logic-foundations',
    title: 'Logic Foundations',
    description: 'Learn how to analyze arguments and construct mathematical proofs through interactive puzzles.',
    category: 'Mathematics',
    level: 'Beginner' as const,
    imageUrl: '/images/logic.jpg',
    lessonsCount: 24
  },
  {
    id: 'quantum-computing',
    title: 'Quantum Computing',
    description: 'Explore the fundamentals of quantum mechanics and how they enable quantum computation.',
    category: 'Computer Science',
    level: 'Advanced' as const,
    imageUrl: '/images/quantum.jpg',
    lessonsCount: 32
  },
  {
    id: 'probability',
    title: 'Probability',
    description: 'Develop your intuition for randomness and learn to quantify uncertainty.',
    category: 'Mathematics',
    level: 'Intermediate' as const,
    imageUrl: '/images/probability.jpg',
    lessonsCount: 28
  },
  {
    id: 'neural-networks',
    title: 'Neural Networks',
    description: 'Understand how neural networks learn patterns from data and make predictions.',
    category: 'Computer Science',
    level: 'Intermediate' as const,
    imageUrl: '/images/neural.jpg',
    lessonsCount: 36
  }
];

export default function FeaturedCourses() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Featured Courses</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our most popular interactive courses designed to develop your problem-solving skills
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredCourses.map((course) => (
            <CourseCard
              key={course.id}
              id={course.id}
              title={course.title}
              description={course.description}
              category={course.category}
              level={course.level}
              imageUrl={course.imageUrl}
              lessonsCount={course.lessonsCount}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="/courses" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            View all courses
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}