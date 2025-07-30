import TeacherInfo from './components/TeacherInfo';
const TeacherOverView = ({ teacher }: { teacher: any }) => {
    return (
        <div
            style={{
                background: 'var(--color-mainGradient)',
            }}
            className="flex h-fit flex-col gap-y-10 overflow-hidden rounded-[32px] px-4 py-6 pb-8 text-white lg:p-6"
        >
            <p className="rounded border-r-5 border-r-white ps-4 text-xl font-bold"> تفاصيل المدرس</p>
            <TeacherInfo teacher={teacher} />
        </div>
    );
};

export default TeacherOverView;
