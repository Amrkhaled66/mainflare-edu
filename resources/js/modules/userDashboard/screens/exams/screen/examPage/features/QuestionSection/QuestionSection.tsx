import QuestionAction from './components/QuestionAction';
import QuestionProgressHeader from './components/QuestionProgressHeader';
import SelectQuestion from './components/SelectQuestion';
import TextQuestion from './components/TextQuestion';
import { useExam } from '../../context/ExamContext';

const QuestionSection = () => {
    const { state, getCurrentQuestion } = useExam();
    const { exam } = state;
    const currentQuestion = getCurrentQuestion();

    if (!currentQuestion) {
        return (
            <div className="flex-1 space-y-6 rounded-3xl border border-stroke bg-white p-6">
                <p className="section-header">No questions available</p>
            </div>
        );
    }

    return (
        <div className="flex-1 space-y-6 rounded-3xl border border-stroke bg-white p-6">
            <p className="section-header">{exam.examTitle}</p>
            <QuestionProgressHeader />
            {currentQuestion.type === 'text' ? (
                <TextQuestion key={currentQuestion.id} question={currentQuestion} />
            ) : (
                <SelectQuestion 
                    key={currentQuestion.id} 
                    question={currentQuestion} 
                    options={currentQuestion.options || []} 
                />
            )}
            <QuestionAction />
        </div>
    );
};

export default QuestionSection;