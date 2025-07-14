import Header from '@/shared/components/Header';

import { Outlet } from 'react-router';
const layout = () => {
    return (
        <div dir="rtl">
            <Header />
            <main className="pt-[120px]">
                <Outlet />
            </main>
        </div>
    );
};

export default layout;
