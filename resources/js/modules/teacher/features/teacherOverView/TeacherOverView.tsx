import OverViewActions from './components/OverViewActions';
import TeacherInfo from './components/TeacherInfo';
const TeacherOverView = ({ teacher }: { teacher: any }) => {
    return (
        <div
            style={{
                background: 'var(--color-mainGradient)',
            }}
            className="flex h-fit pb-8 flex-col gap-y-10 text-white overflow-hidden rounded-[32px] px-4 py-6 lg:p-6"
        >
            <p className="rounded border-r-5 border-r-white ps-4 text-xl font-bold "> تفاصيل المدرس</p>
            <TeacherInfo image={teacher.img} name={teacher.name} subject={teacher.subject.name} biography={teacher.biography} />
            <OverViewActions grades={teacher.grades} id={teacher.id} />
        </div>
    );
};

export default TeacherOverView;
