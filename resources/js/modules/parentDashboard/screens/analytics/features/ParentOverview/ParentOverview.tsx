import ParentOverviewCustomCard from '../../components/ParentOverviewCustomCard';

interface ParentOverviewProps {
    childName: string;
    childGrade: string;
    totalChildren: number;
    activeCourses: number;
    monthlySpent: number;
}

const ParentOverview: React.FC<ParentOverviewProps> = ({ childName, childGrade, totalChildren, activeCourses, monthlySpent }) => {
    return (
        <div className="grid gap-6 lg:grid-cols-3">
            <ParentOverviewCustomCard icon="mdi:account-child" title="اسم الطالب" value={childName} color="#10B981" />
            <ParentOverviewCustomCard icon="mdi:school" title="الصف الدراسي" value={childGrade} color="#8B5CF6" />
            <ParentOverviewCustomCard icon="mdi:book-multiple" title="الكورسات النشطة" value={activeCourses} color="#F59E0B" />
        </div>
    );
};

export default ParentOverview;
