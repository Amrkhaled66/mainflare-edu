import { Link } from 'react-router';

const TeacherInfo = ({ teacher }: { teacher: any }) => {
    return (
        <div className="rounded-main flex items-center justify-between bg-white p-3">
            <div className="flex items-center gap-x-3">
                <img className="main-rounded size-[60px]" src={teacher.img} alt={teacher.name} />
                <p className="space-x-2 text-xl">
                    <span className='font-medium'>{teacher.name}</span>
                    <span>({teacher.subject})</span>
                </p>
            </div>
            <Link to={`/teachers/${teacher.id}`} className="hover:underline">
                عرض الملف الشخصي الخاص بالمدرس
            </Link>
        </div>
    );
};

export default TeacherInfo;
