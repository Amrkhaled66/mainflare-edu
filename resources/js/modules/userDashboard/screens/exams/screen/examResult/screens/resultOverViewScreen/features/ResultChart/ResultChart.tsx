import DoughnutChart from '@/modules/userDashboard/components/DoughnutChart';
import { Icon } from '@iconify/react/dist/iconify.js';
const ResultChart = ({ totalQuestions, correctAnswers }: { totalQuestions: number; correctAnswers: number }) => {
    return (
        <div className="lg:w-1/3 space-y-6 dashBoard-subContainer text-center">
            <p className="section-header">نسبة النجاح العامة</p>
            <div className="flex-center border-b border-stroke pb-3">
                <DoughnutChart
                    centerContent={
                        <div className="scale-90 text-center">
                            <p className="text-sm">الاجابات الصحيحة</p>
                            <p className="text-lg font-bold">80%</p>
                        </div>
                    }
                    segments={[
                        { label: 'اجابات صح', value: 80, color: '#00a756' },
                        { label: 'اجابات غلط', value: 20, color: '#f46854 ' },
                    ]}
                />
            </div>
            <div className="space-y-2">
                <p>
                    <span className="text-subTitle ">الدرجة : </span>
                    <span>
                        {correctAnswers} من {totalQuestions}
                    </span>
                </p>
                <p className='flex-center gap-x-2'>
                    <span className="text-subTitle ">النتيجة : </span>
                    {correctAnswers >= totalQuestions / 2 ? (
                        <span className="flex-center gap-x-1">
                            ناجح
                            <Icon icon="icon-park-solid:emotion-happy" className="size-6 text-greenColor" />
                        </span>
                    ) : (
                        <span className="flex-center gap-x-1">
                            لم ينجح
                            <Icon icon="icon-park-solid:emotion-sad" className="text-wrong size-6" />
                        </span>
                    )}
                </p>
            </div>
        </div>
    );
};

export default ResultChart;
