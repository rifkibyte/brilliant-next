'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getCourseById, getQuizByIds } from '@/data/courseData';
import Link from 'next/link';


export default function QuizPage({ params }: any) {
  
  const router = useRouter();
  const course = getCourseById(params.courseId);
  const quiz = getQuizByIds(params.courseId, params.moduleId);
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [completedQuestions, setCompletedQuestions] = useState<number[]>([]);
  
  if (!course || !quiz) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Quiz not found</h1>
          <p className="mt-4 text-gray-600">The quiz you're looking for doesn't exist or has been removed.</p>
          <Link href="/courses" className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-medium">
            Return to Courses
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
  
  const currentQuestion = quiz.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === quiz.questions.length - 1;
  const isCorrect = selectedOption === currentQuestion.correctAnswer;
  
  const handleOptionSelect = (optionId: string) => {
    if (showExplanation) return; // Prevent changing answer after explanation is shown
    
    setSelectedOption(optionId);
    setShowExplanation(true);
    
    if (!completedQuestions.includes(currentQuestion.id)) {
      setCompletedQuestions([...completedQuestions, currentQuestion.id]);
    }
  };
  
  const handleNextQuestion = () => {
    if (isLastQuestion) {
      // If it's the last question, go back to the course page
      router.push(`/courses/${params.courseId}`);
    } else {
      // Move to the next question
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    }
  };
  
  const moduleTitle = course.roadmap.find(module => module.id === params.moduleId)?.title || quiz.title;
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="pb-16">
        {/* Quiz Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-8">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              href={`/courses/${params.courseId}`}
              className="inline-flex items-center text-blue-100 hover:text-white mb-4"
            >
              <svg className="mr-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Course
            </Link>
            <h1 className="text-2xl font-bold">{moduleTitle}</h1>
            <div className="mt-4 bg-white/10 rounded-full h-2">
              <div 
                className="bg-white h-2 rounded-full" 
                style={{ width: `${(completedQuestions.length / quiz.questions.length) * 100}%` }}
              />
            </div>
            <div className="mt-2 text-sm text-blue-100">
              Question {currentQuestionIndex + 1} of {quiz.questions.length}
            </div>
          </div>
        </div>
        
        {/* Quiz Content */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-medium text-gray-900 mb-6">
                {currentQuestion.question}
              </h2>
              
              <div className="space-y-3">
                {currentQuestion.options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleOptionSelect(option.id)}
                    disabled={showExplanation}
                    className={`w-full text-left p-4 rounded-lg border ${
                      selectedOption === option.id
                        ? selectedOption === currentQuestion.correctAnswer
                          ? 'border-green-500 bg-green-50'
                          : 'border-red-500 bg-red-50'
                        : showExplanation && option.id === currentQuestion.correctAnswer
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-200 hover:border-blue-500 hover:bg-blue-50'
                    } transition-colors`}
                  >
                    <div className="flex items-start">
                      <div className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center mr-3 ${
                        selectedOption === option.id
                          ? selectedOption === currentQuestion.correctAnswer
                            ? 'bg-green-500 text-white'
                            : 'bg-red-500 text-white'
                          : showExplanation && option.id === currentQuestion.correctAnswer
                          ? 'bg-green-500 text-white'
                          : 'bg-gray-200 text-gray-700'
                      }`}>
                        {option.id}
                      </div>
                      <span>{option.text}</span>
                    </div>
                  </button>
                ))}
              </div>
              
              {showExplanation && (
                <div className={`mt-8 p-4 rounded-lg ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-blue-50 border border-blue-200'}`}>
                  <div className="flex items-start">
                    <div className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center mr-3 ${isCorrect ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'}`}>
                      {isCorrect ? '✓' : 'i'}
                    </div>
                    <div>
                      <h3 className={`font-medium ${isCorrect ? 'text-green-800' : 'text-blue-800'}`}>
                        {isCorrect ? 'Correct!' : 'Explanation'}
                      </h3>
                      <p className={`mt-1 ${isCorrect ? 'text-green-700' : 'text-blue-700'}`}>
                        {currentQuestion.explanation}
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              {showExplanation && (
                <div className="mt-8 flex justify-end">
                  <button
                    onClick={handleNextQuestion}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium flex items-center"
                  >
                    {isLastQuestion ? 'Finish Quiz' : 'Next Question'}
                    <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}