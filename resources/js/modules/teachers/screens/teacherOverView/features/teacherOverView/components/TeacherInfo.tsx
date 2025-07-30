import { Icon } from '@iconify/react/dist/iconify.js';
import { Link } from 'react-router';
const TeacherInfo = ({ teacher }: { teacher: any }) => {
    return (
        <div className="flex flex-col gap-y-6">
            <div className="flex flex-col gap-x-3 gap-y-3 lg:flex-row">
                <img src={teacher.image} alt={teacher.name} className="size-[120px] rounded-full" />
                <div>
                    <p className="text-[30px] font-bold">{teacher.name}</p>
                    <Link to={`/courses?subject_ids=${teacher.subject.id}`} className="text-xl">
                        {teacher.subject.name}
                    </Link>
                </div>
            </div>
            <div className="space-x-2">
                <span className="rounded border-r-5 border-r-white ps-1 text-xl font-bold">السيرة الذاتية : </span>
                <span className="leading-10">{teacher.biography}</span>
            </div>
            <div className="flex flex-wrap gap-x-2 gap-y-4">
                {teacher.grades.map((grade: any) => (
                    <span key={`${grade.id}`} className="rounded-full bg-mainColor-300 px-2 py-1 text-white">
                        {grade.name}
                    </span>
                ))}
            </div>
            <div className="flex w-fit rounded-2xl bg-mainColor-300 px-6 py-2">
                <p className="flex-center flex-col gap-y-2 border-e border-r-white pe-4 text-nowrap lg:pe-6">
                    <Icon icon="bi:play-btn-fill" className="size-6" />
                    كورس: {teacher.courses.length}
                </p>
                <p className="flex-center flex-col gap-y-2 border-e border-r-white px-4 text-nowrap lg:px-6">
                    <Icon icon="material-symbols:book-rounded" className="size-6" />
                    كتاب: {teacher.books.length}
                </p>
                <p className="flex-center flex-col gap-y-2 ps-4 text-nowrap lg:ps-6">
                    <Icon icon="healthicons:i-exam-qualification" className="size-6" />
                    كورس: {teacher.courses.length}
                </p>
            </div>
        </div>
    );
};

export default TeacherInfo;
