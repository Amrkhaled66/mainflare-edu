import PerformanceSummaryCustomCard from "./components/PerformanceSummaryCustomCard";

interface PerformanceSummaryProps {
    avgGrade: number;
    studyStats: { completed: number; total: number };
    attendanceStats: { present: number; total: number };
    homeworkStats: { submitted: number; total: number };
}

const PerformanceSummary: React.FC<PerformanceSummaryProps> = ({ avgGrade, studyStats, attendanceStats, homeworkStats }) => {
    return (
        <div className="grid place-items-center gap-6 lg:grid-cols-3">
            <PerformanceSummaryCustomCard
                label="معدل الحضور"
                chartLabel="نسبة الحضور"
                finished={attendanceStats.present}
                shouldFinished={attendanceStats.total}
                chartColor="#10B981"
                label2="يوم"
            />
            <PerformanceSummaryCustomCard
                label="نسبة أداء الواجبات"
                chartLabel="الواجبات المكتملة"
                finished={homeworkStats.submitted}
                shouldFinished={homeworkStats.total}
                chartColor="#3B82F6"
                label2="واجب"
            />
            <PerformanceSummaryCustomCard
                label="معدل الدرجات العام"
                chartLabel="المعدل التراكمي"
                finished={avgGrade}
                shouldFinished={100}
                chartColor="#8B5CF6"
                label2="درجة"
            />
        </div>
    );
};

export default PerformanceSummary;