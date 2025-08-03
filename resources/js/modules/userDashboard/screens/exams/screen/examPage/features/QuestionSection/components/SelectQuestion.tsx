import { useExam } from '@/modules/userDashboard/screens/exams/screen/examPage/context/ExamContext';

type SelectQuestionProps = {
    question: any;
    options: string[];
};

const SelectQuestion = ({ question, options }: SelectQuestionProps) => {
    const { setAnswer, getQuestionAnswer } = useExam();
    const selected = getQuestionAnswer(question.id) || '';

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAnswer(question.id, e.target.value);
    };

    return (
        <div className="space-y-4">
            <p className=" text-lg lg:text-2xl font-medium">{question.question}</p>
            <p className='font-medium text-lg'>اختر الإجابة الصحيحة</p>
            <form className="flex flex-col gap-4">
                {options.map((option, index) => (
                    <label key={index}>
                        <input
                            type="radio"
                            name={`question-${question.id}`}
                            value={option}
                            className="me-2"
                            checked={selected === option}
                            onChange={handleChange}
                        />
                        {option}
                    </label>
                ))}
            </form>
        </div>
    );
};

export default SelectQuestion;