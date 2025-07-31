import TeacherInfo from './components/TeacherInfo';
import VideoPlayer from './components/VideoPlayer';
const CoursePlayer = ({ course, name, loading }: { course: any; name: string; loading: boolean }) => {
    return (
        <div className="main-rounded flex flex-1 flex-col gap-y-6 overflow-hidden rounded-[30px] bg-bgBackground p-4 drop-shadow-lg">
            <h2 className="border-b border-b-stroke pb-6 text-xl font-medium">{course.name}</h2>
            <VideoPlayer loading={loading} />
            <TeacherInfo />
        </div>
    );
};

export default CoursePlayer;
