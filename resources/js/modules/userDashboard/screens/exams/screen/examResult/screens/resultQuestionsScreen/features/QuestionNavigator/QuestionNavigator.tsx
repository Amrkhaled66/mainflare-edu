import QuestionNavigatorFooterFooter from './components/QuestionNavigatorFooterFooter';

const QuestionNavigator = ({
    answers,
    navigateToQuestion,
    currentQuestionIndex,
    canGoPrevious,
    canGoNext,
}: {
    answers: any[];
    navigateToQuestion: (index: number) => void;
    currentQuestionIndex: number;
    canGoPrevious: boolean;
    canGoNext: boolean;
}) => {
    return (
        <div className="h-fit space-y-6 rounded-3xl border border-stroke bg-white p-6">
            <p className="border-b border-b-stroke pb-3 text-lg font-semibold">التنقل بين الاسئلة</p>
            <div className="space-y-4">
                <div className="grid grid-cols-6 gap-3">
                    {answers.map((answer: any, index: number) => {
                        const isTrue = answer.isCorrect === true;
                        return (
                            <button
                                key={answer.questionId}
                                onClick={() => navigateToQuestion(index)}
                                className={`flex-center animate size-8 rounded-full text-white transition-colors ${
                                    currentQuestionIndex === index ? 'bg-mainColor' : isTrue ? 'bg-greenColor' : 'bg-wrong'
                                }`}
                            >
                                {index + 1}
                            </button>
                        );
                    })}
                </div>
                <div className="border-t border-t-stroke pt-3">
                    <QuestionNavigatorFooterFooter
                        canGoPrevious={canGoPrevious}
                        canGoNext={canGoNext}
                        onPrevious={() => navigateToQuestion(currentQuestionIndex - 1)}
                        onNext={() => navigateToQuestion(currentQuestionIndex + 1)}
                    />
                </div>
            </div>
        </div>
    );
};

export default QuestionNavigator;