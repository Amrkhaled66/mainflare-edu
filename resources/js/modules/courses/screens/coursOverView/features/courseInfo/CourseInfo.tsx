import 'react-loading-skeleton/dist/skeleton.css';
import AboutCourse from './components/AboutCourse';
import CourseContent from './components/CourseContent';
import CourseDetails from './components/CourseDetails';
const CourseInfo = ({ course }: { course: any }) => {
    return (
        <div className="flex flex-1 flex-col gap-6">
            <h2 className="mb-3 text-xl lg:text-2xl font-bold">{course.grade.name}</h2>
            <CourseDetails courseName={course.name} statics={course.statics} createdAt={course.createdAt} updatedAt={course.updatedAt} />
            <AboutCourse about={course.about} />
            <CourseContent courseContent={course.content} />
        </div>
    );
};

export default CourseInfo;
