import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { courses } from '@/data/courseData';
import Link from 'next/link';

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main>
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold">Courses</h1>
            <p className="mt-4 text-xl text-blue-100">
              Explore our interactive courses designed to develop your problem-solving skills
            </p>
          </div>
        </div>
        
        {/* Course List */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 gap-8">
            {courses.map((course) => (
              <Link 
                href={`/courses/${course.id}`} 
                key={course.id}
                className="block bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6 flex items-start">
                  <div className={`${course.color} w-16 h-16 rounded-lg flex items-center justify-center text-3xl flex-shrink-0 mr-6`}>
                    {course.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{course.title}</h2>
                    <p className="mt-2 text-gray-600">{course.description}</p>
                    <div className="mt-4 flex items-center text-sm text-blue-600 font-medium">
                      <span>Explore course</span>
                      <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}