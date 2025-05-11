import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

// This would normally come from an API or database
const getCourseData = (id: string) => {
  const courses = {
    'logic-foundations': {
      title: 'Logic Foundations',
      description: 'Learn how to analyze arguments and construct mathematical proofs through interactive puzzles.',
      category: 'Mathematics',
      level: 'Beginner',
      imageUrl: '/images/logic.jpg',
      lessonsCount: 24,
      completionTime: '8 weeks',
      rating: 4.8,
      reviewsCount: 1243,
      overview: 'Logic is the foundation of mathematical reasoning and a crucial tool for solving complex problems. In this course, you'll develop your logical thinking through interactive puzzles and challenges that gradually build your skills.',
      whatYouWillLearn: [
        'Understand the principles of logical reasoning',
        'Learn to identify and analyze logical fallacies',
        'Master the art of constructing mathematical proofs',
        'Apply logical reasoning to solve complex problems',
        'Develop critical thinking skills applicable across disciplines'
      ],
      lessons: [
        { id: 1, title: 'Introduction to Logic', type: 'Interactive Lesson', duration: '20 min' },
        { id: 2, title: 'Statements and Negations', type: 'Challenge', duration: '25 min' },
        { id: 3, title: 'Conditional Statements', type: 'Interactive Lesson', duration: '30 min' },
        { id: 4, title: 'Truth Tables', type: 'Problem Set', duration: '40 min' },
        { id: 5, title: 'Logical Equivalences', type: 'Interactive Lesson', duration: '35 min' },
        { id: 6, title: 'Direct Proofs', type: 'Challenge', duration: '45 min' }
      ]
    },
    'quantum-computing': {
      title: 'Quantum Computing',
      description: 'Explore the fundamentals of quantum mechanics and how they enable quantum computation.',
      category: 'Computer Science',
      level: 'Advanced',
      imageUrl: '/images/quantum.jpg',
      lessonsCount: 32,
      completionTime: '12 weeks',
      rating: 4.9,
      reviewsCount: 876,
      overview: 'Quantum computing represents a paradigm shift in computational capabilities. This course introduces the principles of quantum mechanics that make quantum computing possible and explores how quantum algorithms can solve problems that are intractable for classical computers.',
      whatYouWillLearn: [
        'Understand the fundamental principles of quantum mechanics',
        'Learn about qubits and quantum superposition',
        'Explore quantum gates and circuits',
        'Study famous quantum algorithms like Shor\'s and Grover\'s algorithms',
        'Understand the potential and limitations of quantum computing'
      ],
      lessons: [
        { id: 1, title: 'Classical vs Quantum Computing', type: 'Interactive Lesson', duration: '30 min' },
        { id: 2, title: 'Qubits and Superposition', type: 'Challenge', duration: '40 min' },
        { id: 3, title: 'Quantum Gates', type: 'Interactive Lesson', duration: '45 min' },
        { id: 4, title: 'Quantum Entanglement', type: 'Problem Set', duration: '50 min' },
        { id: 5, title: 'Quantum Algorithms', type: 'Interactive Lesson', duration: '60 min' },
        { id: 6, title: 'Quantum Computing Applications', type: 'Challenge', duration: '55 min' }
      ]
    }
    // Add more courses as needed
  };
  
  return courses[id as keyof typeof courses];
};

export default function CoursePage({ params }: { params: { id: string } }) {
  const course = getCourseData(params.id);
  
  if (!course) {
    return (
      <div>
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Course not found</h1>
          <p className="mt-4 text-gray-600">The course you're looking for doesn't exist or has been removed.</p>
          <Link href="/" className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-medium">
            Return to Homepage
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-2/3">
              <span className="text-blue-200 font-medium">{course.category} • {course.level}</span>
              <h1 className="text-4xl font-bold mt-2">{course.title}</h1>
              <p className="mt-4 text-xl text-blue-100">{course.description}</p>
              
              <div className="mt-6 flex items-center">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-5 h-5 ${i < Math.floor(course.rating) ? "text-yellow-300" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="ml-2 text-white">{course.rating} ({course.reviewsCount} reviews)</p>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-medium">
                  Start Learning
                </button>
                <button className="bg-transparent border border-white text-white hover:bg-white/10 px-6 py-3 rounded-md font-medium">
                  Preview Course
                </button>
              </div>
            </div>
            
            <div className="mt-10 md:mt-0 md:w-1/3">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-xl">
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold">{course.lessonsCount}</div>
                  <div className="text-blue-200">Interactive Lessons</div>
                </div>
                <div className="flex justify-between text-center">
                  <div>
                    <div className="text-2xl font-bold">{course.completionTime}</div>
                    <div className="text-blue-200">Completion Time</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">All Levels</div>
                    <div className="text-blue-200">Accessibility</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="md:flex md:gap-12">
          <div className="md:w-2/3">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Course Overview</h2>
              <p className="text-gray-700">{course.overview}</p>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What You'll Learn</h2>
              <ul className="space-y-3">
                {course.whatYouWillLearn.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Course Content</h2>
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                {course.lessons.map((lesson, index) => (
                  <div key={lesson.id} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} p-4 flex flex-wrap items-center justify-between`}>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-medium mr-4">
                        {lesson.id}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{lesson.title}</h3>
                        <p className="text-sm text-gray-500">{lesson.type} • {lesson.duration}</p>
                      </div>
                    </div>
                    <button className="mt-2 sm:mt-0 text-blue-600 hover:text-blue-800 font-medium text-sm">
                      Preview
                    </button>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <p className="text-gray-600">And {course.lessonsCount - 6} more lessons...</p>
              </div>
            </section>
          </div>
          
          <div className="mt-12 md:mt-0 md:w-1/3">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ready to start learning?</h3>
              <p className="text-gray-600 mb-6">Join millions of learners and start {course.title} today!</p>
              <button className="w-full bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium mb-4">
                Start Course for Free
              </button>
              <div className="text-center text-sm text-gray-500">
                <p>No credit card required</p>
                <p>Full access to this course and all basic features</p>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-medium text-gray-900 mb-2">This course includes:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {course.lessonsCount} interactive lessons
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Hands-on challenges
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Progress tracking
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Community discussion
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
