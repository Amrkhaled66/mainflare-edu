import { Icon } from '@iconify/react/dist/iconify.js';

const QuestionResult = ({ toggleTabs, answers }: { toggleTabs: () => void; answers: any[] }) => {
    return (
        <div className="dashBoard-subContainer h-fit flex-1 space-y-6">
            <p className="section-header">التنقل بين الاسئلة</p>
            <div className="space-y-3">
                <div className="flex flex-wrap gap-y-3 gap-x-2 lg:gap-x-3 border-b border-stroke pb-3">
                    {answers.map((answer: any, index: number) => {
                        const isCorrect = answer.isCorrect;
                        return (
                            <p
                                key={index}
                                className={`flex-center size-8 sm:size-10 lg:size-14 gap-3 rounded-full border text-center text-white ${isCorrect ? 'bg-greenColor' : 'bg-wrong'} `}
                            >
                                {index + 1}
                            </p>
                        );
                    })}
                </div>
                <div className="flex gap-x-5">
                    <div className="flex-center gap-x-2">
                        <div className="flex-center size-7 rounded-full bg-greenColor text-white">
                            <Icon icon="ic:outline-check" className="size-5" />
                        </div>
                        اجابة صحيحة
                    </div>
                    <div className="flex-center gap-x-2">
                        <div className="flex-center size-7 rounded-full bg-wrong text-white">
                            <Icon icon="material-symbols:close-rounded" className="size-5" />
                        </div>
                        اجابة غلط
                    </div>
                </div>
            </div>
            <button onClick={toggleTabs} className="btn  btn-primary px-7 h-12 ">
                شوف الاجابات
            </button>
        </div>
    );
};

export default QuestionResult;
