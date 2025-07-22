import Actions from './features/actions/Actions';
import TeacherOverView from './features/teacherOverView/TeacherOverView';

import teacher from './teacher';
const TeacherScreen = () => {
    return (
        <div className="container ">
            <TeacherOverView  teacher={teacher} />
            <Actions id={teacher.id} />
        </div>
    );
};

export default TeacherScreen;
