import { Icon } from '@iconify/react/dist/iconify.js';
import { Link } from 'react-router';
const columns = [
    {
        name: 'كود الكورس',
        selector: (row: { courseId: any }) => row.courseId,
        wrap: true,
    },
    {
        name: 'عرض الكورس',
        cell: (row: { courseId: any }) => (
            <Link className="hover:underline" to={`/courses/${row.courseId}`}>
                <div className="animate rounded-xl border border-mainColor bg-mainColor-700 px-2 py-2 text-nowrap text-white hover:bg-transparent">
                    <Icon icon="noto:eyes" className="size-6" />
                </div>
            </Link>
        ),
        wrap: true,
        width: 'auto',
    },
    {
        name: 'الكورس',
        cell: (row: { courseInfo: { img: string; name: string } }) => (
            <div className="flex-center gap-x-3">
                <img src={row.courseInfo.img} alt={row.courseInfo.name} className="size-14 rounded-xl object-cover" />
                <p className="line-clamp-2 text-sm">{row.courseInfo.name}</p>
            </div>
        ),
        width: '250px',
        wrap: true,
        sortable: true,
    },
    {
        name: 'تفاصيل الكورس',
        cell: (row: { courseInfo: { videosCount: number; filesCount: number; hwCount: number; examsCount: number } }) => (
            <div className="flex-center gap-x-4">
                <div className="flex-center flex-col gap-y-1">
                    <Icon icon={'fluent:video-16-regular'} className="size-6" />
                    <p className="text-sm text-nowrap">{row.courseInfo.videosCount} فيديو</p>
                </div>
                <div className="flex-center flex-col gap-y-1">
                    <Icon icon={'mynaui:file-solid'} className="size-6" />
                    <p className="text-sm text-nowrap">{row.courseInfo.filesCount} ملف</p>
                </div>
                <div className="flex-center flex-col gap-y-1">
                    <Icon icon={'bxs:file'} className="size-6" />
                    <p className="text-sm text-nowrap">{row.courseInfo.examsCount} امتحان</p>
                </div>
                <div className="flex-center flex-col gap-y-1">
                    <Icon icon={'healthicons:i-exam-qualification'} className="size-6" />
                    <p className="text-sm text-nowrap">{row.courseInfo.hwCount} واجب</p>
                </div>
            </div>
        ),
        width: '300px',
        wrap: true,
    },
    {
        name: 'خلصت قد ايه من الكورس',
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
    {
        name: 'تاريخ الدفع',
        cell: (row: { paidData: { paymentDate: string } }) => <div>{row.paidData?.paymentDate || '—'}</div>,
        // wrap: true,
        sortable: true,
        width: 'auto',
    },
    {
        name: 'طريقة الدفع',
        cell: (row: { paidData: { paymentMethod: string } }) => <div className="flex-center text-center">{row.paidData?.paymentMethod || '—'}</div>,
        width: 'auto',
    },
];
export default columns;