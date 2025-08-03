import { useEffect, useRef } from 'react';
import { useExam } from '../context/ExamContext';

interface UseExamTimerProps {
  initialTimeInMinutes?: number;
  onTimeUp?: () => void;
  autoStart?: boolean;
}

export const useExamTimer = ({ 
  initialTimeInMinutes = 30, 
  onTimeUp,
  autoStart = true 
}: UseExamTimerProps = {}) => {
  const { state, setTimeRemaining, submitExam } = useExam();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const { timeRemaining } = state;

  // Initialize timer if not set
  useEffect(() => {
    if (timeRemaining === undefined && autoStart) {
      setTimeRemaining(initialTimeInMinutes * 60); // Convert minutes to seconds
    }
  }, [initialTimeInMinutes, timeRemaining, setTimeRemaining, autoStart]);

  // Start the countdown
  useEffect(() => {
    if (timeRemaining !== undefined && timeRemaining > 0 && autoStart) {
      intervalRef.current = setInterval(() => {
        setTimeRemaining(timeRemaining - 1);
      }, 1000);

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, [timeRemaining, setTimeRemaining, autoStart]);

  // Handle time up
  useEffect(() => {
    if (timeRemaining === 0) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      
      if (onTimeUp) {
        onTimeUp();
      } else {
        // Auto submit exam when time is up
        submitExam();
      }
    }
  }, [timeRemaining, onTimeUp, submitExam]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const pauseTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const resumeTimer = () => {
    if (timeRemaining !== undefined && timeRemaining > 0 && !intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setTimeRemaining(timeRemaining - 1);
      }, 1000);
    }
  };

  const resetTimer = (newTimeInMinutes?: number) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    const timeToSet = newTimeInMinutes ? newTimeInMinutes * 60 : initialTimeInMinutes * 60;
    setTimeRemaining(timeToSet);
  };

  return {
    timeRemaining,
    pauseTimer,
    resumeTimer,
    resetTimer,
    isRunning: intervalRef.current !== null
  };
};