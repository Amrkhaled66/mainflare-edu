import { useExam } from '@/modules/userDashboard/screens/exams/screen/examPage/context/ExamContext';

const TextQuestion = ({ question }: { question: any }) => {
    const { setAnswer, getQuestionAnswer } = useExam();
    const currentAnswer = getQuestionAnswer(question.id) || '';

    const handleAnswerChange = (value: string) => {
        setAnswer(question.id, value);
    };

    return (
        <div className="space-y-4">
            <h3 className="text-lg font-medium">{question.question}</h3>
            <textarea
                value={currentAnswer}
                onChange={(e) => handleAnswerChange(e.target.value)}
                className="w-full p-4 border bg-bgBackground border-stroke rounded-lg min-h-[120px] animate focus:outline-none focus:ring-1 focus:ring-mainColor"
                placeholder="اكتب إجابتك هنا..."
            />
        </div>
    );
};

export default TextQuestion;