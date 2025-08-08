import DashBoardContainer from '@/shared/components/ui/DashBoardContainer';
import QuestionNavigator from './features/QuestionNavigator/QuestionNavigator';
import QuestionResult from './features/QuestionResult/QuestionResult';

import { useCallback, useState } from 'react';

const ResultQuestionsScreen = ({ toggleTabs, result }: { toggleTabs: () => void; result: any }) => {
    const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

    const navigateToQuestion = useCallback((index: number) => {
        setActiveQuestionIndex(index);
    }, []);

    const canGoPrevious = activeQuestionIndex !== 0;
    const canGoNext = activeQuestionIndex < result.answers.length - 1;

    return (
        <DashBoardContainer>
            <div className="flex flex-col gap-6 lg:flex-row">
                <QuestionResult question={result.answers[activeQuestionIndex]} />
                <div className="lg:w-[30%] space-y-6">
                    <QuestionNavigator
                        navigateToQuestion={navigateToQuestion}
                        currentQuestionIndex={activeQuestionIndex}
                        answers={result.answers}
                        canGoPrevious={canGoPrevious}
                        canGoNext={canGoNext}
                    />
                    <button onClick={toggleTabs} className="btn btn-primary w-full">
                        شوف النتيجة
                    </button>
                </div>
            </div>
        </DashBoardContainer>
    );
};

export default ResultQuestionsScreen;