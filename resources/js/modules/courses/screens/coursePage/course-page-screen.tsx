import course from '../../course';
import CourseInfo from './features/CourseInfo/CourseInfo';
import CoursePreview from './features/coursePreview/CoursePreview';

import CourseInfoSkeleton from './features/CourseInfo/CourseInfoSk';
import CoursePreviewSkeleton from './features/coursePreview/CoursePreviewSk';

import { ActiveSubSectionProvider } from './context/activeSubSectionCtx';
const CoursePageScreen = () => {
    const loading = false;
    return (
        <ActiveSubSectionProvider
            initialSubSection={
                course.content[0]?.subSections[0]
                    ? { ...course.content[0].subSections[0], type: course.content[0].subSections[0].type as 'video' | 'book' | 'exam' }
                    : null
            }
        >
            <div className="container flex flex-col gap-y-8">
                {/* {!loading && <PageTitle title={course.name} />} */}
                <div className="flex flex-col-reverse gap-x-10 gap-y-8 xl:flex-row">
                    {loading ? (
                        <>
                            <CourseInfoSkeleton />
                            <CoursePreviewSkeleton />
                        </>
                    ) : (
                        <>
                            <CourseInfo course={course} loading={loading} />
                            <CoursePreview course={course} name={course.name} loading={loading} />
                        </>
                    )}
                </div>
            </div>
        </ActiveSubSectionProvider>
    );
};

export default CoursePageScreen;
