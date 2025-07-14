import Header from '@/shared/components/Header';

import { Outlet } from 'react-router';
const layout = () => {
    return (
        <div dir="rtl">
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default layout;
