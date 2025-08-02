import ActivityDetailsCustomCard from './components/ActivityDetailsCustomCard';

const ActivityDetails = ({
    totalLectureWatchTime,
    videoViewCount,
    examOpenCount,
    examFinishCount,
}: {
    totalLectureWatchTime: number;
    videoViewCount: number;
    examOpenCount: number;
    examFinishCount: number;
}) => {
    return (
        <div className="gap grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-4">
            <ActivityDetailsCustomCard label="إجمالي مدة فتح المحاضرات علي الموقع" value={totalLectureWatchTime} color="#F43F5E" />
            <ActivityDetailsCustomCard label="إجمالي عدد مرات مشاهدة الفيديوهات" value={videoViewCount} color="#EAB308" />
            <ActivityDetailsCustomCard label="اجمالي عدد مرات فتح الاختبار" value={examOpenCount} color="#06B6D4" />
            <ActivityDetailsCustomCard label="اجمالي عدد مرات إنهاء الاختبارات" value={examFinishCount} color="#393962" />
        </div>
    );
};

export default ActivityDetails;
