import UserOverViewCustomCard from './components/UserOverViewCustomCard';
const UserOverView = ({
    userCode,
    coursesUserPaid,
    numberOfTeachersSubscribedWith,
}: {
    userCode: string;
    coursesUserPaid: number;
    numberOfTeachersSubscribedWith: number;
}) => {
    return (
        <div className="grid gap-6 lg:grid-cols-3">
            <UserOverViewCustomCard icon="streamline-flex:qr-code-remix" title="الكود الخاص بي" value={userCode} />
            <UserOverViewCustomCard icon="tabler:video" title="عدد الكورسات اللي اشتريتها" value={coursesUserPaid} />
            <UserOverViewCustomCard icon="ph:chalkboard-teacher-thin" title="عدد المدرسين اللي مشترك معاهم" value={numberOfTeachersSubscribedWith} />
        </div>
    );
};

export default UserOverView;
