import React, { createContext, useContext, useReducer, ReactNode } from 'react';

// Types
interface Question {
  id: string;
  type: 'text' | 'select';
  question: string;
  options?: string[];
  answer?: string;
}

interface Exam {
  id: string;
  examTitle: string;
  questions: Question[];
}

interface ExamState {
  exam: Exam;
  currentQuestionIndex: number;
  answers: Record<string, string>;
  isSubmitted: boolean;
  timeRemaining?: number;
}

// Action Types
type ExamAction =
  | { type: 'SET_EXAM'; payload: Exam }
  | { type: 'NAVIGATE_TO_QUESTION'; payload: number }
  | { type: 'NEXT_QUESTION' }
  | { type: 'PREVIOUS_QUESTION' }
  | { type: 'SET_ANSWER'; payload: { questionId: string; answer: string } }
  | { type: 'SAVE_AND_NEXT' }
  | { type: 'SAVE_AND_PREVIOUS' }
  | { type: 'SUBMIT_EXAM' }
  | { type: 'SET_TIME_REMAINING'; payload: number };

// Initial State
const initialState: ExamState = {
  exam: {
    id: '',
    examTitle: '',
    questions: []
  },
  currentQuestionIndex: 0,
  answers: {},
  isSubmitted: false,
  timeRemaining: undefined 
};

// Reducer
const examReducer = (state: ExamState, action: ExamAction): ExamState => {
  switch (action.type) {
    case 'SET_EXAM':
      return {
        ...state,
        exam: action.payload,
        answers: {},
        currentQuestionIndex: 0,
        isSubmitted: false
      };

    case 'NAVIGATE_TO_QUESTION':
      return {
        ...state,
        currentQuestionIndex: Math.max(0, Math.min(action.payload, state.exam.questions.length - 1))
      };

    case 'NEXT_QUESTION':
      return {
        ...state,
        currentQuestionIndex: Math.min(state.currentQuestionIndex + 1, state.exam.questions.length - 1)
      };

    case 'PREVIOUS_QUESTION':
      return {
        ...state,
        currentQuestionIndex: Math.max(state.currentQuestionIndex - 1, 0)
      };

    case 'SET_ANSWER':
      return {
        ...state,
        answers: {
          ...state.answers,
          [action.payload.questionId]: action.payload.answer
        }
      };

    case 'SAVE_AND_NEXT':
      return {
        ...state,
        currentQuestionIndex: Math.min(state.currentQuestionIndex + 1, state.exam.questions.length - 1)
      };

    case 'SAVE_AND_PREVIOUS':
      return {
        ...state,
        currentQuestionIndex: Math.max(state.currentQuestionIndex - 1, 0)
      };

    case 'SUBMIT_EXAM':
      return {
        ...state,
        isSubmitted: true
      };

    case 'SET_TIME_REMAINING':
      return {
        ...state,
        timeRemaining: action.payload
      };

    default:
      return state;
  }
};

// Context
interface ExamContextType {
  state: ExamState;
  dispatch: React.Dispatch<ExamAction>;
  // Helper functions
  setExam: (exam: Exam) => void;
  navigateToQuestion: (index: number) => void;
  nextQuestion: () => void;
  previousQuestion: () => void;
  setAnswer: (questionId: string, answer: string) => void;
  saveAndNext: () => void;
  saveAndPrevious: () => void;
  submitExam: () => void;
  getCurrentQuestion: () => Question | null;
  getQuestionAnswer: (questionId: string) => string | undefined;
  isQuestionAnswered: (questionId: string) => boolean;
  getAnsweredQuestionsCount: () => number;
  getProgress: () => number;
  canGoNext: () => boolean;
  canGoPrevious: () => boolean;
  // Timer functions
  setTimeRemaining: (seconds: number) => void;
  formatTime: (seconds: number) => { minutes: number; seconds: number; display: string };
  isTimeWarning: () => boolean;
  isTimeCritical: () => boolean;
}

const ExamContext = createContext<ExamContextType | undefined>(undefined);

// Provider Component
interface ExamProviderProps {
  children: ReactNode;
  initialExam?: Exam;
}

export const ExamProvider: React.FC<ExamProviderProps> = ({ children, initialExam }) => {
  const [state, dispatch] = useReducer(examReducer, {
    ...initialState,
    exam: initialExam || initialState.exam
  });

  // Helper functions
  const setExam = (exam: Exam) => {
    dispatch({ type: 'SET_EXAM', payload: exam });
  };

  const navigateToQuestion = (index: number) => {
    dispatch({ type: 'NAVIGATE_TO_QUESTION', payload: index });
  };

  const nextQuestion = () => {
    dispatch({ type: 'NEXT_QUESTION' });
  };

  const previousQuestion = () => {
    dispatch({ type: 'PREVIOUS_QUESTION' });
  };

  const setAnswer = (questionId: string, answer: string) => {
    dispatch({ type: 'SET_ANSWER', payload: { questionId, answer } });
  };

  const saveAndNext = () => {
    dispatch({ type: 'SAVE_AND_NEXT' });
  };

  const saveAndPrevious = () => {
    dispatch({ type: 'SAVE_AND_PREVIOUS' });
  };

  const submitExam = () => {
    dispatch({ type: 'SUBMIT_EXAM' });
  };

  const getCurrentQuestion = (): Question | null => {
    if (state.exam.questions.length === 0) return null;
    return state.exam.questions[state.currentQuestionIndex] || null;
  };

  const getQuestionAnswer = (questionId: string): string | undefined => {
    return state.answers[questionId];
  };

  const isQuestionAnswered = (questionId: string): boolean => {
    return !!state.answers[questionId];
  };

  const getAnsweredQuestionsCount = (): number => {
    return Object.keys(state.answers).length;
  };

  const getProgress = (): number => {
    if (state.exam.questions.length === 0) return 0;
    return (getAnsweredQuestionsCount() / state.exam.questions.length) * 100;
  };

  const canGoNext = (): boolean => {
    return state.currentQuestionIndex < state.exam.questions.length - 1;
  };

  const canGoPrevious = (): boolean => {
    return state.currentQuestionIndex > 0;
  };

  // Timer functions
  const setTimeRemaining = (seconds: number) => {
    dispatch({ type: 'SET_TIME_REMAINING', payload: seconds });
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const display = `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    return { minutes, seconds: remainingSeconds, display };
  };

  const isTimeWarning = (): boolean => {
    if (!state.timeRemaining) return false;
    return state.timeRemaining <= 300; // 5 minutes or less
  };

  const isTimeCritical = (): boolean => {
    if (!state.timeRemaining) return false;
    return state.timeRemaining <= 60; // 1 minute or less
  };

  const contextValue: ExamContextType = {
    state,
    dispatch,
    setExam,
    navigateToQuestion,
    nextQuestion,
    previousQuestion,
    setAnswer,
    saveAndNext,
    saveAndPrevious,
    submitExam,
    getCurrentQuestion,
    getQuestionAnswer,
    isQuestionAnswered,
    getAnsweredQuestionsCount,
    getProgress,
    canGoNext,
    canGoPrevious,
    setTimeRemaining,
    formatTime,
    isTimeWarning,
    isTimeCritical
  };

  return (
    <ExamContext.Provider value={contextValue}>
      {children}
    </ExamContext.Provider>
  );
};

// Custom Hook
export const useExam = (): ExamContextType => {
  const context = useContext(ExamContext);
  if (!context) {
    throw new Error('useExam must be used within an ExamProvider');
  }
  return context;
};

export default ExamContext;