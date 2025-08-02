import { Outlet } from 'react-router';

const layout = () => {
    return (
        <div>
            <p>layout dashboard</p>
            <p>layout dashboard</p>
            <Outlet />
        </div>
    );
};

export default layout;
