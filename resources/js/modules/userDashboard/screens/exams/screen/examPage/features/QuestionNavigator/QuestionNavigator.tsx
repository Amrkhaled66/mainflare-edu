// QuestionNavigator.tsx - Updated to use ExamContext
import { useExam } from '../../context/ExamContext';

const QuestionNavigator = () => {
    const { state, navigateToQuestion, isQuestionAnswered } = useExam();
    const { exam, currentQuestionIndex } = state;

    return (
        <div className="h-fit lg:w-[30%] space-y-6 rounded-3xl border border-stroke bg-white p-6">
            <p className="border-b border-b-stroke pb-3 text-lg font-semibold">التنقل بين الاسئلة</p>
            <div className="space-y-4">
                <div className="grid grid-cols-6 gap-3">
                    {exam.questions.map((question: any, index: number) => (
                        <button 
                            key={question.id}
                            onClick={() => navigateToQuestion(index)}
                            className={`flex-center bg-mainColor-100 animate size-8 rounded-full transition-colors ${
                                currentQuestionIndex === index
                                    ? '!bg-mainColor text-white'
                                    : isQuestionAnswered(question.id)
                                    ? 'border-mainColor border-2'
                                    : 'bg-mainColor-100 hover:bg-mainColor hover:text-white'
                            }`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
                {/* <p className="text-xs text-wrap text-red-600">
                    خلي بلاك, التنقل بين الاسئلة مش بيحفظ الاجابت لازم تضغط علي حفظ واذهب للتالي لحفظ الأسئلة
                </p> */}
            </div>
        </div>
    );
};
export default QuestionNavigator;
