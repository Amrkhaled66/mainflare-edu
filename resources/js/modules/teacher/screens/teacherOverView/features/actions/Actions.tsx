import CustomActionCard from './components/CustomActionCard';

import paths from '@/routes/paths';
const Actions = ({ id }: { id: string }) => {
    return (
        <div className="gap flex flex-col pt-8 lg:flex-row">
            <CustomActionCard
                title="احجز ملازم"
                subTitle="اطّلع على الملازم والملخصات الخاصة بالمقرر"
                icon="solar:book-2-linear"
                color="#886CE4"
                bg="#DCD2FF"
                to={paths.teacherBooks.path(id)}
            />
            <CustomActionCard
                title="شوف المحاضرات"
                subTitle="شاهد شرح المحاضرات في أي وقت"
                icon="basil:youtube-solid"
                color="#FB1212"
                bg="#FFD3D3"
                to={paths.teacherCourses.path(id)}
            />
        </div>
    );
};

export default Actions;
