import course from '../course';

import PageTitle from '@/shared/components/ui/PageTitle';
import CoursePlayer from './features/coursePlayer/CoursePlayer';
import LecturesList from './features/lecturesList/LecturesList';
const CoursePageScreen = () => {
    const loading = false;
    return (
        <div className="container gap-y-8 flex flex-col">
            {!loading && <PageTitle title={course.name} />}
            <div className="flex flex-col gap-6 lg:flex-row">
                <CoursePlayer course={course} name={course.name} loading={loading} />
                <LecturesList loading={loading} lectures={course.lectures} />
            </div>
        </div>
    );
};

export default CoursePageScreen;
