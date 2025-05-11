import Image from 'next/image';
import Link from 'next/link';

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  imageUrl: string;
  lessonsCount: number;
}

export default function CourseCard({ id, title, description, category, level, imageUrl, lessonsCount }: CourseCardProps) {
  return (
    <Link href={`/courses/${id}`}>
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
        <div className="relative h-48 w-full bg-blue-100">
          {imageUrl && (
            <Image 
              src={imageUrl} 
              alt={title}
              fill
              className="object-cover"
            />
          )}
          <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
            {level}
          </div>
        </div>
        <div className="p-5 flex-grow flex flex-col">
          <div className="text-xs text-blue-600 font-semibold uppercase tracking-wide">
            {category}
          </div>
          <h3 className="mt-1 text-lg font-semibold text-gray-900">{title}</h3>
          <p className="mt-2 text-gray-600 text-sm flex-grow">{description}</p>
          <div className="mt-4 flex items-center text-sm text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            {lessonsCount} lessons
          </div>
        </div>
      </div>
    </Link>
  );
}