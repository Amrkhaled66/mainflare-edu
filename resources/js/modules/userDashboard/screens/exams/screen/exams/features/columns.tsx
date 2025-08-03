import paths from '@/routes/paths';
import { Link } from 'react-router';
const columns = [
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
        name: 'اسم الامتحان',
        selector: (row: { name: string }) => row.name,
        width: 'auto',
    },
    {
        name: 'مطلوب في',
        selector: (row: { lectureName: string }) => row.lectureName,
        width: 'auto',
    },
    {
        name: 'الاجراء',
        cell: (row: { status: string; id: string }) => {
            const isPending = row.status === 'pending';
            const to = isPending ? paths.userDashboard.examPage.path(row.id) : paths.userDashboard.examResult.path(row.id);

            return (
                <Link to={to}>
                    <button className={` ${isPending ? 'btn btn-primary' : 'btn bg-[#04BA10]'} w-[200px]`}>
                        {isPending ? 'ابدأ الامتحان' : 'عرض النتيجة'}
                    </button>
                </Link>
            );
        },
        width: 'auto',
    },
];

export default columns;
