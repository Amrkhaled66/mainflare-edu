import Footer from '@/shared/components/Footer';
import Header from '@/shared/components/Header';
import PageNav from './shared/components/PageNav';

import { Outlet, useLocation } from 'react-router';
const layout = () => {
    const { pathname } = useLocation();
    return (
        <div dir="rtl">
            <Header />
            <main className={`pt-[100px]`}>
                <div className={`${pathname !== '/' && `section-padding`}`}>
                    <PageNav />
                    <Outlet />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default layout;
