import { Icon } from '@iconify/react/dist/iconify.js';

const parentCoursesColumns = [
    {
        name: 'اسم الكورس',
        selector: (row: { courseInfo: { name: string } }) => row.courseInfo.name,
        wrap: true,
        sortable: true,
        width: '200px',
    },
    {
        name: 'اسم المستر',
        selector: (row: { courseInfo: { teacher: string } }) => row.courseInfo.teacher,
        wrap: true,
        sortable: true,
        width: '200px',
    },
    {
        name: 'الفيديوهات',
        cell: (row: { courseInfo: { videosCount: number }; watchedVideosCount: number }) => (
            <div className="flex-center flex-col gap-1 text-sm">
                <div className="flex items-center gap-2">
                    <Icon icon="fluent:video-16-regular" className="size-5" />
                    <span className="">المتاح: {row.courseInfo.videosCount}</span>
                </div>
                <div className="flex items-center gap-2">
                    <Icon icon="mdi:check-circle-outline" className="size-5 text-green-600" />
                    <span className="text-nowrap">تم المشاهدة: {row.watchedVideosCount}</span>
                </div>
            </div>
        ),
        minWidth: '150px',
    },
    {
        name: 'الامتحانات',
        cell: (row: { courseInfo: { examsCount: number }; submittedExamsCount: number }) => (
            <div className="flex-center flex-col gap-1 text-sm">
                <div className="flex items-center gap-2">
                    <Icon icon="mdi:clipboard-text-outline" className="size-5" />
                    <span>المتاح: {row.courseInfo.examsCount}</span>
                </div>
                <div className="flex items-center gap-2">
                    <Icon icon="mdi:check-circle-outline" className="size-5 text-green-600" />
                    <span className="text-nowrap">تم الحل: {row.submittedExamsCount}</span>
                </div>
            </div>
        ),
        minWidth: '150px',
    },
    {
        name: 'الواجبات',
        cell: (row: { courseInfo: { hwCount: number }; submittedHomeworksCount: number }) => (
            <div className="flex flex-col items-center justify-center gap-1 text-sm">
                <div className="flex items-center gap-2">
                    <Icon icon="healthicons:i-exam-qualification" className="size-5" />
                    <span>المتاح: {row.courseInfo.hwCount}</span>
                </div>
                <div className="flex items-center gap-2">
                    <Icon icon="mdi:check-circle-outline" className="size-5 text-green-600" />
                    <span className="text-nowrap">تم التسليم: {row.submittedHomeworksCount}</span>
                </div>
            </div>
        ),
        minWidth: '150px',
    },
    {
        name: 'تاريخ نشر الكورس',
        selector: (row: { courseInfo: { publishedAt: string } }) => row.courseInfo.publishedAt,
        sortable: true,
        width: 'auto',
    },
    {
        name: 'آخر مشاهدة',
        selector: (row: { lastWatchedAt: string }) => row.lastWatchedAt || '—',
        sortable: true,
        width: 'auto',
        minWidth: '250px',
    },

    {
        name: 'نسبة الإنجاز',
        cell: (row: { myProgress: number }) => (
            <div className="flex w-full items-center gap-x-2 px-2">
                <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200">
                    <div
                        className="h-full bg-mainColor text-center text-xs font-bold text-white transition-all duration-300"
                        style={{ width: `${row.myProgress}%` }}
                    ></div>
                </div>
                <p className="text-sm text-nowrap"> {row.myProgress}%</p>
            </div>
        ),
        minWidth: '250px',
        sortable: true,
    },
];

export default parentCoursesColumns;
