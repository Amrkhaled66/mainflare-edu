import AboutCourse from '@/modules/courses/components/AboutCourse';
import CourseDetails from '@/modules/courses/components/CourseDetails';
import course from '@/modules/courses/course';
const AboutCourseComponent = () => {
    return (
        <div className="main-rounded flex flex-1 flex-col gap-6">
            <div className="flex flex-col gap-y-3">
                <h2 className="mb-3 text-xl font-bold lg:text-2xl">{course.grade.name}</h2>
                <CourseDetails courseName={course.name} statics={course.statics} createdAt={course.createdAt} updatedAt={course.updatedAt} />
            </div>
            <AboutCourse aboutClassName="!text-sm" about={course.about} />
        </div>
    );
};

export default AboutCourseComponent;
