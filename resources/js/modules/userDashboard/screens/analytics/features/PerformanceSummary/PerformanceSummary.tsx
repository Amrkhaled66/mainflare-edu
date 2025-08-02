import PerformanceSummaryCustomCard from './components/PerformanceSummaryCustomCard';

export default function PerformanceSummary({
    avgExamScore,
    examStats,
    videoStats,
}: {
    avgExamScore: number;
    examStats: { finished: number; shouldFinish: number };
    videoStats: { watched: number; shouldWatch: number };
}) {
    // const metrics = [
    //     { value: 12, total: 20, label: 'Videos Watched', color: '#F43F5E' },
    //     { value: 4, total: 6, label: 'Exams Finished', color: '#06B6D4' },
    //     { value: 76.5, total: 100, label: 'Avg Score', color: '#393962' },
    // ];

    return (
        <div className="grid gap-6 xl:grid-cols-3">
            <PerformanceSummaryCustomCard
                label="عدد الفيديوهات اللي شوفتها"
                chartLabel="الفيديوهات اللي شوفتها"
                finished={videoStats.watched}
                shouldFinished={videoStats.shouldWatch}
                chartColor="#F43F5E"
                label2="فيديو"
            />
            <PerformanceSummaryCustomCard
                label="عدد الأختبارات اللي خلصتها"
                chartLabel="الاختبارات اللي خلصتها"
                finished={examStats.finished}
                shouldFinished={examStats.shouldFinish}
                chartColor="#06B6D4"
                label2="اختبار"
            />
            <PerformanceSummaryCustomCard
                label="متوسط النتائج اللي جاوبتها"
                chartLabel="متوسط النتائج اللي جاوبتها"
                chartColor="#393962"
                finished={avgExamScore}
                shouldFinished={100}
                label2="نتيجة"
            />
        </div>
    );
}
