import { useExam } from '@/modules/userDashboard/screens/exams/screen/examPage/context/ExamContext';
import { Icon } from '@iconify/react/dist/iconify.js';
const QuestionAction = () => {
    const { saveAndNext, saveAndPrevious, canGoNext, canGoPrevious, submitExam, state } = useExam();
    const { currentQuestionIndex, exam } = state;
    const isLastQuestion = currentQuestionIndex === exam.questions.length - 1;

    return (
        <div className="flex justify-end items-center gap-3">
            <button
                onClick={saveAndPrevious}
                disabled={!canGoPrevious()}
                className="flex-center animate size-10 rounded-full border border-mainColor bg-mainColor text-white hover:bg-transparent hover:text-mainColor hover:scale-90"
            >
                <Icon icon="mdi:keyboard-arrow-right" width="24" height="24" />
            </button>

            {isLastQuestion ? (
                <button onClick={submitExam} className="btn animate w-[150px] h-10 bg-green-600 hover:brightness-95">
                    إنهاء الامتحان
                </button>
            ) : (
                <button
                    onClick={saveAndNext}
                    disabled={!canGoNext()}
                    className="flex-center animate size-10 rounded-full border border-mainColor bg-mainColor text-white hover:bg-transparent hover:text-mainColor hover:scale-90"
                >
                    <Icon icon="mdi:keyboard-arrow-left" width="24" height="24" />
                </button>
            )}
        </div>
    );
};

export default QuestionAction;
