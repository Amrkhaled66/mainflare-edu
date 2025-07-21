import { Icon } from '@iconify/react/dist/iconify.js';
import { Link } from 'react-router';

import paths from '@/routes/paths';
const Action = ({ icon, content }: { icon: string; content: string }) => (
    <div className="flex-center animate lg:min-w-[150px] cursor-pointer gap-x-3 rounded-[20px] bg-white px-4 py-2 text-sm text-textColor hover:brightness-75">
        <div className="flex-center rounded-xl bg-stroke p-2">
            <Icon className="size-6" icon={icon} />
        </div>
        <p>{content}</p>
    </div>
);

const OverViewActions = ({ grades, id }: { grades: any[]; id: string }) => {
    return (
        <div className="flex flex-wrap items-center gap-5 ">
            <Action icon="guidance:study-room" content={grades.map((grade) => grade.name).join(', ')} />
            <Link to={paths.teacherBooks.path(id)}>
                <Action icon="solar:book-2-linear" content="الملازم" />
            </Link>
            <Link to={paths.teacherCourses.path(id)}>
                <Action icon="hugeicons:play" content="المحاضرات" />
            </Link>
        </div>
    );
};

export default OverViewActions;
