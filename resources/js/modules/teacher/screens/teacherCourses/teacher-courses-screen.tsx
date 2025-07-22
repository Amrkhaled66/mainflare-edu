import PageTitle from '@/shared/components/ui/PageTitle';
import CoursesSection from './features/Courses/CoursesSection';

import usePageTitle from '@/shared/hooks/usePageTitle';
const TeacherCoursesScreen = () => {
    usePageTitle('الكورسات');
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
