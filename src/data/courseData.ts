// Sample course data with roadmaps and quiz questions
export const courses = [
  {
    id: 'basic-mathematics',
    title: 'Basic Mathematics',
    description: 'Learn fundamental math concepts, from arithmetic to algebra.',
    icon: '🧮',
    color: 'bg-blue-100 text-blue-800',
    roadmap: [
      {
        id: 'introduction',
        title: 'Introduction to Mathematics',
        type: 'lesson',
        description: 'An overview of the fundamental concepts in mathematics.'
      },
      {
        id: 'number-operations',
        title: 'Number Operations',
        type: 'quiz',
        description: 'Master basic arithmetic operations with integers.'
      },
      {
        id: 'fractions-decimals',
        title: 'Fractions and Decimals',
        type: 'quiz',
        description: 'Learn to work with fractions and convert between fractions and decimals.'
      },
      {
        id: 'linear-equations',
        title: 'Linear Equations',
        type: 'quiz',
        description: 'Solve basic linear equations and understand their applications.'
      },
      {
        id: 'final-quiz',
        title: 'Final Quiz',
        type: 'quiz',
        description: 'Test your knowledge of all the topics covered in this course.'
      }
    ],
    quizzes: {
      'number-operations': {
        title: 'Number Operations Quiz',
        questions: [
          {
            id: 1,
            question: 'What is the result of 7 + 5?',
            options: [
              { id: 'A', text: '10' },
              { id: 'B', text: '11' },
              { id: 'C', text: '12' },
              { id: 'D', text: '13' }
            ],
            correctAnswer: 'C',
            explanation: 'The correct answer is C. 12, because 7 + 5 = 12. Addition combines two numbers to find their sum.'
          },
          {
            id: 2,
            question: 'What is the result of 15 - 8?',
            options: [
              { id: 'A', text: '5' },
              { id: 'B', text: '6' },
              { id: 'C', text: '7' },
              { id: 'D', text: '8' }
            ],
            correctAnswer: 'C',
            explanation: 'The correct answer is C. 7, because 15 - 8 = 7. Subtraction finds the difference between two numbers.'
          },
          {
            id: 3,
            question: 'What is the result of 6 × 4?',
            options: [
              { id: 'A', text: '18' },
              { id: 'B', text: '22' },
              { id: 'C', text: '24' },
              { id: 'D', text: '28' }
            ],
            correctAnswer: 'C',
            explanation: 'The correct answer is C. 24, because 6 × 4 = 24. Multiplication is repeated addition: 6 added 4 times or 4 added 6 times.'
          }
        ]
      },
      'fractions-decimals': {
        title: 'Fractions and Decimals Quiz',
        questions: [
          {
            id: 1,
            question: 'What is 1/4 as a decimal?',
            options: [
              { id: 'A', text: '0.25' },
              { id: 'B', text: '0.4' },
              { id: 'C', text: '0.5' },
              { id: 'D', text: '0.75' }
            ],
            correctAnswer: 'A',
            explanation: 'The correct answer is A. 0.25. To convert a fraction to a decimal, divide the numerator by the denominator: 1 ÷ 4 = 0.25'
          },
          {
            id: 2,
            question: 'Which fraction is equivalent to 0.75?',
            options: [
              { id: 'A', text: '1/4' },
              { id: 'B', text: '3/4' },
              { id: 'C', text: '1/3' },
              { id: 'D', text: '2/3' }
            ],
            correctAnswer: 'B',
            explanation: 'The correct answer is B. 3/4. The decimal 0.75 can be written as 75/100, which simplifies to 3/4.'
          }
        ]
      },
      'linear-equations': {
        title: 'Linear Equations Quiz',
        questions: [
          {
            id: 1,
            question: 'Solve for x: 2x + 5 = 13',
            options: [
              { id: 'A', text: 'x = 3' },
              { id: 'B', text: 'x = 4' },
              { id: 'C', text: 'x = 5' },
              { id: 'D', text: 'x = 6' }
            ],
            correctAnswer: 'B',
            explanation: 'The correct answer is B. x = 4. To solve, subtract 5 from both sides: 2x = 8, then divide both sides by 2: x = 4.'
          }
        ]
      },
      'final-quiz': {
        title: 'Basic Mathematics Final Quiz',
        questions: [
          {
            id: 1,
            question: 'What is the value of 3² + 4²?',
            options: [
              { id: 'A', text: '7' },
              { id: 'B', text: '25' },
              { id: 'C', text: '49' },
              { id: 'D', text: '81' }
            ],
            correctAnswer: 'B',
            explanation: 'The correct answer is B. 25. 3² = 9 and 4² = 16, so 3² + 4² = 9 + 16 = 25.'
          }
        ]
      }
    }
  },
  {
    id: 'logic-reasoning',
    title: 'Logic & Reasoning',
    description: 'Sharpen your logical thinking and critical reasoning skills through interactive problems.',
    icon: '🧩',
    color: 'bg-purple-100 text-purple-800',
    roadmap: [
      {
        id: 'introduction',
        title: 'Introduction to Logic',
        type: 'lesson',
        description: 'Learn the foundations of logical reasoning.'
      },
      {
        id: 'deductive-reasoning',
        title: 'Deductive Reasoning',
        type: 'quiz',
        description: 'Practice drawing conclusions from given premises.'
      },
      {
        id: 'logical-fallacies',
        title: 'Logical Fallacies',
        type: 'quiz',
        description: 'Identify common errors in reasoning.'
      },
      {
        id: 'puzzles',
        title: 'Logic Puzzles',
        type: 'quiz',
        description: 'Solve challenging puzzles that test your logical thinking.'
      },
      {
        id: 'final-quiz',
        title: 'Final Quiz',
        type: 'quiz',
        description: 'Test your mastery of logical reasoning concepts.'
      }
    ],
    quizzes: {
      'deductive-reasoning': {
        title: 'Deductive Reasoning Quiz',
        questions: [
          {
            id: 1,
            question: 'All mammals are warm-blooded. Whales are mammals. What can we conclude?',
            options: [
              { id: 'A', text: 'All warm-blooded animals are mammals' },
              { id: 'B', text: 'Whales are warm-blooded' },
              { id: 'C', text: 'Some mammals are not warm-blooded' },
              { id: 'D', text: 'No conclusion can be drawn' }
            ],
            correctAnswer: 'B',
            explanation: 'The correct answer is B. Whales are warm-blooded. Since all mammals are warm-blooded and whales are mammals, it follows that whales must be warm-blooded. This is an example of a syllogism, a form of deductive reasoning.'
          }
        ]
      }
    }
  },
  {
    id: 'basic-physics',
    title: 'Basic Physics',
    description: 'Explore the laws of physics with practical examples.',
    icon: '🔭',
    color: 'bg-green-100 text-green-800',
    roadmap: [
      {
        id: 'introduction',
        title: 'Introduction to Physics',
        type: 'lesson',
        description: 'An overview of the fundamental concepts in physics.'
      },
      {
        id: 'motion',
        title: 'Motion and Forces',
        type: 'quiz',
        description: 'Learn about Newton\'s laws and how objects move.'
      },
      {
        id: 'energy',
        title: 'Energy and Work',
        type: 'quiz',
        description: 'Understand different forms of energy and how they transform.'
      },
      {
        id: 'waves',
        title: 'Waves and Sound',
        type: 'quiz',
        description: 'Explore the properties of waves and how sound works.'
      },
      {
        id: 'final-quiz',
        title: 'Final Quiz',
        type: 'quiz',
        description: 'Test your knowledge of basic physics concepts.'
      }
    ],
    quizzes: {
      'motion': {
        title: 'Motion and Forces Quiz',
        questions: [
          {
            id: 1,
            question: 'According to Newton\'s First Law, an object in motion will:',
            options: [
              { id: 'A', text: 'Always slow down due to gravity' },
              { id: 'B', text: 'Accelerate in the direction of motion' },
              { id: 'C', text: 'Stay in motion with the same speed and direction unless acted upon by a force' },
              { id: 'D', text: 'Change direction but maintain the same speed' }
            ],
            correctAnswer: 'C',
            explanation: 'The correct answer is C. Newton\'s First Law (Law of Inertia) states that an object at rest stays at rest, and an object in motion stays in motion with the same speed and direction unless acted upon by an external force.'
          }
        ]
      }
    }
  }
];

// Helper function to get a course by ID
export function getCourseById(id: string) {
  return courses.find(course => course.id === id) || null;
}

// Helper function to get a quiz by course ID and module ID
export function getQuizByIds(courseId: string, moduleId: string) {
  const course = getCourseById(courseId);
  if (!course) return null;
  
  return course.quizzes[moduleId as keyof typeof course.quizzes] || null;
}