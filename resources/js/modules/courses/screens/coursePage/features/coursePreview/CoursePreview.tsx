import { useActiveSubSection } from '../../context/activeSubSectionCtx';
import SubSectionArea from './components/SubSectionArea';
import TeacherInfo from './components/TeacherInfo';
const CoursePreview = ({ course, name, loading }: { course: any; name: string; loading: boolean }) => {
    const { activeSubSection } = useActiveSubSection();

    return (
        <div className="main-rounded flex flex-1 flex-col gap-y-6 overflow-hidden rounded-[30px] bg-bgBackground p-4 drop-shadow-lg">
            <h2 className="border-b-2 border-b-stroke pb-6 text-xl font-medium">{course.name}</h2>

            <SubSectionArea subSection={activeSubSection} loading={loading} />

            <p className="text-center text-xl font-bold">{course.description}</p>

            <TeacherInfo teacher={course.tutor} />
        </div>
    );
};

export default CoursePreview;
