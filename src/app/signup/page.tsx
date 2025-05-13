'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function SignupPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({
    goal: '',
    focus: '',
    topic: '',
    mathLevel: '',
    dailyGoal: '',
    learningTime: '',
  });

  const handleGoalSelection = (goal: string) => {
    setUserData({ ...userData, goal });
    setStep(2);
  };

  const handleFocusSelection = (focus: string) => {
    setUserData({ ...userData, focus });
    setStep(3);
  };

  const handleTopicSelection = (topic: string) => {
    setUserData({ ...userData, topic });
    if (topic === 'Math') {
      setStep(5);
    } else {
      setStep(6);
    }
  };

  const handleMathLevelSelection = (mathLevel: string) => {
    setUserData({ ...userData, mathLevel });
    setStep(6);
  };

  const handleDailyGoalSelection = (dailyGoal: string) => {
    setUserData({ ...userData, dailyGoal });
    setStep(7);
  };

  const handleLearningTimeSelection = (learningTime: string) => {
    setUserData({ ...userData, learningTime });
    setStep(8);
  };

  const handleCreateProfile = () => {
    // Here you would typically send the userData to your backend
    console.log('User data:', userData);
    // Redirect to the first lesson or dashboard
    router.push('/home');
  };

  const handleTryLesson = () => {
    // Redirect to a sample lesson based on user's selections
    router.push('/courses');
  };

  const handleBackButton = () => {
    if (step > 1) {
      // Handle special case for math topic selection
      if (step === 6 && userData.topic === 'Math') {
        setStep(5);
      } else if (step === 5) {
        setStep(3);
      } else {
        setStep(step - 1);
      }
    } else {
      // If at first step, go back to previous page
      router.back();
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Let's build a learning path just for you.</h2>
            <h3 className="text-xl mb-4 text-gray-900">What's your top goal?</h3>
            <div className="grid grid-cols-1 gap-3 w-full max-w-md">
              {['Professional growth', 'Staying sharp', 'Excelling in school', 'Helping my child learn', 'Helping my students learn', 'Something else'].map((goal) => (
                <button
                  key={goal}
                  className="bg-white border border-gray-300 rounded-lg p-4 hover:bg-gray-50 transition-colors text-left text-gray-900"
                  onClick={() => handleGoalSelection(goal)}
                >
                  {goal}
                </button>
              ))}
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">What do you want to focus on?</h2>
            <div className="grid grid-cols-1 gap-3 w-full max-w-md">
              {['Learning specific skills', 'Following my curiosity', 'Building my problem-solving skills', 'Brushing up on the basics', 'Something else'].map((focus) => (
                <button
                  key={focus}
                  className="bg-white border border-gray-300 rounded-lg p-4 hover:bg-gray-50 transition-colors text-left text-gray-900"
                  onClick={() => handleFocusSelection(focus)}
                >
                  {focus}
                </button>
              ))}
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">You'll fit right in</h2>
            <p className="text-lg mb-6 text-gray-900">Millions of people use Brilliant to reach their learning goals.</p>
            <h3 className="text-xl mb-4 text-gray-900">Which topic do you want to explore first?</h3>
            <div className="grid grid-cols-1 gap-3 w-full max-w-md">
              {['Math', 'Science & Engineering', 'Computer Science & Programming', 'Data Science & Data Analysis'].map((topic) => (
                <button
                  key={topic}
                  className="bg-white border border-gray-300 rounded-lg p-4 hover:bg-gray-50 transition-colors text-left text-gray-900"
                  onClick={() => handleTopicSelection(topic)}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>
        );
      
      case 5:
        return (
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">What's your math comfort level?</h2>
            <div className="grid grid-cols-1 gap-3 w-full max-w-md">
              <button
                className="bg-white border border-gray-300 rounded-lg p-4 hover:bg-gray-50 transition-colors text-left"
                onClick={() => handleMathLevelSelection('Arithmetic')}
              >
                <p className="font-bold text-gray-900">Arithmetic</p>
                <p className="text-gray-900">I want to start from the basics.</p>
              </button>
              <button
                className="bg-white border border-gray-300 rounded-lg p-4 hover:bg-gray-50 transition-colors text-left"
                onClick={() => handleMathLevelSelection('Basic Algebra')}
              >
                <p className="font-bold text-gray-900">Basic Algebra</p>
                <p className="text-gray-900">I can use variables and solve equations.</p>
              </button>
              <button
                className="bg-white border border-gray-300 rounded-lg p-4 hover:bg-gray-50 transition-colors text-left"
                onClick={() => handleMathLevelSelection('Algebra')}
              >
                <p className="font-bold text-gray-900">Algebra</p>
                <p className="text-gray-900">I can make and interpret graphs of equations.</p>
              </button>
              <button
                className="bg-white border border-gray-300 rounded-lg p-4 hover:bg-gray-50 transition-colors text-left"
                onClick={() => handleMathLevelSelection('Calculus')}
              >
                <p className="font-bold text-gray-900">Calculus</p>
                <p className="text-gray-900">I understand derivatives and integrals.</p>
              </button>
            </div>
          </div>
        );
      
      case 6:
        return (
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Learn 6x more effectively</h2>
            <p className="text-lg mb-6 text-gray-900">Brilliant's interactive lessons start at your level and help you advance. Interactive learning has been shown to be 6x more effective than watching lecture videos.</p>
            <h3 className="text-xl mb-4 text-gray-900">What's your daily learning goal?</h3>
            <div className="grid grid-cols-2 gap-3 w-full max-w-md">
              {['5 min', '10 min', '15 min', '20 min'].map((goal) => (
                <button
                  key={goal}
                  className="bg-white border border-gray-300 rounded-lg p-4 hover:bg-gray-50 transition-colors text-center text-gray-900"
                  onClick={() => handleDailyGoalSelection(goal)}
                >
                  {goal}
                </button>
              ))}
            </div>
          </div>
        );
      
      case 7:
        return (
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">How will learning fit into your day?</h2>
            <div className="grid grid-cols-1 gap-3 w-full max-w-md">
              {[
                'Morning routine during breakfast or my commute',
                'Quick break during lunch or between activities',
                'Nightly ritual after dinner or while in bed',
                'Another time in my day'
              ].map((time) => (
                <button
                  key={time}
                  className="bg-white border border-gray-300 rounded-lg p-4 hover:bg-gray-50 transition-colors text-left text-gray-900"
                  onClick={() => handleLearningTimeSelection(time)}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        );
      
      case 8:
        return (
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Smarter every day</h2>
            <p className="text-lg mb-6 text-gray-900">Brilliant keeps you on track—with lessons, puzzles, and daily motivation designed for you.</p>
            
            <div className="bg-white border border-gray-300 rounded-lg p-6 mb-8 w-full max-w-md">
              <p className="italic mb-4 text-gray-900">"If you like bending your mind over interesting problems or want to explore a rich world full of beautiful mysteries, this app will be a sure thing for you."</p>
              <p className="font-bold text-gray-900">- Bob V.</p>
            </div>
            
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Your personalized learning path is ready.</h2>
            
            <div className="flex flex-col gap-4 w-full max-w-md">
              <button
                className="bg-blue-600 text-white rounded-lg p-4 hover:bg-blue-700 transition-colors"
                onClick={handleCreateProfile}
              >
                Create a free profile
              </button>
              <button
                className="bg-white border border-gray-300 rounded-lg p-4 hover:bg-gray-50 transition-colors text-gray-900"
                onClick={handleTryLesson}
              >
                Try a lesson first
              </button>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-50 flex flex-col">
      <header className="bg-white shadow-sm p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Back button with arrow icon */}
          <button 
            onClick={handleBackButton}
            className="flex items-center text-gray-900"
            aria-label="Go back"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div>
            {step < 8 && (
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-900">Step {step} of 7</span>
                <div className="w-24 h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-600 transition-all duration-300" 
                    style={{ width: `${(step / 7) * 100}%` }}
                  ></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
      
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="container mx-auto max-w-2xl">
          {renderStep()}
        </div>
      </main>
      
      <footer className="bg-white p-4 border-t">
        <div className="container mx-auto text-center text-sm text-gray-900">
          © {new Date().getFullYear()} Brilliant Learning. All rights reserved.
        </div>
      </footer>
    </div>
  );
}