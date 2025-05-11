import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getCourseById } from '@/data/courseData';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function CourseDetailPage({ params }: { params: { courseId: string } }) {
  const course = getCourseById(params.courseId);
  
  if (!course) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main>
        {/* Course Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-6">
              <div className={`${course.color} w-16 h-16 rounded-lg flex items-center justify-center text-3xl mr-6`}>
                {course.icon}
              </div>
              <div>
                <h1 className="text-4xl font-bold">{course.title}</h1>
                <p className="mt-2 text-xl text-blue-100">{course.description}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Course Roadmap */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Course Roadmap</h2>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <ul>
              {course.roadmap.map((module, index) => (
                <li key={module.id} className="border-b border-gray-200 last:border-b-0">
                  <Link 
                    href={module.type === 'quiz' ? `/courses/${course.id}/${module.id}` : '#'}
                    className={`block p-6 hover:bg-gray-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-medium mr-4">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-lg text-gray-900">{module.title}</h3>
                        <p className="text-gray-600 mt-1">{module.description}</p>
                      </div>
                      <div className="ml-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                          module.type === 'lesson' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                        }`}>
                          {module.type === 'lesson' ? 'Lesson' : 'Quiz'}
                        </span>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-8 text-center">
            <Link 
              href="/courses" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              <svg className="mr-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to All Courses
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}