import Link from 'next/link';

const categories = [
  {
    id: 'mathematics',
    name: 'Mathematics',
    description: 'Develop problem-solving skills with interactive math challenges',
    icon: '➗',
    color: 'bg-blue-100 text-blue-800'
  },
  {
    id: 'computer-science',
    name: 'Computer Science',
    description: 'Learn algorithms, programming concepts, and computational thinking',
    icon: '💻',
    color: 'bg-purple-100 text-purple-800'
  },
  {
    id: 'science',
    name: 'Science',
    description: 'Explore physics, chemistry, and biology through interactive lessons',
    icon: '🔬',
    color: 'bg-green-100 text-green-800'
  },
  {
    id: 'daily-challenges',
    name: 'Daily Challenges',
    description: 'Solve a new problem every day to build your skills',
    icon: '🎯',
    color: 'bg-orange-100 text-orange-800'
  },
];

export default function CourseCategories() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Explore by Category</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Find the perfect learning path for your interests and goals
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link 
              href={`/categories/${category.id}`} 
              key={category.id}
              className="block group"
            >
              <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300 h-full">
                <div className={`${category.color} w-12 h-12 rounded-full flex items-center justify-center text-2xl mb-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {category.name}
                </h3>
                <p className="mt-2 text-gray-600">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}