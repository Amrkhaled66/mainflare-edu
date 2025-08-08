import course from '../../course';
import CourseInfo from './features/courseInfo/CourseInfo';

import CourseSummary from './features/courseSummary/CourseSummary';

const CourseOverviewScreen = () => {
    const loading = false;
    return (
        <div className="container space-y-8">
            {/* {!loading && <PageTitle title={course.name} />} */}
            <div className="flex flex-col gap-x-10 gap-y-6 lg:flex-row">
                <CourseSummary courseImage={course.img} loading={loading} tutor={course.tutor} price={course.price} subject={course.subject} />
                <CourseInfo loading={loading} course={course} />
            </div>
        </div>
    );
};

export default CourseOverviewScreen;
