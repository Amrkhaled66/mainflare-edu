import DashBoardContainer from '@/shared/components/ui/DashBoardContainer';
import { Icon } from '@iconify/react/dist/iconify.js';
import clsx from 'clsx';

const Answers = ({ data }: { data: any }) => {
    return (
        <div className="space-y-6">
            {data.map((answer: any, index: number) => {
                const isSelect = answer.type === 'select';
                const isText = answer.type === 'text';

                return (
                    <DashBoardContainer key={answer.questionId} className="relative !pt-16">
                        {/* Question number badge */}
                        <div className="absolute start-0 top-5 w-fit rounded-se-3xl rounded-ee-3xl bg-mainColor px-3 py-2 font-bold text-white">
                            {index + 1}
                        </div>

                        <div className="space-y-6">
                            {/* Question text */}
                            <p className="section-header font-medium text-lg lg:text-2xl">{answer.question}</p>

                            <div className="space-y-3 lg:space-y-4">
                                {/* Options list */}
                                {isSelect && (
                                    <div className="rounded-2xl border border-stroke bg-white p-3">
                                        <div className="space-y-2">
                                            <p>الاختيارات</p>
                                            <ul className="space-y-2">
                                                {answer.options.map((opt: any, i: number) => (
                                                    <li key={i}>
                                                        {i + 1} - {opt}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                )}

                                {/* User answer */}
                                <div
                                    className={clsx(
                                        'flex gap-y-1 rounded-2xl border border-stroke bg-white p-3',
                                        isSelect && 'flex-col justify-between lg:flex-row',
                                        isText && 'flex-col',
                                    )}
                                >
                                    <span className="text-xl font-semibold">اجابة الطالب</span>
                                    <span>{answer.userAnswer}</span>
                                </div>

                                {/* Correct / Wrong answer */}
                                {answer.isCorrect ? (
                                    <div
                                        className={clsx(
                                            'flex gap-y-3 rounded-2xl border border-stroke bg-green-200 p-3',
                                            isSelect ? 'w-full flex-col justify-between lg:flex-row lg:items-center' : 'flex-col',
                                        )}
                                    >
                                        <div className="flex items-center gap-x-3">
                                            <div className="w-fit rounded-full bg-green-600 p-1 text-green-200 lg:p-2">
                                                <Icon icon="material-symbols:check-rounded" width="24" height="24" />
                                            </div>
                                            <p className="text-xl font-semibold">اجابة صحيحة</p>
                                        </div>
                                        <p>{answer.correctAnswer}</p>
                                    </div>
                                ) : (
                                    <div className="grid gap-4 lg:grid-cols-2">
                                        {/* Wrong answer */}
                                        <div
                                            className={clsx(
                                                'flex gap-y-3 rounded-2xl border border-stroke bg-red-200 p-3',
                                                isSelect ? 'w-full flex-col justify-between lg:flex-row lg:items-center' : 'flex-col gap-y-3',
                                            )}
                                        >
                                            <div className="flex items-center gap-x-3">
                                                <div className="w-fit rounded-full bg-red-500 p-1 text-red-200 lg:p-2">
                                                    <Icon icon="material-symbols:close-rounded" width="24" height="24" />
                                                </div>
                                                <p className="text-xl font-semibold">اجابة غلط</p>
                                            </div>
                                            <p>{answer.userAnswer}</p>
                                        </div>

                                        {/* Correct answer box */}
                                        <div
                                            className={clsx(
                                                'flex rounded-2xl border border-stroke bg-sky-200 p-3',
                                                isSelect ? 'w-full items-center justify-between' : 'flex-col gap-y-3',
                                            )}
                                        >
                                            <p className="text-xl font-semibold">الاجابة الصحيحة</p>
                                            <p>{answer.correctAnswer}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </DashBoardContainer>
                );
            })}
        </div>
    );
};

export default Answers;
