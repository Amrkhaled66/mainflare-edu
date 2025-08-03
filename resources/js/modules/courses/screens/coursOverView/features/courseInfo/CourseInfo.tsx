import 'react-loading-skeleton/dist/skeleton.css';
import AboutCourse from '../../../../components/AboutCourse';
import CourseDetails from '../../../../components/CourseDetails';
import CourseContent from './components/CourseContent';

import CourseContentSkeleton from '@/modules/courses/components/CourseContentSk';
const CourseInfo = ({ course, loading }: { course: any; loading: boolean }) => {
    return (
        <div className="flex flex-1 flex-col gap-6">
            {loading ? (
                <>
                    {/* <CourseDetailsSkeleton />
                    <AboutCourseSkeleton /> */}
                    <CourseContentSkeleton />
                </>
            ) : (
                <>
                    <h2 className="mb-3 text-xl font-bold lg:text-2xl">{course.grade.name}</h2>
                    <CourseDetails courseName={course.name} statics={course.statics} createdAt={course.createdAt} updatedAt={course.updatedAt} />
                    <AboutCourse about={course.about} />
                    <CourseContent courseContent={course.content} />
                </>
            )}
        </div>
    );
};

export default CourseInfo;
