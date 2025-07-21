import Footer from '@/shared/components/Footer';
import Header from '@/shared/components/Header';
import PageNav from './shared/components/PageNav';

import { Outlet, useLocation } from 'react-router';
import LoadingBar from './shared/components/LoadingBar';
import ScrollToTop from './shared/components/ScrollToTop';
const layout = () => {
    const { pathname } = useLocation();
    return (
        <div dir="rtl">
            <ScrollToTop />
            <Header />
            <LoadingBar />
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
