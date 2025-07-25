import PageTitle from '@/shared/components/ui/PageTitle';
import course from '../course';
import CourseInfo from './features/courseInfo/CourseInfo';
import CourseLectures from './features/courseLectures/CourseLectures';

import usePageTitle from '@/shared/hooks/usePageTitle';
const CourseOverviewScreen = () => {
    usePageTitle(course.name||"");
    const loading = false;
    return (
        <div className="container space-y-8">
            {!loading && <PageTitle title={course.name} />}
            <div className="space-y-6 lg:space-y-8">
                <CourseInfo
                    id={course.id}
                    loading={loading}
                    img={course.img}
                    tutor={course.tutor}
                    name={course.name}
                    price={course.price}
                    lecturesLength={course.lectures.length}
                    time={course.hours}
                />
                <CourseLectures loading={loading} lectures={course.lectures} />
            </div>
        </div>
    );
};

export default CourseOverviewScreen;
