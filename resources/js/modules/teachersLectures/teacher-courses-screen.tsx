import PageTitle from '@/shared/components/PageTitle';
import CoursesSection from './features/Courses/CoursesSection';

const TeacherCoursesScreen = () => {
    return (
        <div className="container">
            <div className="space-y-8">
                <PageTitle title="اختار الفصل & الشابتر اللي عايز تذاكرة" />
                <CoursesSection />
            </div>
        </div>
    );
};

export default TeacherCoursesScreen;
