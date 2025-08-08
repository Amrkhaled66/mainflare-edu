import { Icon } from '@iconify/react/dist/iconify.js';

const ParentCourseMobileCard = ({ course }: { course: any }) => {
    return (
        <div className="flex flex-col gap-y-4 rounded-3xl border border-stroke bg-white p-4 text-xs font-medium">
            {/* 1 - Course Name */}
            <div className="flex items-center gap-x-2">
                <Icon icon="mdi:book-education-outline" className="text-primary size-5" />
                <p className="text-sm font-semibold">{course.courseInfo.name}</p>
            </div>

            {/* 2 - Videos Watched / Total */}
            <div className="flex items-center gap-x-2">
                <Icon icon="fluent:video-16-regular" className="size-4" />
                <p>
                    {course.watchedVideosCount} من {course.courseInfo.videosCount} فيديو
                </p>
            </div>

            {/* 3 - Published Date */}
            <div className="flex items-center gap-x-2">
                <Icon icon="mdi:calendar-month-outline" className="size-4" />
                <p>تاريخ النشر: {course.courseInfo.publishedAt}</p>
            </div>

            {/* 4 - Homeworks & Exams */}
            <div className="flex items-center gap-x-6">
                <div className="flex items-center gap-x-1">
                    <Icon icon="healthicons:i-exam-qualification" className="size-4" />
                    <p>
                        {course.submittedHomeworksCount} / {course.courseInfo.hwCount} واجب
                    </p>
                </div>
                <div className="flex items-center gap-x-1">
                    <Icon icon="mynaui:file-solid" className="size-4" />
                    <p>
                        {course.submittedExamsCount} / {course.courseInfo.examsCount} امتحان
                    </p>
                </div>
            </div>

            {/* 5 - My Progress Bar */}
            <div className="space-y-1">
                <p className="text-xs">التقدم:</p>
                <div className="h-3 w-full rounded-full bg-gray-200">
                    <div className="h-3 rounded-full bg-mainColor" style={{ width: `${course.myProgress}%` }}></div>
                </div>
                <p className="text-right text-[10px]">{course.myProgress}%</p>
            </div>
        </div>
    );
};

export default ParentCourseMobileCard;
