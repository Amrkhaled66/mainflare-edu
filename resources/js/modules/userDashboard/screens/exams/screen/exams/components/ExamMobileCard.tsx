const ExamMobileCard = ({
    exam,
}: {
    exam: {
        id: number;
        courseInfo: { img: string; name: string };
        name: string;
        questionCount: number;
        successPercentage: number;
        lectureName: string;
        status: 'pending' | 'completed';
    };
}) => {
    const isPending = exam.status === 'pending';

    return (
        <div className="flex flex-col gap-y-3 rounded-3xl border border-stroke bg-white p-4 text-xs font-medium">
            <div className="flex items-center gap-3">
                <img src={exam.courseInfo.img} alt={exam.courseInfo.name} className="size-14 rounded-xl object-cover" />
                <p className="line-clamp-2 text-sm font-semibold">{exam.courseInfo.name}</p>
            </div>

            <div className="flex gap-x-2">
                <p>اسم الاختبار:</p>
                <span>{exam.name}</span>
            </div>

            <div className="flex gap-x-2">
                <p>المحاضرة:</p>
                <span>{exam.lectureName}</span>
            </div>

            <div>
                <button className={`btn h-10 w-full font-semibold text-white ${isPending ? 'btn-primary' : 'bg-[#04BA10] hover:brightness-95'}`}>
                    {isPending ? 'ابدأ الاختبار' : 'شاهد النتيجة'}
                </button>
            </div>
        </div>
    );
};

export default ExamMobileCard;
