import { Outlet } from 'react-router';
import PagesOptions from './features/PagesOptions/PagesOptions';

const TeacherPageLayout = () => {
    return (
        <div className="container space-y-8 lg:space-y-10">
            <PagesOptions />
            <Outlet />
        </div>
    );
};

export default TeacherPageLayout;
