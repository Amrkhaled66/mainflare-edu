import { ReactNode } from 'react';

interface Question {
    question: string;
    options?: string[];
    type: 'text' | 'select';
    userAnswer: string;
    correctAnswer?: string;
    isCorrect?: boolean;
}

const ResultSection = ({
    header,
    headerColor = 'bg-blue-600', // Fallback color
    body,
}: {
    header: string[];
    headerColor?: string;
    body: (string | ReactNode)[];
}) => {
    return (
        <div className="mb-4 overflow-hidden rounded-3xl border border-stroke drop-shadow-sm">
            <div className={`flex justify-between px-6 py-3 text-white ${headerColor}`}>
                {header.map((item, index) => (
                    <p key={index} className="font-medium">
                        {item}
                    </p>
                ))}
            </div>
            <div className="flex flex-col justify-between gap-4 px-6 py-4 md:flex-row">
                {body.map((item, index) => (
                    <div key={index} className="flex-1 break-words">
                        {typeof item === 'string' ? <p>{item}</p> : item}
                    </div>
                ))}
            </div>
        </div>
    );
};

const QuestionResult = ({ question }: { question: Question }) => {
    return (
        <div className="flex-1 space-y-4 rounded-3xl bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-xl font-bold text-gray-800">تفاصيل التصحيح</h3>

            <ResultSection headerColor="bg-mainColor" header={['نص السؤال']} body={[question.question]} />

            {question.options && (
                <ResultSection
                    headerColor="bg-mainColor"
                    header={['الخيارات المتاحة']}
                    body={[
                        <ul className="list-disc space-y-1 pl-5">
                            {question.options.map((opt, i) => (
                                <li key={i}>{opt}</li>
                            ))}
                        </ul>,
                    ]}
                />
            )}

            <ResultSection headerColor={question.isCorrect ? 'bg-greenColor' : 'bg-wrong'} header={['إجابتك']} body={[question.userAnswer]} />

            {question.correctAnswer && <ResultSection headerColor={'bg-greenColor'} header={['الإجابة الصحيحة']} body={[question.correctAnswer]} />}
        </div>
    );
};

export default QuestionResult;