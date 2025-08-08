import DashBoardContainer from '@/shared/components/ui/DashBoardContainer';
import Answers from './components/Answers';
import QuestionResult from './components/QuestionResult';
import ResultChart from './components/ResultChart';

const ResultOverviewScreen = ({ onCloseResult, result }: { onCloseResult: () => void; result: any }) => {
    return (
        <div className="space-y-8">
            <DashBoardContainer>
                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <p className="section-header">{result.examName}</p>
                        <button className="rounded-xl bg-mainColor px-2 py-1 text-sm text-white sm:text-base lg:px-4 lg:py-3" onClick={onCloseResult}>
                            الرجوع الي الامتحانات
                        </button>
                    </div>
                    <div className="flex flex-col gap-6 lg:flex-row">
                        <ResultChart totalQuestions={result.totalQuestions} correctAnswers={result.correctAnswers} />
                        <QuestionResult answers={result.answers} />
                    </div>
                </div>
            </DashBoardContainer>
            <Answers data={result.answers} />
        </div>
    );
};

export default ResultOverviewScreen;
