import DashBoardContainer from '@/shared/components/ui/DashBoardContainer';
import QuestionResult from './features/QuestionsResult/QuestionResult';
import ResultChart from './features/ResultChart/ResultChart';
const ResultOverviewScreen = ({ toggleTabs, result }: { toggleTabs: () => void; result: any }) => {
    return (
        <DashBoardContainer>
            <div className="space-y-6">
                <p className="section-header">{result.examTitle}</p>
                <div className="flex flex-col gap-6 lg:flex-row">
                    <ResultChart totalQuestions={result.totalQuestions} correctAnswers={result.correctAnswers} />
                    <QuestionResult toggleTabs={toggleTabs} answers={result.answers} />
                </div>
            </div>
        </DashBoardContainer>
    );
};

export default ResultOverviewScreen;
