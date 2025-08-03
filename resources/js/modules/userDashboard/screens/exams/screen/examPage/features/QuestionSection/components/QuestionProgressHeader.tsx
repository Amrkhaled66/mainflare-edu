import { useExam } from '@/modules/userDashboard/screens/exams/screen/examPage/context/ExamContext';
import { useExamTimer } from '@/modules/userDashboard/screens/exams/screen/examPage/hooks/useExamTime';
import { Icon } from '@iconify/react/dist/iconify.js';

const QuestionProgressHeader = () => {
    const { state, formatTime, isTimeWarning, isTimeCritical } = useExam();
    const { exam, currentQuestionIndex, timeRemaining } = state;

    // Initialize timer with 30 minutes (1800 seconds)
    useExamTimer({ 
        initialTimeInMinutes: 30, 
        onTimeUp: () => {
            alert('انتهى الوقت! سيتم إرسال الامتحان تلقائياً.');
        }
    });

    const questionNumber = currentQuestionIndex + 1;
    const allquestions = exam.questions.length;
    
    // Format time display
    const timeDisplay = timeRemaining ? formatTime(timeRemaining) : { display: '00:00', minutes: 0, seconds: 0 };
    
    // Determine timer color based on remaining time
    const getTimerColor = () => {
        if (isTimeCritical()) return 'text-red-500';
        if (isTimeWarning()) return 'text-yellow-400';
        return 'text-red-400';
    };

    return (
        <div className="flex flex-col lg:flex-row gap-y-3 justify-between rounded-2xl bg-mainColor px-4 py-3 text-white">
            <span>
                السؤال رقم {questionNumber} من {allquestions}
            </span>
            <p className="flex items-center gap-x-2">
                <Icon 
                    icon="game-icons:sands-of-time" 
                    className={`size-6 ${isTimeCritical() ? 'animate-pulse' : ''}`} 
                />
                <p>
                    الوقت المتبقي: <span className={getTimerColor()}>{timeDisplay.display}</span>
                    {isTimeCritical() && (
                        <span className="ml-2 text-red-300 text-sm animate-pulse">
                            ⚠️ أقل من دقيقة!
                        </span>
                    )}
                </p>
            </p>
        </div>
    );
};

export default QuestionProgressHeader;