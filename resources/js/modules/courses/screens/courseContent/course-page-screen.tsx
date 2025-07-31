import course from '../../course';

import CourseInfo from './features/CourseInfo/CourseInfo';
import CoursePlayer from './features/coursePlayer/CoursePlayer';
const CoursePageScreen = () => {
    const loading = false;
    return (
        <div className="container flex flex-col gap-y-8">
            {/* {!loading && <PageTitle title={course.name} />} */}
            <div className="flex flex-col-reverse gap-x-10 gap-y-8 xl:flex-row">
                <CourseInfo course={course} loading={loading} />
                <CoursePlayer  course={course} name={course.name} loading={loading} />
            </div>
        </div>
    );
};

export default CoursePageScreen;
