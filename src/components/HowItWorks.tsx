import Image from 'next/image';

const steps = [
  {
    id: 1,
    title: 'Interactive Learning',
    description: 'Learn concepts through interactive challenges and visualizations that make complex ideas intuitive.',
    icon: '🧩',
  },
  {
    id: 2,
    title: 'Problem Solving',
    description: 'Apply what you\'ve learned by solving increasingly difficult problems that build critical thinking skills.',
    icon: '🔍',
  },
  {
    id: 3,
    title: 'Track Progress',
    description: 'Monitor your growth with detailed analytics and achievements as you master new concepts.',
    icon: '📈',
  },
  {
    id: 4,
    title: 'Join a Community',
    description: 'Connect with other learners, share insights, and participate in learning challenges.',
    icon: '👥',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">How Brilliant Works</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Our unique approach to learning helps you build deep understanding through active problem-solving
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="text-center">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-3xl mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-blue-50 rounded-xl p-8 md:p-12">
          <div className="md:flex items-center">
            <div className="md:w-2/3 md:pr-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Learning by Doing</h3>
              <p className="text-gray-700 mb-6">
                Research shows that active learning is far more effective than passive consumption of content. 
                Our interactive approach encourages you to explore concepts hands-on, leading to deeper understanding 
                and better retention.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white px-4 py-2 rounded-full text-sm font-medium text-blue-600 shadow-sm">
                  90% higher completion rates
                </div>
                <div className="bg-white px-4 py-2 rounded-full text-sm font-medium text-blue-600 shadow-sm">
                  3x better retention
                </div>
                <div className="bg-white px-4 py-2 rounded-full text-sm font-medium text-blue-600 shadow-sm">
                  Builds problem-solving skills
                </div>
              </div>
            </div>
            <div className="mt-8 md:mt-0 md:w-1/3 flex justify-center">
              <div className="w-40 h-40 bg-blue-200 rounded-full flex items-center justify-center text-6xl">
                💡
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}