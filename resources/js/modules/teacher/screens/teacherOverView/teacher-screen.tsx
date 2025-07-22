import Actions from './features/actions/Actions';
import TeacherOverView from './features/teacherOverView/TeacherOverView';

import teacher from './teacher';
import usePageTitle from '@/shared/hooks/usePageTitle';
const TeacherScreen = () => {
    usePageTitle('تفاصيل المدرس');
    return (
        <div className="container ">
            <TeacherOverView  teacher={teacher} />
            <Actions id={teacher.id} />
        </div>
    );
};

export default TeacherScreen;
