import ActivityDetailsCustomCard from './components/ActivityDetailsCustomCard';

interface ActivityDetailsProps {
    weeklyStudyHours: number;
    assignmentsCompleted: number;
    parentMeetings: number;
    lastLoginDays: number;
}

const ActivityDetails: React.FC<ActivityDetailsProps> = ({ weeklyStudyHours, assignmentsCompleted, lastLoginDays }) => {
    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            <ActivityDetailsCustomCard label="ساعات الدراسة الأسبوعية" value={`${weeklyStudyHours} ساعة`} color="#F43F5E" icon="mdi:clock-outline" />
            <ActivityDetailsCustomCard
                label="الواجبات المكتملة هذا الشهر"
                value={assignmentsCompleted}
                color="#10B981"
                icon="mdi:checkbox-marked-circle-outline"
            />

            <ActivityDetailsCustomCard label="آخر نشاط للطالب" value={`منذ ${lastLoginDays} يوم`} color="#F59E0B" icon="mdi:login-variant" />
        </div>
    );
};


export default ActivityDetails